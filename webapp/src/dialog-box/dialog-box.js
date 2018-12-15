import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import "@polymer/paper-dialog/paper-dialog.js"
import '@polymer/paper-icon-button/paper-icon-button.js'
import "@polymer/iron-icon/iron-icon.js"
import "@polymer/iron-icons/iron-icons.js"


class DialogBox extends PolymerElement {
    static get template() {
        return html`

            <paper-icon-button raised on-click="_openDialog" icon="add"></paper-icon-button>

            <paper-dialog id="dialog">
                <h2><slot name="title"></slot></h2>
                <slot></slot>
            </paper-dialog>

       `;
    }

    _openDialog() {
        this.$.dialog.open()
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