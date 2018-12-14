import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import "../todo-element/todo-element.js"
import "../todo-list/todo-list.js"

/**
 * @customElement
 * @polymer
 */
class WebappApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <todo-list> </todo-list>

    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'webapp-app'
      }
    };
  }
}

window.customElements.define('webapp-app', WebappApp);
