import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    /*TODO - set initial state for link name and URL */
    this.state = {
      name: "",
      URL: "",
    };
  }

  handleChange = (event) => {
    /* TODO - Logic for changing state based on form changes */
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );

    //console.log(this.state.name);
    //console.log(this.state.URL);
  };

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault();

    /* TODO - Logic for calling props to handle submission and setting state changes*/

    const { handleSubmit } = this.props;
    const name = this.state.name;
    const URL = this.state.URL;
    //console.log(linkName, linkURL);

    // console.log(favlink);

    let favlink = { name, URL };
    handleSubmit(favlink);

    this.setState({
      name: "",
      URL: "",
    });
    // console.log(this.state.name + " " + this.state.URL);
  };

  render() {
    return (
      <div>
        <form>
          {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>URL</label>
          <input
            type="text"
            name="URL"
            onChange={this.handleChange}
            value={this.state.URL}
          />
        </form>
        <button onClick={this.onFormSubmit}>Submit</button>
      </div>
    );
  }
}

export default Form;
