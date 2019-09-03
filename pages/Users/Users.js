import React, { Component } from "react";
import { Link } from "react-router-dom";
import usersAPI from "../../services/users-service";
import Moment from "react-moment";
import Nav from "../../components/Nav";
import LowNav from "../../components/LowNav";
import { View, Text, StyleSheet } from "react-native";

class Users extends Component {
  state = {
    users: [],
    loading: true
  };

  componentDidMount() {
    usersAPI
      .getAllUsers()
      .then(data => {
        this.setState({ users: data, loading: false });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View>
        <Nav />
        <View style={styles.usersWrapper}>
          <Text>Users</Text>
          <View style={styles.usersList}>
            {!this.state.loading &&
              this.state.users.map(user => {
                return (
                  <View style={styles.card} key={user._id}>
                    <Link to={`/users/${user._id}`}>
                      <View style={styles.cardGridUsers}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <img
                          style={styles.avatar.users - image}
                          src={user.image}
                          alt="user"
                        />
                        <Text id="user-description">{user.description}</Text>
                        <Moment diff={user.birthdate} unit="years">
                          2019-04-19T12:59-0500
                        </Moment>
                        <Text id="user-proximity">at 3,3 kms</Text>
                      </View>
                    </Link>
                  </View>
                );
              })}
          </View>
        </View>
      </View>
    );
  }
}

export default Users;

const styles = StyleSheet.create({
  usersWrapper: {
    width: "100%",
    minHidth: "100vw",
    minHeight: "100vh",
    paddingTop: "12%",
    paddingbottom: 85
  },
  usersList: {
    padding: "2% 0"
  },
  card: {
    borderRadius: 10,
    boxShadow: "0 0 13 1 rgb(208, 208, 208,  padding: 10",
    margin: "15 20",
    background: "white"
  }
});
