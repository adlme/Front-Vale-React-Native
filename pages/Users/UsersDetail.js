import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-dom";
import usersAPI from "../../services/users-service";
import Moment from "react-moment";
import withAuth from "../../components/withAuth";
import BackNav from "../../components/BackNav";
import chatService from "../../services/chat-service";
import authService from "../../services/auth-service";

class UsersDetail extends Component {
  state = {
    otherUser: {},
    loading: true,
    chats: []
  };

  componentDidMount() {
    authService.me(this.props.user._id).then(response => {
      console.log("user info", response);
      this.setState({
        chats: response.chats
      });
    });

    usersAPI
      .getOneUser(this.props.match.params.id)
      .then(otherUser => {
        this.setState({ otherUser, loading: false });
      })
      .catch(error => console.log(error));
  }

  createRoom = otherUserId => {
    chatService
      .createRoom(this.props.user._id, otherUserId)
      .then(response => response);
  };

  render() {
    const { otherUser } = this.state;
    console.log("other user info", otherUser);
    return (
      <>
        <BackNav />
        <View style={styles.usersWrapper} id="users-detail">
          <View style={styles.usersDetailGrid}>
            <Text style={styles.userName}>{otherUser.name}</Text>
            <img
              style={styles.avatarUsersImage}
              src={otherUser.image}
              alt="otherUser"
            />
            <Text id="user-description">{`" ${otherUser.description} "`}</Text>
            <Moment diff={otherUser.birthdate} unit="years">
              2019-09-19T12:59-0500
            </Moment>
            <Text id="user-proximity">at 3,3 kms</Text>
          </View>
          <View style={styles.formButtons} id="signup">
            <Link
              onClick={() => this.createRoom(otherUser._id)}
              style={styles.friendChat}
              to={`/chat/${this.props.user._id}-${otherUser._id}`}
              key={otherUser._id}
            >
              <button style={styles.btn.btnSignup}>Chat</button>
            </Link>
          </View>
          {/* aquí meter el call al chatService que hay en el chatList.js para pasarle los usuarios */}
        </View>
      </>
    );
  }
}

export default withAuth(UsersDetail);

const styles = StyleSheet.create({
  usersWrapper: {
    width: "100%",
    minHidth: "100vw",
    minHeight: "100vh",
    paddingTop: "12%",
    paddingbottom: 85
  },
  avatarUsersImage: {
    width: "20vw",
    // height: '20vh'
    borderRadius: "50%",
    border: `3 solid ${colorPrimary}`
  },
  formButtons: {
    display: flex,
    width: "100%",
    alignItems: "center",
    padding: "35 15",
    justifycontent: "space-evenly"
  },
  friendChat: {}
});

// STARTED INTRODUCING STYLES
