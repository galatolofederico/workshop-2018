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
        <template is="dom-repeat" items={{elements}}>
          <li class="item"><todo-element value=[[item.value]]></todo-element></li>
        </template>
      </ul>
        `;
    }
    static get properties() {
        return {
          elements : { 
            Type: Array(),
            value() { 
              return  [
                { value: "1" },
                { value: "2" },
                { value: "3" },
                { value: "4" },
                { value: "5" },
                { value: "6" }
              ] 
            }
          }
        }
    }
}

customElements.define('todo-list', TodoList);