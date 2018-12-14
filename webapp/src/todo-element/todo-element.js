import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import "@polymer/paper-checkbox/paper-checkbox.js"

class TodoElement extends PolymerElement {
    static get template() {
        return html`
            <style>
                p.barrato {
                    text-decoration: line-through;
                }
            </style>

            <paper-checkbox checked={{checked}}>
                <p class$="[[_getStyle(checked)]]"> [[testo]] </p> 
            </paper-checkbox>
        `;
    }

    _getStyle(){
        return this.checked ? "barrato" : ""
    }

    static get properties() {
        return {
            testo: {
                type: String,
                value: "Test",
                notify: true,
                reflectToAttribute: true
            },
            checked: {
                type: Boolean,
                value: true,
                notify: true,
                reflectToAttribute: true
            }
        }
    }
}

customElements.define('todo-element', TodoElement);