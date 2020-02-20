import React, { Component } from "react";
import ValidationError from "./validationError";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        touched: false
      },
      password: {
        value: "",
        touched: false
      },
      repeatPassword: {
        value: "",
        touched: false
      }
    };
  }

  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  updatePassword(password) {
    this.setState({
      password: { value: password, touched: true }
    });
  }

  updateRepeatPassword(repeatPassword) {
    this.setState({
      repeatPassword: {
        value: repeatPassword,
        touched: true
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, password, repeatPassword } = this.state;

    console.log("Name: ", name.value);
    console.log("Password: ", password.value);
    console.log("Repeat Password: ", repeatPassword.value);
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (password.length < 6 || password.length > 72) {
      return "Password must be between 6 and 72 characters long";
    } else if (!password.match(/[0-9]/)) {
      return "Password must contain at least one number";
    }
  }

  validateRepeatPassword() {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();

    if (repeatPassword !== password) {
      return "Passwords do not match";
    }
  }

  render() {
    const nameError = this.validateName();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();

    return (
      <form className="registration" onSubmit={e => this.handleSubmit(e)}>
        <h2>Register</h2>
        <div className="registration__hint">* required field</div>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            className="registration__control"
            name="name"
            id="name"
            onChange={e => this.updateName(e.target.value)}
          />
          {this.state.name.touched && <ValidationError message={nameError} />}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            className="registration__control"
            name="password"
            id="password"
            onChange={e => this.updatePassword(e.target.value)}
          />
          <div className="registration__hint">
            6 to 72 characters, must include a number
          </div>
          {this.state.password.touched && (
            <ValidationError message={passwordError} />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password *</label>
          <input
            type="password"
            className="registration__control"
            name="repeatPassword"
            id="repeatPassword"
            onChange={e => this.updateRepeatPassword(e.target.value)}
          />
          {this.state.repeatPassword.touched && (
            <ValidationError message={repeatPasswordError} />
          )}
        </div>

        <div className="registration__button__group">
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button
            type="submit"
            className="registration__button"
            disabled={
              this.validateName() ||
              this.validatePassword() ||
              this.validateRepeatPassword()
            }
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}
export default RegistrationForm;

/*======= Using controlled component ====== */
//Step: 1
//We can refactor the form to use controlled component
//We'll do this by initializing state to store the form values

//Step 2:
//Then create handlers to update these state properties

//Step 3:
//Then add the event listeners to the inputs themselves
//Now as you type in the inputs the state is updated

//Step 4:
//Refactor the handleSubmit() to grab the values from the state instead
//Now that we're managing state of the form in React = we can do some instant field level validation

/*============================================= */

/*=========== Validate the form ========= */
//To validate the form we will need:
/*
- some validation functions = logic that determines if a value meets criteria or not
- some way to display the validation messages 
 */

//Step 1: Validate the name field
//This field is required = so we start by checking that the value entered is not just blank or made of white space
//We'll also ensure that the name is at least 3 characters long
//This method will return a string if the field doesn't meet our validation criteria - or undefined otherwise

//Step 2: Validate the password
// Notice the regex to check if the passwordcontains at least one number

//Step 3: Validate repeatPassword

//Step 4: Displaying Validation message
//To display the message it requires a conditional statement
//We can move that logic into its own component
//controlledComponent.js ===> validationError.js

//Step 6:
//Import validationError and place it directly below each input element
//Now when you run your code = all the validation message show before user types anything

//Step 7: Hiding the validationError
//We can add booleans to the state which show whether the user has typed anything into each field
//You can then update state setting methods to switch the touch boolean from false to true when user updates field

//Step 8:
//Now you can conditionally render the ValidationError component depending on whether the field has been changed by the user

//Step 9:
//Now we can use our validation methods in the render() to either disable or enable the Save button
