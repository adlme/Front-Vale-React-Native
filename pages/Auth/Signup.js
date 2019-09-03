import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { View, Text, StyleSheet } from "react-native";

import withAuth from "../../components/withAuth";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    message: "",
    redirect: false
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    this.props
      .signup({ email, password })
      .then(data => {
        console.log(data);
        data.message
          ? this.setState({
              message: data.message
            })
          : this.setState({
              email: "",
              password: "",
              redirect: true
            });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, redirect } = this.state;
    return (
      <View style={styles.login - signup - wrapper}>
        <form style={styles.formLoginSignup} onSubmit={this.handleFormSubmit}>
          <label htmlFor="email" style={styles.inp}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="&nbsp;"
              value={email}
              onChange={this.handleChange}
              required
            />
            <span style={styles.label}>Email</span>
          </label>
          {this.state.message ? (
            <Text id="error">{this.state.message}</Text>
          ) : null}

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
            style={styles.btnBtnSignupFinal}
            type="submit"
            value="Signup"
          />
        </form>
        <Text>Already have an account?</Text>
        <Link style={styles.loginSignupLink} to={"/login"}>
          Login!
        </Link>
        {redirect ? <Redirect to="/plans" /> : null}
      </View>
    );
  }
}

export default withAuth(Signup);

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
