import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import userAPI from "../../services/user-service";
import BackNav from "../../components/BackNav";
import withAuth from "../../components/withAuth";
import FileUploadComponent from "../../components/FileUploadComponent";
import { View, Text, StyleSheet } from "react-native";

class Onboarding extends Component {
  state = {
    name: "",
    description: "",
    gender: "",
    birthdate: "",
    Culture: false,
    Drinks: false,
    Food: false,
    Party: false,
    Shopping: false,
    Sports: false,
    Travel: false,
    Volunteering: false,
    Others: false,
    phoneNum: "",
    profilePhoto: "",
    redirect: false,
    avatarURL: ""
  };

  handleOnChange = event => {
    const { name } = event.target;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      description,
      gender,
      birthdate,
      phoneNum,
      profilePhoto,
      redirect,
      avatarURL,
      ...interestsState
    } = this.state;
    const interests = [];
    for (const key in interestsState) {
      if (interestsState[key] === true) {
        interests.push(key);
      }
    }
    userAPI
      .onboarding({
        name,
        description,
        gender,
        birthdate,
        interests,
        phoneNum,
        avatarURL
      })
      .then(() => {
        this.props.updateUserData().then(user => {
          this.setState({
            redirect: true
          });
        });
      })
      .catch(error => console.log(error));
  };

  avatarUpload = url => {
    this.setState({
      avatarURL: url
    });
  };

  render() {
    const {
      name,
      description,
      gender,
      birthdate,
      phoneNum,
      redirect
    } = this.state;
    return (
      <>
        <BackNav />
        <form style={styles.form.editProfile} onSubmit={this.handleSubmit}>
          <Text id="more-details">
            Just a few more details and you'll be ready to go!
          </Text>

          <label htmlFor="name" style={styles.inp}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="&nbsp;"
              required
              onChange={this.handleOnChange}
              value={name}
            />
            <span style={styles.label}>Name</span>
          </label>
          <label htmlFor="description" style={styles.inp}>
            <input
              maxlength="90"
              type="text"
              name="description"
              id="name"
              placeholder="&nbsp;"
              required
              minLength="20"
              maxLength="90"
              onChange={this.handleOnChange}
              value={description}
            />
            <span style={styles.label}>Short bio</span>
          </label>

          <View style={styles.two - cols}>
            <View style={styles.col}>
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                onChange={this.handleOnChange}
                value={gender}
                defaultValue=""
              >
                <option value="" disabled={true}>
                  Choose gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
            </View>
            <View style={styles.col}>
              <label htmlFor="birthdate">Birthdate</label>
              <input
                type="date"
                name="birthdate"
                id="birthdate"
                required
                onChange={this.handleOnChange}
                value={birthdate}
              />
            </View>
          </View>

          <label htmlFor="interests">Interests</label>
          <View style={styles.interests}>
            <input
              type="checkbox"
              name="Culture"
              onChange={this.handleOnChange}
            />
            <span>Culture</span>
            <input
              type="checkbox"
              name="Drinks"
              onChange={this.handleOnChange}
            />
            <span>Drinks</span>
            <input type="checkbox" name="Food" onChange={this.handleOnChange} />
            <span>Food</span>
            <br />
            <input
              type="checkbox"
              name="Party"
              onChange={this.handleOnChange}
            />
            <span>Party</span>
            <input
              type="checkbox"
              name="Shopping"
              onChange={this.handleOnChange}
            />
            <span>Shopping</span>
            <input
              type="checkbox"
              name="Sports"
              onChange={this.handleOnChange}
            />
            <span>Sports</span>
            <br />
            <input
              type="checkbox"
              name="Travel"
              onChange={this.handleOnChange}
            />
            <span>Travel</span>
            <input
              type="checkbox"
              name="Volunteering"
              onChange={this.handleOnChange}
            />
            <span>Volunteering</span>
            <input
              type="checkbox"
              name="Others"
              onChange={this.handleOnChange}
            />
            <span>Others</span>
          </View>

          <label htmlFor="phoneNum" style={styles.inp}>
            <input
              type="text"
              name="phoneNum"
              id="phoneNum"
              placeholder="&nbsp;"
              required
              onChange={this.handleOnChange}
              value={phoneNum}
            />
            <span style={styles.label}>Phone number</span>
          </label>

          <FileUploadComponent url={this.avatarUpload} />

          {/* <label htmlFor="profile-photo">Profile picture</label>
            <input style={styles.profile-photo" type="file" name="photo" id="profile-photo" /> */}
          <button style={styles.btn.btn - signup} type="submit" id="save">
            Save
          </button>
        </form>
        {redirect ? <Redirect to="/plans" /> : null}
      </>
    );
  }
}
export default withAuth(Onboarding);

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
