import React, { Component } from "react";
import { Link } from "react-router-dom";
import userAPI from "../../services/user-service";
import Moment from "react-moment";
import BackNav from "../../components/BackNav";
import { View, Text, StyleSheet } from "react-native";

class CreatedPlans extends Component {
  state = {
    user: {},
    loading: true
  };

  componentDidMount() {
    userAPI
      .getUserProfile()
      .then(data => {
        this.setState({ user: data, loading: false });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { user } = this.state;
    return (
      <View>
        <BackNav />
        <View style={styles.form.viewProfile}>
          <img style={styles.avatar} src={user.image} alt="User" />
          <View style={styles.profile - info}>
            <label for="name">Name</label>
            <Text>{user.name}</Text>

            <label for="gender">Description</label>
            <Text>{user.description}</Text>

            <label for="gender">Gender</label>
            <Text>{user.gender}</Text>

            <label for="birthdate">Birthdate</label>
            <Text>
              <Moment format="DD/MM/YYYY">{user.birthdate}</Moment>
            </Text>
            <label for="interests">Interests</label>
            <Text>
              {!this.state.loading
                ? user.interests.map(interest => {
                    return `${interest} `;
                  })
                : null}
            </Text>
            <label for="phoneNum">Phone number</label>
            <Text>{user.phoneNum}</Text>
          </View>
          <View style={styles.form - buttons} id="profile">
            <Link
              to="/user/profile/edit"
              type="submit"
              style={styles.btn.btn - signup}
            >
              Edit
            </Link>
          </View>
        </View>
      </View>
    );
  }
}

export default CreatedPlans;

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
