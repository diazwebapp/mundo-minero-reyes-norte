const mediaPickerModalTemplate = document.createElement('template');
mediaPickerModalTemplate.innerHTML = `
<style>
    :host {
        display: none;
    }
    :host([open]) {
        display: block;
    }
    .overlay {
        position: fixed;
        inset: 0;
        background-color: rgba(0,0,0,0.7);
        backdrop-filter: blur(5px);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal {
        background-color: #1f2937;
        border: 1px solid #374151;
        border-radius: 12px;
        width: 90vw;
        height: 80vh;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .modal-header {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid #374151;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .modal-header h3 { margin: 0; }
    .close-btn {
        background: none;
        border: none;
        color: #d1d5db;
        font-size: 2rem;
        cursor: pointer;
    }
    .modal-body {
        padding: 1.5rem;
        overflow-y: auto;
        flex-grow: 1;
    }
    .media-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem;
    }
    .media-item {
        border-radius: 8px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: border-color 0.2s;
    }
    .media-item.selected {
        border-color: #2ecc71;
        box-shadow: 0 0 10px #2ecc71;
    }
    .modal-footer {
        padding: 1rem 1.5rem;
        border-top: 1px solid #374151;
        display: flex;
        justify-content: flex-end;
    }
</style>
<div class="overlay">
    <div class="modal">
        <header class="modal-header">
            <h3>Seleccionar Archivo(s)</h3>
            <button class="close-btn" type="button" title="Cerrar">&times;</button>
        </header>
        <div class="modal-body">
            <div class="media-grid">
                <!-- Media items will be injected here -->
            </div>
            <div class="upload-section">
              <h4>Subir Nuevo Archivo</h4>
              <form class="upload-form">
                <input type="file" name="files" multiple required />
                <button type="submit">Subir</button>
              </form>
            </div>
        </div>
        <footer class="modal-footer">
            <button id="select-images-btn" class="btn">Usar Archivos Seleccionados</button>
        </footer>
    </div>
</div>
`;

class MediaPickerModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(mediaPickerModalTemplate.content.cloneNode(true));

        this.selection = [];
        this.isMultiple = false;

        this.shadowRoot.querySelector('.close-btn').addEventListener('click', () => this.close());
        this.shadowRoot.querySelector('.overlay').addEventListener('click', (e) => {
            if (e.target === this.shadowRoot.querySelector('.overlay')) {
                this.close();
            }
        });
        this.shadowRoot.querySelector('.upload-form').addEventListener('submit', (e) => this.handleUpload(e));
        this.shadowRoot.querySelector('#select-images-btn').addEventListener('click', () => this.dispatchMultiSelection());
    }

    open(options = {}) {
        this.isMultiple = options.multiple || false;
        this.selection = [];
        this.shadowRoot.querySelector('.modal-footer').style.display = this.isMultiple ? 'flex' : 'none';
        this.setAttribute('open', '');
        this.fetchAndRenderMedia();
    }

    close() {
        this.removeAttribute('open');
    }

    toggleSelection(element, url) {
        const index = this.selection.indexOf(url);
        if (index > -1) {
            this.selection.splice(index, 1);
            element.classList.remove('selected');
        } else {
            this.selection.push(url);
            element.classList.add('selected');
        }
    }

    dispatchMultiSelection() {
        this.dispatchEvent(new CustomEvent('images-selected', { detail: { urls: this.selection } }));
        this.close();
    }

    async fetchAndRenderMedia() {
        const grid = this.shadowRoot.querySelector('.media-grid');
        grid.innerHTML = '<p>Cargando...</p>';
        try {
            const res = await fetch('/api/admin/media/all');
            const mediaFiles = await res.json();
            
            grid.innerHTML = ''; // Clear loading
            mediaFiles.forEach(file => {
                if (file.file_type.startsWith('image/')) {
                    const item = document.createElement('div');
                    item.classList.add('media-item');
                    item.dataset.url = file.public_url;
                    item.innerHTML = `<img src="${file.public_url}" width="250" alt="${file.alt_text || ''}" />`;
                    
                    item.addEventListener('click', () => {
                        if (this.isMultiple) {
                            this.toggleSelection(item, file.public_url);
                        } else {
                            this.dispatchEvent(new CustomEvent('image-selected', { detail: { url: file.public_url } }));
                            this.close();
                        }
                    });
                    grid.appendChild(item);
                }
            });

        } catch (err) {
            grid.innerHTML = '<p>Error al cargar los archivos.</p>';
            console.error(err);
        }
    }

    async handleUpload(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const submitButton = form.querySelector('button');
        submitButton.disabled = true;
        submitButton.textContent = 'Subiendo...';

        try {
            const res = await fetch('/api/admin/media/upload', {
                method: 'POST',
                body: formData,
            });
            if (res.ok) {
                form.reset();
                this.fetchAndRenderMedia(); // Refresh the grid
            } else {
                alert('Error al subir el archivo.');
            }
        } catch (err) {
            console.error('Upload failed:', err);
            alert('Error al subir el archivo.');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Subir';
        }
    }
}

// Define the custom element if it's not already defined
if (!customElements.get('media-picker-modal')) {
    customElements.define('media-picker-modal', MediaPickerModal);
}
