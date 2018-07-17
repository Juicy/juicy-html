import '../../../@polymer/polymer/polymer-legacy.js';
import '../../juicy-html.js';
import { Polymer } from '../../../@polymer/polymer/lib/legacy/polymer-fn.js';
import { html as html$0 } from '../../../@polymer/polymer/lib/utils/html-tag.js';
import { Templatizer } from '../../../@polymer/polymer/lib/legacy/templatizer-behavior.js';
Polymer({
  _template: html$0`
        <h2>My-app custom element</h2>
        <style>
            paper-menu {
                width: 300px;
            }
        </style>
        <juicy-html href="{{viewmodel.html}}" model="{{viewmodel}}" on-stamped="stamped"></juicy-html>
`,

  is: "my-app",
  behaviors: [Templatizer],

  ready: function () {
      this.viewmodel = {
          username: 'World',
          menuItems: [
            { label: "Item 1", icon: "add" },
            { label: "Item 2", icon: "settings" },
            { label: "Item 3", icon: "delete" },
            { label: "Item 4", icon: "work" }
          ],
          html: './partials/page_3.html'
      }
  },

  stamped: function (event) {
      // Play with Polymer's templating voodoo
  }
});
