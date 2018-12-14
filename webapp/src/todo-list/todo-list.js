import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import "../todo-element/todo-element.js"
import "@polymer/app-layout/app-grid/app-grid-style.js"

class TodoList extends PolymerElement {
    static get template() {
        return html`
        <style include="app-grid-style">

        :host {
          --app-grid-columns: 3;
        }
    
        ul {
          padding: 0;
          list-style: none;
        }

    
        @media (max-width: 640px) {
          :host {
            --app-grid-columns: 1;
          }
        }
    
      </style>
      <ul class="app-grid">
        <li class="item">1</li>
        <li class="item">2</li>
        <li class="item">3</li>
        <li class="item">3</li>
        <li class="item">3</li>
        
      </ul>
        `;
    }
    static get properties() {
        return {
            
        }
    }
}

customElements.define('todo-list', TodoList);