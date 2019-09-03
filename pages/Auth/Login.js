import React, { Component } from "react";
import { Link } from "react-router-dom";

import withAuth from "../../components/withAuth";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props
      .login({ email, password })
      .then(user => {
        console.log(user);
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.login - signup - wrapper}>
        <form style={styles.formLoginSignup} onSubmit={this.handleFormSubmit}>
          <label htmlFor="email" style={styles.inp}>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="&nbsp;"
              value={email}
              onChange={this.handleChange}
              required
            />
            <span style={styles.label}>Email</span>
          </label>
          <label htmlFor="password" style={styles.inp}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="&nbsp;"
              value={password}
              onChange={this.handleChange}
              required
            />
            <span style={styles.label}>Password</span>
          </label>

          <input
            style={styles.btn.btnSignupFinal}
            type="submit"
            value="Login"
          />
        </form>
        <Text>You don't have an account yet?</Text>
        <Link style={styles.loginSignupLink} to={"/signup"}>
          Signup!
        </Link>
      </View>
    );
  }
}

export default withAuth(Login);
const styles = StyleSheet.create({
  plansWrapper: {
    width: "100%",
    minWidth: "100vw",
    minHeight: "100vh",
    paddingTop: "12%",
    paddingBottom: "85px"
  },
  plansList: {
    padding: "2% 0"
  },
  searchIcon: {
    height: 30,
    boxShadow: "0px 0px 5px 0px rgba(183, 179, 179, 0.75)",
    borderRadius: "50%"
  }
});
