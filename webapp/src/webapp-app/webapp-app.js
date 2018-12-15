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
      <top-bar arr={{elements}}></top-bar>
      <todo-list arr={{elements}}> </todo-list>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'webapp-app'
      },
      elements : { 
        type: Array,
        value: [ 
            { value: "1" },
            { value: "2" },
            { value: "3" },
            { value: "4" },
            { value: "5" },
            { value: "6" }
        ],
        notify: true,
        reflectToAttribute: true
      }
    };
  }
}

window.customElements.define('webapp-app', WebappApp);
