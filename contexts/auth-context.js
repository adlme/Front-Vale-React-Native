import React, { Component } from 'react';
import authService from '../services/auth-service.js';

export const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isLoggedIn: false,
    user: {},
    isLoading: true,
  }

  userSignUp = (user) => {
    return authService.signup(user)
    .then((user) => {
      this.setState({
        isLoggedIn: true,
        user
      })
    })
  }

  userLogin = (user) => {
    return authService.login(user)
    .then((user) => {
      this.setState({
        isLoggedIn: true,
        user
      })
    }) 
  }

  userLogout = () => {
    return authService.logout()
    .then(() => {
      this.setState({
        isLoggedIn: false,
        user: {}
      })
    })
  }

  componentDidMount() {
    this.updateUserData();
  }

  updateUserData = () => {
    return authService.me()
    .then(user => {
      this.setState({
        user,
        isLoggedIn: true,
        isLoading: false,
      })
    })
    .catch(() => {
      this.setState({
        isLoggedIn: false,
        user: {},
        isLoading: false,
      })
    })
  }

  render() {
    const {user, isLoggedIn, isLoading} = this.state;
    return (
      <>
        {isLoading ? 
          <img className="loading-gif" src={require("../images/loading/indeterminate_loader_blur2.gif")} alt=""/>
          : (
            <AuthContext.Provider value={ 
              {
                user,
                isLoggedIn,
                login: this.userLogin,
                signup: this.userSignUp,
                logout: this.userLogout,
                updateUserData: this.updateUserData
              }
            }>
              {this.props.children}
            </AuthContext.Provider>
          )}
      </>
    );
  }
}

export default AuthProvider;