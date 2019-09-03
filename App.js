import React, { Component } from "react";
import {
  NativeRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-native";

// import Signup from "./pages/Auth/Signup";
// import Login from "./pages/Auth/Login";
// import Welcome from "./pages/Auth/Welcome";
import Plans from "./pages/Plans/Plans";
// import Users from "./pages/Users/Users";
// import Onboarding from "./pages/User/Onboarding";
// import PlanDetail from "./pages/Plans/PlanDetail";
// import Create from "./pages/Plans/Create";
// import Categories from "./pages/Plans/Categories";
// import MapComponent from "./components/MapComponent";
// import Category from "./pages/Plans/Category";
// import AuthProvider from "./contexts/auth-context";
// import AnonRoute from "./components/AnonRoute";
// import PrivateRoute from "./components/PrivateRoute";
// import OnboardedRoute from "./components/OnboardedRoute";
// import NotFound from "./components/NotFound";
// import CreatedPlans from "./pages/User/CreatedPlans";
// import JoinedPlans from "./pages/User/JoinedPlans";
// import Profile from "./pages/User/Profile";
// import ProfileEdit from "./pages/User/ProfileEdit";
// import UsersDetail from "./pages/Users/UsersDetail";
// import FileUploadComponent from "./components/FileUploadComponent";
// import Chat from "./pages/Chat/Chat";
// import ChatList from "./pages/ChatList/ChatList";

import "./App.css";

// Firebase config

// import firebase from "firebase";

// const config = {
//   apiKey: "AIzaSyDaQ6kmgJ7rq932eNT6iXDzje2ISL8mJXs",
//   authDomain: "vale-app-eabd3.firebaseapp.com",
//   storageBucket: "gs://vale-app-eabd3.appspot.com/"
// };
// firebase.initializeApp(config);

class App extends Component {
  render() {
    return <Plans />;
  }
}

export default App;
