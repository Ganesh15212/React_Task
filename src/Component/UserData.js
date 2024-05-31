import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function UserData() {
    const [data, setData] = useState([]);
    const nav = useNavigate();

    const loadUser = async () => {
        let res = await axios.get(`http://localhost:3000/User`);
        // console.log(res.data);

        setData(res.data);
    }

    useEffect(() => {
        loadUser()
    }, [])

    const deleteUser = async (id) => {
        alert(id);

        // Filter
        var res = data.filter(val => val.id !== id)
        setData(res);


        await axios.delete(`http://localhost:3000/User/${id}`);
    }

    return (
        <>
            <div className="container my-3">
                <h2 className="text-center fw-bold mb-4">User Data</h2>

                <div className="text-end mb-3">
                    <button className="btn btn-success rounded-pill px-4 py-0" onClick={() => nav('/')}>ADD</button>
                </div>

                <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped text-center">
                        <thead className='table-dark align-middle'>
                            <tr>
                                <th>Emloyee No</th>
                                <th>Emloyee Name</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Hired Data</th>
                                <th>Salary</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            {
                                data.map((val) => {
                                    return (
                                        <tr key={val.id}>
                                            <td>{val.employee_no}</td>
                                            <td>{val.employee_name}</td>
                                            <td>{val.department}</td>
                                            <td>{val.designation}</td>
                                            <td>{val.hired_date}</td>
                                            <td>{val.salary}</td>
                                            <td>
                                                <NavLink to={`/editUser/${val.id}`}>
                                                    <button className="btn btn-info rounded-pill py-0 px-4 me-2">Edit</button>
                                                </NavLink>

                                                <button className="btn btn-danger rounded-pill py-0 px-3" onClick={() => deleteUser(val.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}