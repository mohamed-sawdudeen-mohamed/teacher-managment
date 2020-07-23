import React from "react";
import Form from "./Form";
import Table from "./Table";
// import NavBar from "./NavBar";

class App extends React.Component {
  state = {
    teachers: [
      {
        fName: "Mehnaz",
        lName: "mohamed",
        email: "mehnaz@yahoo.com",
        gender: "f",
        bYear: 2015,
      },

      {
        fName: "Mohamed",
        lName: "mohamed",
        email: "mehnaz@yahoo.com",
        gender: "m",
        bYear: 2015,
      },
    ],
  };

  handelSubmit = (teacher) => {
    this.setState({ teachers: [...this.state.teachers, teacher] });
  };

  render() {
    return (
      <div className="container-fluid bg-dark main-container">
        <h1 className="text-center py-m text-light">
          Teacher Mangement system
        </h1>

        <div>{/* <NavBar /> */}</div>
        <div className="row">
          <div className="col-sm-4">
            <Form onSubmit={this.handelSubmit} />
          </div>
          <div className="col-sm-8">
            <Table teachers={this.state.teachers} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
