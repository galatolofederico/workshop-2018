import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import "@polymer/paper-input/paper-input.js"
import "@polymer/paper-button/paper-button.js"
import "../dialog-box/dialog-box.js"

class DialogBoxTodoClear extends PolymerElement {

    static get template() {
        return html`
    
            <dialog-box icon="delete-forever">
                <span slot="title">Elimina memo</span>
                <p>Vuoi eliminare le note completate?</p>
                <div class="buttons">
                    <paper-button dialog-dismiss>Annulla</paper-button>
                    <paper-button dialog-confirm autofocus on-click="_elimina">Elimina</paper-button>                
                </div>
            </dialog-box>
        `;
    }

    _elimina() {
        this.dispatchEvent(new CustomEvent('clean-memos', {
            bubbles: true,
            composed: true,
        }))
    }
    
    static get properties() {
        return {
        }
    }
}

customElements.define('dialog-box-todo-clear', DialogBoxTodoClear);