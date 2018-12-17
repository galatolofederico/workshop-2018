import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-menu-button/paper-menu-button.js'

class DropdownTodos extends PolymerElement {

    static get template() {
        return html`
            <paper-menu-button on-iron-select="_changeList">
                <paper-icon-button icon="menu" slot="dropdown-trigger"></paper-icon-button>
                <paper-listbox slot="dropdown-content">
                    <template is=dom-repeat items={{todos}}>
                        <paper-item>{{item}}</paper-item>
                    </template>
                </paper-listbox>
            </paper-menu-button>
        `;
    }

    _changeList(e){
        this.dispatchEvent(new CustomEvent('change-todo-list', {
            bubbles:true,
            composed:true ,
            detail: e.target.selectedItem.innerText
            }))
    }

    static get properties() {
        return {
            todos: {
                type: Array,
                value: [
                    "Lista 1",
                    "Lista 2"
                ],
                notify: true,
                reflectToAttribute: true
            }
        }
    }
}

customElements.define('dropdown-todos', DropdownTodos);