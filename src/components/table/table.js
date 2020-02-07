import React from 'react'
import { Table } from 'reactstrap'
import { employees } from '../../data/data'
import * as classes from './table.module.css'

const employee = (props) => {

    let renderTableData = () => {
        return employees.user.map((emp, index) => {
            const { id, name, age, email, gender, phoneNo } = emp 
            return (
                <tr key={id}>
                    <th scope='row'>{id}</th>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{gender}</td>
                    <td>{phoneNo}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }

    return (
        <div className={classes.outerDiv}>
            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </Table>
        </div>
    )

}

export default employee