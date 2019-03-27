/* eslint-disable */
import React, { Component } from 'react';
import './App.css';

import logo from './assets/LightSmallLogo.png';
import Dashboard from './components/dashboard';
import Register from './components/register';
import Login from './components/login';

class App extends Component {
  // if user is not null, render dashboard
  // if it is null, redirect to login
  state = {
    user: null,
    authPage: 'login',
    token: null,
  }

  logout = () => {
    this.setState({
      user: null,
      authPage: 'login',
      token: null,
    });
    window.localStorage.removeItem('token');
  }

  render() {
    return (
      <div className="App">
        {this.state.user
          ? <Dashboard
              user={this.state.user}
              token={this.state.token}
              logout={this.logout}
              updateUser={this.updateUser}
            />
          : this.state.authPage === 'register'
            ? <Register
                toggleLogin={() => this.setState({authPage: 'login'})}
                setSession={(user, token) => this.setState({ user, token })}
              />
            : <Login
                toggleRegister={() => this.setState({authPage: 'register'})}
                setSession={(user, token) => this.setState({ user, token })}
              />
        }
      </div>
    );
  }
}

export default App;
