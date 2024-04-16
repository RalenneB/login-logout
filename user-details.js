import { LitElement, css } from 'lit';
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
        /* padding: 12px; */
        /* margin: 12px; */
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
        /* padding: 12px; */
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
    this.username = getUser();
  }

  render() {
    const userDetailsContentDiv = document.getElementById('userDetailsContent');
    const userDetailsDiv = document.getElementById('userDetails');

    if (userDetailsDiv && userDetailsContentDiv) {
      userDetailsDiv.innerHTML = '';
      if (this.username) {
        userDetailsContentDiv.textContent = `Welcome, ${this.username}! Your inspiration for today awaits!`;
        userDetailsContentDiv.style.fontFamily = 'INGMe, sans-serif';
        userDetailsContentDiv.style.padding = '12px';
        userDetailsContentDiv.style.margin = '12px';

        userDetailsDiv.style.fontFamily = 'INGMe, sans-serif';
        userDetailsDiv.style.color = 'rgb(76 74 74)';
        userDetailsDiv.style.padding = '12px';
        userDetailsDiv.style.margin = '12px';

        // eslint-disable-next-line array-callback-return, array-callback-return
        Object.entries(wiseQuotes).map(([, value]) => {
          const detailDiv = document.createElement('div');
          detailDiv.textContent = `${value}`;
          detailDiv.style.margin = '12px 0';
          detailDiv.style.width = '350px';
          detailDiv.style.backgroundColor = '#fff1e5';
          detailDiv.style.borderRadius = '8px';
          detailDiv.style.boxShadow = `0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)`;

          userDetailsDiv.appendChild(detailDiv);
        });
      } else {
        userDetailsDiv.innerHTML = '';
        userDetailsContentDiv.innerHTML = '';
      }
    }
  }
}

customElements.define('user-details', UserDetails);
