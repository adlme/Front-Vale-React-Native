import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import io from "socket.io-client";
import "./Chat.css";
import withAuth from "../../components/withAuth";
import chatService from "../../services/chat-service";
import BackNav from "../../components/BackNav";

import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const Chat = props => {
  const [messages, setMessages] = useState([]);
  const [oldmessages, setOldMessages] = useState([]);
  const [error, setError] = useState();
  const [socket] = useState(io(`${process.env.REACT_APP_BACKEND_DOMAIN}`));

  socket.on("create", () => {
    socket.join(props.match.params.id);
  });

  useEffect(() => {
    let isSubscribed = true;
    scrollToBottom();
    socket.on("message", message => {
      if (isSubscribed) {
        setMessages([...messages, message]);
      }
    });

    return () => (isSubscribed = false);
  }, [error, messages, props, socket]);

  useEffect(() => {
    console.log(props.match.params.id);
    chatService
      .loginRoom(props.match.params.id)
      .then(response => {
        if (response.status === 200) {
          setOldMessages(response.data);
        }
      })
      .catch(() => {
        setError("No tienes acceso a este chat.");
      });
  }, [props.match.params.id]);

  const scrollToBottom = () => {
    let objView = document.querySelector(".list-mess");
    let objView2 = document.querySelector(".chat-form");
    objView.scrollTop = objView.scrollHeight;
    objView2.scrollTop = objView2.scrollHeight;
  };

  const handleSubmit = e => {
    const body = e.target.value;
    if (e.keyCode === 13 && body) {
      const message = {
        body,
        from: socket.id,
        room: props.match.params.id,
        date: new Date()
      };
      chatService
        .pushMessage(body, oldmessages._id, props.user._id)
        .then(response => response);

      setMessages([...messages, message]);
      socket.emit("message", message);
      e.target.value = "";
    }
  };
  const messagesDestructured = messages.map((message, i) => {
    if (
      message.body.room === props.match.params.id ||
      message.from === socket.id
    ) {
      const { body } = message;
      const classOtheruser = body.body ? "other-user-message" : "me-message";
      return (
        <>
          <li style={classOtheruser} key={i}>
            {body.body ? `${body.body}` : `${body}`}
            <span>{moment(message.date).format("LT")}</span>
          </li>
        </>
      );
    } else {
      return null;
    }
  });
  return (
    <>
      <BackNav />
      <View style={styles.chatForm}>
        {error ? (
          <Text>{error}</Text>
        ) : (
          <>
            <ul style={styles.listMess}>
              {oldmessages.messages
                ? oldmessages.messages.map((message, i) => {
                    console.log(message);
                    const classMessage =
                      message.idUser === props.user._id
                        ? "me-message"
                        : "other-user-message";
                    return (
                      <li style={classMessage} key={i}>
                        {`${message.message}`}
                        <span>{moment(message.createdAt).format("LT")}</span>
                      </li>
                    );
                  })
                : null}
              {messagesDestructured}
            </ul>
            <input
              style={styles.formForChat}
              type="text"
              placeholder="Escribe algo"
              onKeyUp={handleSubmit}
            />
          </>
        )}
      </View>
    </>
  );
};
export default withAuth(Chat);

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
