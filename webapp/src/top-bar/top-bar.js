import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '../dialog-box-todo-add/dialog-box-todo-add.js'
import '../dialog-box-todo-clear/dialog-box-todo-clear.js'


class TopBar extends PolymerElement {
    static get template() {
        return html`
        <app-toolbar>
            <div main-title>Workshop</div>
            <dialog-box-todo-add></dialog-box-todo-add>
            <dialog-box-todo-clear></dialog-box-todo-clear>
        </app-toolbar>
        `;
    }

    static get properties() {
        return {
        }
    }
}

customElements.define('top-bar', TopBar);
