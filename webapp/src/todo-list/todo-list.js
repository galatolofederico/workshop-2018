import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import "../todo-element/todo-element.js"
import "@polymer/app-layout/app-grid/app-grid-style.js"
import '@polymer/app-storage/app-localstorage/app-localstorage-document.js'


class TodoList extends PolymerElement {
    constructor() {
      super()
      this._boundListenerAdd = this.aggiungiElemento.bind(this)
      this._boundListenerClear = this.pulisci.bind(this)
      this._boundListenerChangeList = this.cambiaLista.bind(this)
    }

    ready() {
      super.ready()
      window.addEventListener('new-memo', this._boundListenerAdd)
      window.addEventListener('clean-memos', this._boundListenerClear)
      window.addEventListener('change-todo-list', this._boundListenerChangeList)
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
      <app-localstorage-document key={{currentList}} data={{elements}}>
      </app-localstorage-document>
        `;
    }

    aggiungiElemento(memo) {
      this.elements = this.elements.concat({ value: memo.detail, checked: false })
    }

    pulisci() {
      this.elements = this.elements.filter(element => !element.checked)
    }

    cambiaLista(list) {
      this.currentList = list.detail
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