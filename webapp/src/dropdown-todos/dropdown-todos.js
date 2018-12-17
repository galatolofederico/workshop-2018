import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-menu-button/paper-menu-button.js'

class DropdownTodos extends PolymerElement {
    static get template() {
        return html`
            <paper-menu-button on-iron-select="_changeList">
                <paper-icon-button icon="arrow-drop-down" slot="dropdown-trigger"></paper-icon-button>
                <paper-listbox slot="dropdown-content">
                    <paper-item id="test1">Test1</paper-item>
                    <paper-item id="test2">Test2</paper-item>
                </paper-listbox>
            </paper-menu-button>
        `;
    }

    _changeList(e){
        this.list = e.target.selectedItem.id
    }

    static get properties() {
        return {
            list: {
                type: String,
                value: "",
                notify: true,
                reflectToAttribute: true
            }
        }
    }
}

customElements.define('dropdown-todos', DropdownTodos);