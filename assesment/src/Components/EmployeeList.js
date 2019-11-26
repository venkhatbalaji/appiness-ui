import React, { Component } from 'react';
import Employee from '../Utilities/EmployeeList.json';

class EmployeeList extends Component {
    render() {
        return (
            <div>
                {listItems}
            </div>
        );
    }
}

const listItems = Employee.user.map((user) =>
    <h1 key={user.id}> {user.name} - {user.age} - {user.gender} - {user.email} - {user.phoneNo}</h1>
);

export default EmployeeList;