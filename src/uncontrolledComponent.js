import React, { Component } from "react";

class registrationForm extends Component {
  /*
  handleSubmit(event) {
    event.preventDefault()
  }
  */

  //Using the ref
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.nameInput.current.value;
    console.log("Name:", name);
  }

  //Using the event object
  /*handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const password = event.target.password.value;
    console.log("Name: ", name);
    console.log("Password:", password);
  }*/

  render() {
    return (
      <form className="registration" onSubmit={e => this.handleSubmit(e)}>
        <h2>Register</h2>
        <div className="registration__hint">required field</div>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            className="registration__control"
            name="name"
            id="name"
            defaultValue="Frank"
            ref={this.nameInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            className="registration__control"
            name="password"
            id="password"
            ref={this.passwordInput}
          />
          <div className="registration__hint">
            6 to 72 characters, must include a number
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password *</label>
          <input
            type="password"
            className="registration__control"
            name="repeatPassword"
            id="repeatPassword"
            ref={this.passwordInput}
          />
        </div>
        <div className="registration__button__group">
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button type="submit" className="registration__button">
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default registrationForm;

/* =========== Uncontrolled component setup ============ */

//Step 1:
//Basic code for a react component
//Renders a simple form with 3 inputs
//3 inputs = Name, password, repeat password

//Step 2:
//Add a method to process the form value when the submit button is clicked

//Step 3:
//Add the event listener on the form to invoke this method on form submit

//Question:
//How do we get access to the value on the form?
//We need some way to reference the form inputs
//We can do this in 1/2 ways: using the event object or using a special attribute ref which will be stored in e.target
//Then you can access the individual inputs by name or id through the form itself

//Step 4A:
//To use the event object - you 1st access the <form> element
//Which will be stored in e.target.
//Then you can access the individual input by name or id through the form itself
//Update your handleSubmit method to see the value entered in the name & password inputs

//or

//Step 4B:
//Using a ref - 1st a ref must be created with React.createRef()
//Then attached to the input element using the ref attribute
//Add a constructor to the registrationForm component & create a ref for the name input

/*============================================= */

/*========== Setting up Default values ========== */

//Step 1:
//We added defaultValue inside the input that we're allowed to change unlike HTML attribute value

//Step 2:
//Add refs to each of the inputs on the form

//Step 3:
//It's now possible to perform validation on form values & submit these values to the server
// In this example, the state of these inputs are managed in the DOM rather than React itself

//unControlledComponent.js ===> controlledComponent.js
