import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-menu-button/paper-menu-button.js'
import '@polymer/paper-dialog/paper-dialog.js'
import '@polymer/app-storage/app-localstorage/app-localstorage-document.js'


class DropdownTodos extends PolymerElement {

    static get template() {
        return html`
            <paper-menu-button on-iron-select="_changeList">
                <paper-icon-button icon="menu" slot="dropdown-trigger"></paper-icon-button>
                <paper-listbox slot="dropdown-content">
                    <template is=dom-repeat items={{todos}}>
                        <paper-item>{{item}}</paper-item>
                    </template>
                    <paper-item id="new_todo_list">Aggiungi nuova</paper-item>
                </paper-listbox>
            </paper-menu-button>

            <paper-dialog id="dialog">
                <h2>Nome lista:</h2>
                <p><paper-input id="new_list"></paper-input></p>
                <div class="buttons">
                    <paper-button dialog-dismiss>Annulla</paper-button>
                    <paper-button dialog-confirm autofocus on-click="_aggiungiLista">Aggiungi</paper-button>                
                </div>
            </paper-dialog>

            <app-localstorage-document key=todosList data={{todos}}>
            </app-localstorage-document>
        `;
    }

    _aggiungiLista(){
        console.log(this.$.new_list)
        this.todos = this.todos.concat(this.$.new_list.value)
    }

    _changeList(e){
        if (e.target.selectedItem.id != "new_todo_list") {
            this.dispatchEvent(new CustomEvent('change-todo-list', {
                bubbles:true,
                composed:true ,
                detail: e.target.selectedItem.innerText
                }))
        } else {
            this.$.dialog.open()
        }
    }

    static get properties() {
        return {
            todos: {
                type: Array,
                value: [
                    "default",
                    "Lista 2"
                ],
                notify: true,
                reflectToAttribute: true
            }
        }
    }
}

customElements.define('dropdown-todos', DropdownTodos);