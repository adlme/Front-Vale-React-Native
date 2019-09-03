import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <View style={styles.slider}>
        <View style={styles.slides}>
          <View style={styles.slide} id="slide-1">
            <View style={styles.align - center - vertical}>
              <img
                style={styles.logo - intro}
                src="../images/logo/color/logo-820x320.png"
                alt=""
              />
              <View>
                <Text style={styles.subtitle}>Find your next</Text>
                <Text style={styles.main - title}>best friend</Text>
              </View>
              <img
                style={styles.friends}
                src="../images/intro/friendship.png"
                alt=""
              />
            </View>
          </View>

          <View style={styles.slide} id="slide-2">
            <View style={styles.align - center - vertical}>
              <View style={styles.feature}>
                <img
                  style={styles.chat - img}
                  src="../images/intro/chat.png"
                  alt=""
                />
                <Text style={styles.featureDescription1}>
                  <b>
                    <font color="green">Chat with people like you.</font>
                  </b>{" "}
                  Find a new friend in a secure and easy way!
                </Text>
              </View>
              <View style={styles.feature}>
                <Text style={styles.featureDescription2}>
                  <b>
                    <font color="green">
                      Create or join plans of your interest.
                    </font>
                  </b>{" "}
                  Parachute out of an airplane with a new friend!
                </Text>
                <img
                  style={styles.chatImg}
                  src="../images/intro/parachute.png"
                  alt=""
                />
              </View>
              <View style={styles.feature}>
                <img
                  style={styles.chatImg}
                  src="../images/intro/money-bag.png"
                  alt=""
                />
                <Text style={styles.featureDescription - 3}>
                  <b>
                    <font color="green">Win real money!</font>
                  </b>{" "}
                  Up to 10% of what you spend on affiliated places
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.slide} id="slide-cta">
            <View style={styles.formButtons}>
              <Link style={styles.btnBtnSignup} to="/signup">
                Signup
              </Link>
              <Link style={styles.btnBtnLogin} to="/login">
                Login
              </Link>
            </View>
          </View>
        </View>
        <View style={styles.jumpers}>
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-cta"></a>
        </View>
      </View>
    </>
  );
}

export default Welcome;

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
