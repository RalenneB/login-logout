import { LitElement, html } from 'lit';
import { UserDetails } from './user-details.js';
import { LoginLogout } from './login-logout.js';

export class AppContainer extends LitElement {
  static get scopedElements() {
    return {
      'user-details': UserDetails,
      'login-logout': LoginLogout,
    };
  }

  render() {
    return html`
      <!-- listener component -->
      <user-details>
        <!-- dispatcher component -->
        <login-logout></login-logout>
      </user-details>
    `;
  }
}

customElements.define('app-container', AppContainer);
