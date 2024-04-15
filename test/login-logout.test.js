import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
// eslint-disable-next-line import/no-extraneous-dependencies
import sinon from 'sinon';

import '../login-logout.js';
import { sleep } from '../src/utils.js';

const credentials = { username: 'admin', password: 'pass' };

describe('LoginLogout', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('has a default login container', async () => {
    // await sleep(5000);
    const el = await fixture(html`<login-logout></login-logout>`);
    const loginContainer = el.shadowRoot.getElementById('login-container');

    expect(loginContainer).to.exist;
  });

  it('should not login if user/pass is missing', async () => {
    await sleep(10);
    const el = await fixture(html`<login-logout></login-logout>`);
    el.shadowRoot.querySelectorAll('lion-input')[0].modelValue = '';
    el.shadowRoot.querySelectorAll('lion-input')[1].modelValue = '';
    ('nottherealpass');
    // const alertSpy = sinon.spy(window, 'alert');
    const alertStub = sinon
      .stub(window, 'alert')
      .callsFake(() => Promise.resolve());

    el.shadowRoot.querySelector('lion-button').click();
    await alertStub; // to further investigate
    sinon.assert.calledWith(
      alertStub,
      'You need to provide an user and a password!'
    );
    alertStub.restore();

    // sinon.assert.calledWith(alertSpy, 'User denied!'); // this will not work as it triggers the real alert

    expect(sessionStorage.username).to.deep.equal(undefined);
    expect(sessionStorage.password).to.deep.equal(undefined);
  });

  it('should not login with wrong credentials', async () => {
    await sleep(10);
    const el = await fixture(html`<login-logout></login-logout>`);
    console.log(el);
    el.shadowRoot.querySelectorAll('lion-input')[0].modelValue = 'user';
    el.shadowRoot.querySelectorAll('lion-input')[1].modelValue =
      'nottherealpass';
    // const alertSpy = sinon.spy(window, 'alert');
    const alertStub = sinon
      .stub(window, 'alert')
      .callsFake(() => Promise.resolve());

    el.shadowRoot.querySelector('lion-button').click();
    await alertStub; // to further investigate
    sinon.assert.calledWith(alertStub, 'User denied!');
    alertStub.restore();

    // sinon.assert.calledWith(alertSpy, 'User denied!'); // this will not work as it triggers the real alert

    expect(sessionStorage.username).to.deep.equal(undefined);
    expect(sessionStorage.password).to.deep.equal(undefined);
  });

  it('should login with right credentials', async () => {
    const el = await fixture(html`<login-logout></login-logout>`);
    const loginContainer = el.shadowRoot.getElementById('login-container');
    console.log(loginContainer);
    el.shadowRoot.querySelectorAll('lion-input')[0].modelValue =
      credentials.username;
    el.shadowRoot.querySelectorAll('lion-input')[1].modelValue =
      credentials.password;
    el.shadowRoot.querySelector('lion-button').click();
    await sleep(100);

    expect(sessionStorage.username).to.deep.equal(credentials.username);
    expect(sessionStorage.password).to.deep.equal(credentials.password);
    expect(el.shadowRoot.querySelector('h1').textContent).to.deep.equal(
      'Minimalistic POC App'
    );
  });
});
