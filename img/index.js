import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginForm from './LoginForm';
import UserTable from './UserTable';
import UserForm from './UseForm';
import EditUserForm from './EditUserForm';
import UserDashboard from './UserDashboard';
import UserCardGrid from './UserCardGrid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginForm/>
    <UserTable/>
    <UserForm/>
    <App/>
    {/* <EditUserForm/> */}
    <UserDashboard/>
    <UserCardGrid/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
