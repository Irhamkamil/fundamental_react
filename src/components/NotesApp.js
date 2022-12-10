import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import Arsip from "../pages/Arsip";
import Detail from "../pages/Detail";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { getUserLogged, putAccessToken } from "../utils/Api";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    console.log(data);

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });
    putAccessToken("");
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <div>
          <header className="note-app">
            <h1> Notes </h1>
          </header>
          <main>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={this.onLoginSuccess} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      );
    }
    return (
      <div>
        <header className="note-app">
          <h1> Notes </h1>
          <Navigation
            logout={this.onLogout}
            name={this.state.authedUser.name}
          />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/arsip/*" element={<Arsip />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default NotesApp;
