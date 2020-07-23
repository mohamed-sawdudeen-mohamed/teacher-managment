import React from "react";

class Table extends React.Component {
  state = {};
  render() {
    const { teachers } = this.props;
    return (
      <div>
        <h4 className="text-light">Teacher Table</h4>

        <div className="form-group">
          <input
            type="text"
            name="search"
            id="search"
            className="form-control"
          />
        </div>

        <div className="table-responsive">
          <table className="table text-light table-striped table-bordered">
            <thead>
              <tr className="text-center">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Birth Year</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((teacher) => (
                <tr>
                  <td>{teacher.fName}</td>
                  <td>{teacher.lName}</td>
                  <td>{teacher.email}</td>
                  <td className="text-center">
                    <i
                      className={`fa fa-${
                        teacher.gender === "m" ? "male" : "female"
                      }`}
                    />
                  </td>
                  <td>{teacher.bYear}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
