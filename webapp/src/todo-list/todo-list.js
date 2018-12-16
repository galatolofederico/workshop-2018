import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import "../todo-element/todo-element.js"
import "@polymer/app-layout/app-grid/app-grid-style.js"

class TodoList extends PolymerElement {
    constructor() {
      super()
      this._boundListenerAdd = this.aggiungiElemento.bind(this)
      this._boundListenerClear = this.pulisci.bind(this)
    }

    ready() {
      super.ready()
      window.addEventListener('new-memo', this._boundListenerAdd)
      window.addEventListener('clean-memos', this._boundListenerClear)
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
          margin-left: 10%;
          width: 85%
        }

        ul li {
          padding: 0px 10px;
        }

        @media (max-width: 640px) {
          :host {
            --app-grid-columns: 1;
          }
        }
    
      </style>

      <ul class="app-grid">
        <template id="lista" is="dom-repeat" items={{elements}}>
          <li class="item"><todo-element checked={{item.checked}} value={{item.value}}></todo-element></li>
        </template>
      </ul>
        `;
    }

    aggiungiElemento(memo) {
      this.elements.push({ value: memo.detail, checked: false })
      this.$.lista.render()
    }

    pulisci() {
      this.elements = this.elements.filter(element => !element.checked)
    }

    static get properties() {
        return {
          elements : { 
            type: Array,
            value: [ 
                { value: "Nota 1", checked: false },
                { value: "Nota 2", checked: false },
                { value: "Nota 3", checked: false },
                { value: "Nota 4", checked: false },
                { value: "Nota 5", checked: false },
                { value: "Nota 6", checked: false }
            ],
            notify: true,
            reflectToAttribute: true
          }
        }
    }
}

customElements.define('todo-list', TodoList);