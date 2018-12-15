import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import "../todo-element/todo-element.js"
import "../todo-list/todo-list.js"
import "../top-bar/top-bar.js"

/**
 * @customElement
 * @polymer
 */
class WebappApp extends PolymerElement {
  static get template() {
    // CSS should be better
    return html`
      <style>
        :host {
          display: block;
        }
        todo-list {
          display: block;
          margin-top: 70px;
        }
      </style>
      <top-bar> </top-bar>
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
