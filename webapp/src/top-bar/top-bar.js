import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import "@polymer/app-layout/app-header/app-header.js"
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '../dialog-box/dialog-box.js'


class TopBar extends PolymerElement {
    static get template() {
        return html`

        <style>
        app-header {
            position:fixed;
            top: 0;
            left: 0;    
            width: 100%;
            color: #fff;
            background-color: #4285f4;
        }
        </style>

        <app-header reveals>
            <app-toolbar>
                <div main-title>Workshop</div>
                <dialog-box arr={{arr}}></dialog-box>
            </app-toolbar>
        </app-header>
        `;
    }

    static get properties() {
        return {
            arr : {
                type: Array,
                notify: true,
                reflectToAttribute: true
            }
        }
    }
}

customElements.define('top-bar', TopBar);
