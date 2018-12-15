import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import "@polymer/paper-input/paper-input.js"
import "@polymer/paper-button/paper-button.js"
import "../dialog-box/dialog-box.js"

class DialogBoxTodo extends PolymerElement {
    static get template() {
        return html`
    
            <dialog-box arr={{arr}}>
                <span slot="title">Aggiungi memo</span>
                <p><paper-input id="new_memo"></paper-input></p>
                <div class="buttons">
                    <paper-button dialog-dismiss>Annulla</paper-button>
                    <paper-button dialog-confirm autofocus on-click="_aggiungiMemo">Aggiungi</paper-button>                
                </div>
            </dialog-box>
        `;
    }

    _aggiungiMemo() {
        //Concat serve per forzare l'aggiornamento dell'array e l'update di dom-repeat
        //(che altrimenti controlla solo se l'array e' lo stesso e non gli elementi)
        this.arr = this.arr.concat({value: this.$.new_memo.value})
        this.$.new_memo.value = ""
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

customElements.define('dialog-box-todo', DialogBoxTodo);