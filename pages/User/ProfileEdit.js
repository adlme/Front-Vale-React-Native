import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import userAPI from "../../services/user-service";
import BackNav from "../../components/BackNav";
import withAuth from "../../components/withAuth";
import Moment from "react-moment";
import FileUploadComponent from "../../components/FileUploadComponent";
import { View, Text, StyleSheet } from "react-native";

class Onboarding extends Component {
  state = {
    email: "",
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
    loading: true,
    avatarURL: ""
  };

  componentDidMount() {
    userAPI
      .getUserProfile()
      .then(data => {
        const interests = data.interests;
        interests.forEach(interest => {
          if (interest === "Culture") {
            this.setState({
              Culture: true
            });
          }
          if (interest === "Drinks") {
            this.setState({
              Drinks: true
            });
          }
          if (interest === "Food") {
            this.setState({
              Food: true
            });
          }
          if (interest === "Party") {
            this.setState({
              Party: true
            });
          }
          if (interest === "Shopping") {
            this.setState({
              Shopping: true
            });
          }
          if (interest === "Sports") {
            this.setState({
              Sports: true
            });
          }
          if (interest === "Travel") {
            this.setState({
              Travel: true
            });
          }
          if (interest === "Volunteering") {
            this.setState({
              Volunteering: true
            });
          }
          if (interest === "Others") {
            this.setState({
              Others: true
            });
          }
        });
        const newBirthdate = new Date(data.birthdate);
        this.setState({
          email: data.email,
          name: data.name,
          description: data.description,
          gender: data.gender,
          birthdate: newBirthdate.toLocaleDateString(),
          phoneNum: data.phoneNum,
          profilePhoto: data.profilePhoto,
          loading: false
        });
      })
      .catch(error => console.log(error));
  }

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
      email,
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
      .editProfile({
        email,
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
      email,
      name,
      description,
      gender,
      birthdate,
      phoneNum,
      redirect,
      loading,
      Culture,
      Drinks,
      Food,
      Party,
      Shopping,
      Sports,
      Travel,
      Volunteering,
      Others
    } = this.state;
    return !loading ? (
      <>
        <BackNav />
        <form style={styles.form.editProfile} onSubmit={this.handleSubmit}>
          <label htmlFor="email" style={styles.inp}>
            <input
              type="email"
              style={styles.email}
              name="email"
              id="email"
              placeholder="&nbsp;"
              required
              onChange={this.handleOnChange}
              value={email}
            />
            <span style={styles.label}>Email</span>
          </label>

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
              type="text"
              name="description"
              id="description"
              placeholder="&nbsp;"
              required
              onChange={this.handleOnChange}
              value={description}
            />
            <span style={styles.label}>Why are you here?</span>
          </label>

          <View style={styles.two - cols}>
            <View style={styles.col}>
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                onChange={this.handleOnChange}
                value={gender}
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
              {/* <Moment format="DD/MM/YYYY"> */}
              <input
                type="date"
                name="birthdate"
                id="birthdate"
                required
                onChange={this.handleOnChange}
                value={birthdate}
              />
              {/* </Moment> */}
            </View>
          </View>

          <label htmlFor="interests">Interests</label>
          <View style={styles.interests}>
            <input
              type="checkbox"
              name="Culture"
              checked={Culture}
              onChange={this.handleOnChange}
            />
            <span>Culture</span>
            <input
              type="checkbox"
              name="Drinks"
              checked={Drinks}
              onChange={this.handleOnChange}
            />
            <span>Drinks</span>
            <input
              type="checkbox"
              name="Food"
              checked={Food}
              onChange={this.handleOnChange}
            />
            <span>Food</span>
            <br />
            <input
              type="checkbox"
              name="Party"
              checked={Party}
              onChange={this.handleOnChange}
            />
            <span>Party</span>
            <input
              type="checkbox"
              name="Shopping"
              checked={Shopping}
              onChange={this.handleOnChange}
            />
            <span>Shopping</span>
            <input
              type="checkbox"
              name="Sports"
              checked={Sports}
              onChange={this.handleOnChange}
            />
            <span>Sports</span>
            <br />
            <input
              type="checkbox"
              name="Travel"
              checked={Travel}
              onChange={this.handleOnChange}
            />
            <span>Travel</span>
            <input
              type="checkbox"
              name="Volunteering"
              checked={Volunteering}
              onChange={this.handleOnChange}
            />
            <span>Volunteering</span>
            <input
              type="checkbox"
              name="Others"
              checked={Others}
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
    ) : null;
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
