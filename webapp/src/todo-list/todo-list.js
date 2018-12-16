import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import "../todo-element/todo-element.js"
import "@polymer/app-layout/app-grid/app-grid-style.js"

class TodoList extends PolymerElement {
    constructor() {
      super()
      this._boundListener = this.aggiungiElemento.bind(this)
    }

    ready() {
      super.ready()
      window.addEventListener('add', this._boundListener)
    }

    static get template() {
        return html`
        <style include="app-grid-style">

        :host {
          --app-grid-columns: 3;
        }
    
        ul {
          padding: 0;
          list-style: none;
          margin-left: 3%;
        }

        @media (max-width: 640px) {
          :host {
            --app-grid-columns: 1;
          }
        }
    
      </style>

      <ul class="app-grid">
        <template is="dom-repeat" items={{elements}}>
          <li class="item"><todo-element value={{item.value}}></todo-element></li>
        </template>
      </ul>
        `;
    }

    aggiungiElemento(memo) {
      this.elements = this.elements.concat({ value: memo.detail })
    }

    static get properties() {
        return {
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
        }
    }
}

customElements.define('todo-list', TodoList);