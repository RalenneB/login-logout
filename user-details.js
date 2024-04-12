import { LitElement, html, css, nothing } from 'lit';
import { getUser } from './src/utils';

export default class UserDetails extends LitElement {
  static get styles() {
    return css`
      * {
        font-family: INGMe, sans-serif;
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
    this.username = getUser();
  }

  render() {
    return html`
      ${this.username
        ? html`<h1>User details</h1>
            <div style="color:red">Add some stuff in here too</div>`
        : nothing}
      <!-- <h1>User details</h1>
      <div style="color:red">Add some stuff in here too</div> -->
    `;
  }
}

// export default UserDetails;
// customElements.define('user-details', UserDetails);

window.customElements.define('user-details', UserDetails);
