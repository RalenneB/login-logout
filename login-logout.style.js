import { css } from 'lit';

export const LoginLogoutStyle = [
  css`
    * {
      font-family: INGMe, sans-serif;
    }
    ::slotted(*) {
      font-size: 14px;
      padding: 8px;
    }
    .header {
      display: flex;
      padding: 25px;
      background-color: #e9e9e9;
      align-items: center;
    }

    .header-elem {
      width: 300px;
    }
    .p-elem {
      display: flex;
      justify-content: center;
    }
    .modal-div {
      display: flex;
      justify-content: center;
    }
    .return {
      border-radius: 8px;
      margin-left: 8px;
    }
    .username-input {
      padding: 12px 0;
    }
    .log-btn {
      background-color: #ff6f00;
      color: white;
      border-radius: 8px;
    }

    .card-container {
      padding: 12px;
    }
    .login-container {
      background-color: whitesmoke;
      width: 350px;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
      padding: 12px;
      margin: 12px;
    }
    .login-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #454545;
    }
    p {
      color: gray;
      font-size: 14px;
    }
    span {
      padding: 0 8px;
    }
    .login-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
    }
    .nav-container {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: flex-end;
    }
    .card-list {
      list-style-type: none;
      padding: 0px;
      display: grid;
      gap: 1rem;
      align-items: center;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      width: 100%;
    }
    .card-item {
      width: 350px;
      background-color: #fff1e5;
      border-radius: 8px;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
      padding: 12px;
    }
    .card-item:hover {
      background-color: bisque;
      box-shadow: 10px 11px 12px 4px rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
    }
    /* The Modal (background) */
    .modal {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0, 0, 0); /* Fallback color */
      background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    }

    /* Modal Content */
    .modal-content {
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 35%;
      border-radius: 8px;
      box-shadow: 4px 5px 14px 1px #000000ad;
    }

    /* The Close Button */
    .close {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
    .btn {
      padding: 8px;
      background-color: #ff6f00;
      color: white;
      border-radius: 8px;
    }

    .btn:hover {
      /* background-color: #ff5500; */
      /* color: #ff5500; */
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
    }
  `,
];
