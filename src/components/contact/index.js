import React, { Component } from "react";
import "./index.scss";

const initialState = {
  username: "",
  email: "",
  usernameError: "",
  emailError: ""
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  validate = () => {
    let usernameError = "";
    let emailError = "";
    if (this.state.username.length < 1) {
      usernameError = "username should not be null";
    } else if (
      this.state.username.length < 6 ||
      this.state.username.length > 10
    ) {
      usernameError = "username must be 6-9 long";
    }
    if (this.state.username.match(/[^a-zA-z0-9]+/)) {
      usernameError =
        "invalid username: username only contain alphabates and numbers";
    }
    if (!this.state.email.includes(".")) {
      emailError = "invalid email";
    }
    if (this.state.email.length < 1) {
      emailError = "email should not be null";
    }

    if (usernameError || emailError) {
      this.setState({ usernameError, emailError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form
      this.setState(initialState);
    }
    // console.log(this.state);
    // alert(event.target.username.value);
  };

  handleChange = event => {
    // console.log(event.target.name);
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  render() {
    return (
      <div className="contact">
        <div className="contact__content">
          <h1>CONTACT US</h1>
          <p>
            ADDRESS: 500 TERRY FRANCOIS STREET SAN FRANSISCO, CA 94158 <br />
            TEL: 123-456-7890 | INFO@MYSITE.COM
          </p>
          <br />
          <p>Subscribe For Updates and Promotions</p>
          <form
            className="myForm"
            // method="post"
            // action=""
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
              //   required
            ></input>
            <br />
            <div style={{ color: "red" }}>{this.state.usernameError}</div>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
              //   required
            ></input>
            <br />
            <div style={{ color: "red" }}>{this.state.emailError}</div>
            <input type="submit" value="get Update"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
