import React from "react";
import Table from "./Table";
import Form from "./Form";

class LinkContainer extends React.Component {
  constructor(props) {
    super(props);
    /* TODO - Create state object for storing favLinks */
    this.state = {
      favLinks: [],

      /* {
          name: "GitHub",
          URL: "https://github.com/Ala123Sobhan",
        },
        {
          name: "Linkedln",
          URL: "https://www.linkedin.com/in/ala-sobhan-892b9017a/",
        },
        {
          name: "React",
          URL: "https://reactjs.org/",
        },*/
    };
  }

  removeCharacter = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    //console.log("here");

    var checked = this.state.favLinks;
    var values = checked.indexOf(index);
    checked.splice(values, 1);
    this.setState({ favLinks: checked });
    console.log(this.favLinks);
  };

  handleSubmit = (favLink) => {
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
    //console.log("here! in linkcontainer");

    let favLinks = this.state.favLinks;
    favLinks.push(favLink);
    this.setState({
      favLinks: favLinks,
    });
  };

  render() {
    const style = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "5px",
    };
    return (
      <div>
        <h1 style={style}>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
        <Table
          linkData={this.state.favLinks}
          removeLink={this.removeCharacter}
        />

        <br />

        <h3>Add New</h3>
        {/*TODO - Add Form Component */}

        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default LinkContainer;
