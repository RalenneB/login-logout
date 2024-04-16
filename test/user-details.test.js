import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { sleep } from '../src/utils.js';
import { UserDetails } from '../user-details.js';

const credentials = { username: 'admin', password: 'pass' };

describe('UserDetails', () => {
  let userDetailComponent;
  beforeEach(() => {
    sessionStorage.setItem('username', credentials.username);
    sessionStorage.setItem('password', credentials.password);
    userDetailComponent = new UserDetails();

    userDetailComponent.dispatchEvent(
      new CustomEvent('loggedIn', { bubbles: true, composed: true })
    );
  });

  it('user details should exist after after login', async () => {
    await sleep(200);
    const el = await fixture(html`<user-details></user-details>`);
    expect(el).to.exist;
  });
});
