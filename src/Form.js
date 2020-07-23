import React from "react";

class Form extends React.Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    gender: "",
    bYear: "",
  };

  render() {
    const { fName, lName, email, gender, bYear } = this.state;
    const { onSubmit } = this.props;
    return (
      <div className="text-light">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({ fName, lName, email, gender, bYear });
            this.setState({
              fName: "",
              lName: "",
              email: "",
              gender: "",
              bYear: "",
            });
          }}
        >
          <h3>Form</h3>
          <div className="form-group">
            <label htmlFor="fName">First Name</label>
            <input
              type="text"
              id="fName"
              name="fName"
              className="form-control"
              value={fName}
              onChange={(e) => {
                this.setState({ fName: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lName">Last Name</label>
            <input
              type="text"
              id="lName"
              name="lName"
              className="form-control"
              value={lName}
              onChange={(e) => {
                this.setState({ lName: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>

          <div className="radio mb-3">
            <p>Gender</p>
            <label className="radio-inline mx-3">Male</label>
            <input
              type="radio"
              name="gender"
              checked={gender === "m"}
              onChange={() => {
                this.setState({ gender: "m" });
              }}
            />

            <label className="radio-inline mx-3">FeMale</label>
            <input
              type="radio"
              name="gender"
              checked={gender === "f"}
              onChange={() => {
                this.setState({ gender: "f" });
              }}
            />
          </div>

          <div className="form-group">
            <label>Birth Day</label>
            <select
              value={bYear}
              onChange={(e) => {
                this.setState({ bYear: e.target.value });
              }}
              className="form-control"
            >
              <option value="">Select Year</option>
              {Array(200)
                .fill()
                .map((item, index) => (
                  <option>{index + 1900}</option>
                ))}
            </select>
          </div>

          <div>
            <input
              type="submit"
              name="submit"
              value="submit"
              className="btn btn-success btn-block"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
