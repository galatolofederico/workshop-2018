import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import "@polymer/paper-dialog/paper-dialog.js"
import "@polymer/paper-button/paper-button.js"
import '@polymer/paper-icon-button/paper-icon-button.js'
import "@polymer/iron-icon/iron-icon.js"
import "@polymer/iron-icons/iron-icons.js"
import "@polymer/paper-input/paper-input.js"

class DialogBox extends PolymerElement {
    static get template() {
        return html`

            <paper-icon-button raised on-click="_openDialog" icon="add"></paper-icon-button>

            <paper-dialog id="dialog">
                <h2>Aggiungi memo</h2>
                <p><paper-input id="new_memo"></paper-input></p>
                <div class="buttons">
                    <paper-button dialog-dismiss>Annulla</paper-button>
                    <paper-button dialog-confirm autofocus on-click="_aggiungiMemo">Aggiungi</paper-button>                
                </div>
            </paper-dialog>

       `;
    }

    _openDialog() {
        this.$.dialog.open()
    }

    _aggiungiMemo() {
        //Concat per forzare l'aggiornamento dell'array e l'update di dom-repeat
        //(che altrimenti controlla solo se l'array e' lo stesso e non gli elementi)
        this.arr = this.arr.concat({value: this.$.new_memo.value})
    }

    static get properties() {
        return {
            arr : {
                type: Array,
                notify: true,
                reflectToAttribute: true
            }
        }
    }
}

customElements.define('dialog-box', DialogBox);