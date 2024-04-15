import { LitElement, html, css } from 'lit';
import { getUser, wiseQuotes } from './src/utils.js';

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
    // document.addEventListener('loggedIn', () => {
    //   this.render();
    // });
  }

  // initial render
  // render() {
  //   return html`
  //     ${this.username
  //       ? html`<h1>User details</h1>
  //           <div style="color:red">Add some stuff in here too</div>`
  //       : nothing}
  //     <!-- <h1>User details</h1>
  //     <div style="color:red">Add some stuff in here too</div> -->
  //   `;
  // }

  render() {
    const userDetailsDiv = document.getElementById('userDetails');
    // const userDetailsDiv = this;
    userDetailsDiv.innerHTML = '';

    const userDetailsContentDiv = document.getElementById('userDetailsContent');

    if (this.username) {
      const username = sessionStorage.getItem('username');
      userDetailsContentDiv.textContent = `Welcome, ${username}!`; // de revenit cu un hide or smth
      userDetailsContentDiv.style.fontFamily = 'INGMe, sans-serif';
      userDetailsContentDiv.style.padding = '12px';
      userDetailsContentDiv.style.margin = '12px';

      userDetailsDiv.style.fontFamily = 'INGMe, sans-serif';
      userDetailsDiv.style.color = 'rgb(76 74 74)';
      userDetailsDiv.style.padding = '12px';
      userDetailsDiv.style.margin = '12px';

      // // create other divs for mapping

      // const usernameDiv = document.createElement('div');

      // userDetailsDiv.appendChild(usernameDiv);

      // // eslint-disable-next-line array-callback-return
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
// }

customElements.define('user-details', UserDetails);
