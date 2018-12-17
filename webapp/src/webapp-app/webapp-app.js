import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import "@polymer/app-layout/app-box/app-box.js"
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
        app-header {
          background-color: #4285f4;
          color: #fff;
          box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        }
      </style>
        
      <app-header-layout fullbleed>
        <app-header slot="header">
          <top-bar></top-bar>
        </app-header>
        <app-box>
          <todo-list> </todo-list>
        </app-box>
        
      </app-header-layout>
    `;
  }
  static get properties() {
    return {
    };
  }
}

window.customElements.define('webapp-app', WebappApp);
