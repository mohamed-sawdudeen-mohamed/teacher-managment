import React from 'react';

class Table extends React.Component {
  state = {
    search: '',
  };

  getTeachers = () => {
    const { search } = this.state;
    const { teachers } = this.props;

    if (search !== '') {
      return teachers.filter((teacher) => {
        return (
          teacher.fName.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          teacher.lName.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          teacher.email.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
      });
    }

    return teachers;
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <h4 className="text-light">Teacher Table</h4>

        <div className="form-group">
          <input
            type="text"
            name="search"
            id="search"
            className="form-control"
            value={search}
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
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
              {this.getTeachers().map((teacher) => (
                <tr>
                  <td>{teacher.fName}</td>
                  <td>{teacher.lName}</td>
                  <td>{teacher.email}</td>
                  <td className="text-center">
                    <i
                      className={`fa fa-${
                        teacher.gender === 'm' ? 'male' : 'female'
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
