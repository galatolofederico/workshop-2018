import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/paper-menu-button/paper-menu-button.js'
import '../dialog-box-todo-add/dialog-box-todo-add.js'
import '../dialog-box-todo-clear/dialog-box-todo-clear.js'
import '../dropdown-todos/dropdown-todos.js'


class TopBar extends PolymerElement {
    static get template() {
        return html`
        <app-toolbar>
            <dropdown-todos list={{currentList}}></dropdown-todos>
            <div main-title>
                Todo list: {{currentList}}
            </div>
            <dialog-box-todo-add></dialog-box-todo-add>
            <dialog-box-todo-clear></dialog-box-todo-clear>
        </app-toolbar>
        `;
    }

    static get properties() {
        return {
            currentList : {
                type: String,
                value: "Workshop",
                notify: true,
                reflectToAttribute: true
            }
        }
    }
}

customElements.define('top-bar', TopBar);
