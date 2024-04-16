import { LitElement, css, html } from 'lit';
import { getUser, wiseQuotes } from './src/utils.js';

export class UserDetails extends LitElement {
  static get styles() {
    return css`
      * {
        font-family: INGMe, sans-serif;
      }
      .divContainer {
        margin: 12px 0;
        width: 350px;
        background-color: #fff1e5;
        border-radius: 8px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
      }

      #userDetailsDiv {
        font-family: INGMe, sans-serif;
        color: rgb(76 74 74);
        list-style-type: none;
        display: grid;
        gap: 1rem;
        align-items: center;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        width: 100%;
      }
      #userDetailsContent {
        font-family: INGMe, sans-serif;
        color: rgb(76 74 74);
        margin: 12px;
      }
    `;
  }

  static get properties() {
    return {
      username: String,
    };
  }

  constructor() {
    super();
    this.username = getUser(); // it persists from the session storage, otherwise on each refresh it becomes empty
  }

  _loginListener(e) {
    this.username = e.detail;
    this.requestUpdate();
  }

  _logoutListener() {
    this.username = null;
    this.requestUpdate();
  }

  render() {
    return html`
      <p
        style="margin-top:0"
        @loggedIn=${this._loginListener}
        @loggedOut="${this._logoutListener}"
      >
        <slot> </slot>
      </p>
      ${this.username
        ? html` <div id="userDetailsContent">
            Welcome, dear ${this.username}!
            <div id="userDetailsDiv">
              ${Object.entries(wiseQuotes).map(
                ([, value]) => html`<div class="divContainer">${value}</div>`
              )}
            </div>
          </div>`
        : ''}
    `;
  }
}

customElements.define('user-details', UserDetails);
