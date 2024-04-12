import { LitElement, html } from 'lit';
// import { LionButton, LionInput, LionButtonSubmit } from '@lion/ui/button.js';
import '@lion/ui/define/lion-button.js';
import '@lion/ui/define/lion-button-submit.js';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-icon.js';
import { nothing } from 'lit-html';
import {
  // dispatchCustomEvent,
  wiseQuotes,
  // ConfirmationBox,
} from './src/utils.js';
import { LoginLogoutStyle } from './login-logout.style.js';
import UserDetails from './user-details.js';
// import ConfirmationBox from './src/confirmation-box.js';
// import ConfirmationBox from './src/confirmation-box.js';
// import '@confirmation-box.js';
// import '@ing-web/define/icons.js';
// import { customElement } from 'lit/decorators.js';

// @customElement('app-login')
export class LoginLogout extends LitElement {
  static get scopedElements() {
    return {
      // 'lion-input': LionInput,
      // 'lion-button': LionButton,
      // 'confirmation-box': ConfirmationBox,
      // 'ing-icon': IngIcons,
      'user-details': UserDetails,
    };
  }

  static get styles() {
    return LoginLogoutStyle;
  }

  static get properties() {
    return {
      username: String,
      password: String,
      modal: Object,
      btn: Object,
      span: Object,
    };
  }

  constructor() {
    super();
    this.username = sessionStorage.getItem('username') || null;
    this.password = sessionStorage.getItem('password') || null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.persistedData();
    // this.handleUserDetails();
  }

  // handleUserDetails() {
  //   this.querySelector('a').addEventListener('click', event => {
  //     event.preventDefault();
  //     const route = event.target.getAttribute('data-route');
  //     window.location.hash = `${route}`;
  //   });
  // }

  handleLogin() {
    const username = this.shadowRoot.getElementById('username').modelValue;
    const password = this.shadowRoot.getElementById('password').modelValue;

    if (!username || !password) {
      return alert('You need to provide an user and a password!');
    }
    if (username !== 'admin' || password !== 'pass') {
      return alert('User denied!');
    }
    this.username = username;
    this.password = password;
    this.persistedData();
    // Implement login functionality
    // Mocking login success

    return this.dispatchEvent(
      new CustomEvent('login-success', { bubbles: true, composed: true })
    );
  }

  handleModalLogout() {
    // Get the modal and change the display
    const modal = this.shadowRoot.getElementById('myModal');
    modal.style.display = 'block';
    // Get the <span> element that closes the modal
    const span = this.shadowRoot.getElementById('close');
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    // doesnt work
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }

  handleReturn() {
    const modal = this.shadowRoot.getElementById('myModal');
    modal.style.display = 'none';
  }

  handleLogout() {
    sessionStorage.clear();
    this.username = null;
    this.password = null;
  }

  isLoggedIn() {
    if (this.username && this.password) {
      return true;
    }
    return false;
  }

  persistedData() {
    // debugger;
    if (this.username && this.password) {
      sessionStorage.setItem('username', this.username);
      sessionStorage.setItem('password', this.password);
      this.username = sessionStorage.getItem('username');
      this.password = sessionStorage.getItem('password');
    }
    return nothing;
  }

  getUserDetails() {
    // console.log('inside user details');
    // const userElem = this.shadowRoot.getElementById('userDetails');
    // console.log(userElem);
    console.log('aici'); // does not render the user details
    return html`
      ${this.isLoggedIn() ? html` <user-details>Hey!</user-details>` : nothing}
    `;
    // return true;
  }

  render() {
    return html`
      ${this.isLoggedIn()
        ? html`<nav class="ing-header">
              <div style="width:300px"><h1>Minimalistic POC App</h1></div>
              <div class="nav-container">
                <lion-button id="userDetails" style="background-color:transparent" @click="${
                  this.getUserDetails
                }">Hello ${this.username}!</lion-button>
                <lion-button class="btn" id="modalBtn"
                 
                  @click="${this.handleModalLogout}"
                  >Logout</lion-button
                >
                <div id="myModal" class="modal">
                  <!-- Modal content -->
                  <div class="modal-content">
                    <span id="close" class="close">&times;</span>
                    <p style="display: flex;justify-content: center;">Are you sure you want to logout?</p>
                    <div style="display: flex;justify-content: center;">
                      <lion-button id="logout" class="btn" @click="${
                        this.handleLogout
                      }">Yes</lion-button>
                      <lion-button id="logout" style="border-radius:8px; margin-left:8px" @click="${
                        this.handleReturn
                      }">No</lion-button>
                    </div>
                   </div>
                  </div>
               
                </div>
              </div>
            </nav>
            <main>
              <div class="card-container">
                <p>Your inspiration for today, ${this.username}! Enjoy!</p>
                <div class="card-list">
                ${Object.values(wiseQuotes).map(
                  quote => html` <div class="card-item">${quote}</div> `
                )}
                  </div>
                </div>
              </div>
            </main>`
        : html`<div class="login-container">
            <div class="login-text">
              <!-- <ing-icon icon-id="ing:filledin-apps:identifier"></ing-icon> -->
              <!-- <lion-icon icon-id="lion:space:alienSpaceship"></lion-icon> -->
              <lion-icon
                icon-id="lion:space:rocket"
                aria-label="rocket"
                aria-hidden="false"
                role="img"
              ></lion-icon>
              <h2>LOGIN</h2>
              <p>
                Hey, you awesome, this is the start of a new great day! Ready to
                rock'n'roll?
              </p>
            </div>
            <lion-input
              style="padding:12px 0"
              id="username"
              placeholder="Username"
              aria-required
            ></lion-input>
            <lion-input
              id="password"
              placeholder="Password"
              type="password"
              aria-required
            ></lion-input>
            <div class="login-btn">
              <lion-button
                class="btn"
                style="background-color: #ff6f00;color: white;border-radius: 8px;"
                @click="${this.handleLogin}"
                >Login</lion-button
              >
            </div>
          </div>`}
    `;
  }
}
// export default LoginLogout;
customElements.define('login-logout', LoginLogout);
