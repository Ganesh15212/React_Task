import React, { useState } from "react";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState({
        employee_no: '', employee_name: '', department: '', designation: '', hired_date: '', salary: ''
    });

    const saveForm = async (e) => {
        e.preventDefault();
        alert('Congrats Successfully Submitted Form');

        await axios.post('http://localhost:3000/User', data);

        setData({
            employee_no: '',
            employee_name: '',
            department: '',
            designation: '',
            hired_date: '',
            salary: ''
        })
    }

    const resetForm = () => {
        setData({
            employee_no: '',
            employee_name: '',
            department: '',
            designation: '',
            hired_date: '',
            salary: ''
        })
    }

    return (
        <>
            <div className="container my-3">
                <h2 className="text-center fw-bold mb-4">Add Emloyee Details</h2>

                <form onSubmit={saveForm} onReset={resetForm}>
                    <div className="row fw-bold bg-light p-4">
                        <div className="row mb-3">
                            <div className="col-lg-2 col-md-3 col-sm-4">
                                <label className='col-form-label' htmlFor="empNo">Emloyee No</label>
                            </div>
                            <div className="col-lg-10 col-md-9 col-sm-8">
                                <input type="number" className='form-control' name="empNo" id="empNo"
                                    value={data.employee_no} onChange={(e) => setData({ ...data, employee_no: e.target.value })}
                                    placeholder='Enter Employee No' />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-lg-2 col-md-3 col-sm-4">
                                <label className='col-form-label' htmlFor="empName">Employee Name</label>
                            </div>
                            <div className="col-lg-10 col-md-9 col-sm-8">
                                <input type="text" className='form-control' name="empName" id="empName"
                                    value={data.employee_name} onChange={(e) => setData({ ...data, employee_name: e.target.value })}
                                    placeholder='Enter Employee Name' required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-lg-2 col-md-3 col-sm-4">
                                <label className='col-form-label' htmlFor="empeDepartment">Department</label>
                            </div>
                            <div className="col-lg-10 col-md-9 col-sm-8">
                                <select name="empDepartment" id="empDepartment" className='form-select'
                                    value={data.department} onChange={(e) => setData({ ...data, department: e.target.value })}>
                                    <option value="">-- Select Department --</option>
                                    <option value="Front End">Front End</option>
                                    <option value="Back End">Back End</option>
                                    <option value="Full Stack">Full Stack</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-lg-2 col-md-3 col-sm-4">
                                <label className='col-form-label' htmlFor="empDesignation">Designation</label>
                            </div>
                            <div className="col-lg-10 col-md-9 col-sm-8">
                                <select name="empDesignation" id="empDesignation" className='form-select'
                                    value={data.designation} onChange={(e) => setData({ ...data, designation: e.target.value })}>
                                    <option value="Abroad">-- Select Designation --</option>
                                    <option value="Front End">Front End</option>
                                    <option value="Back End">Back End</option>
                                    <option value="Full Stack">Full Stack</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-lg-2 col-md-3 col-sm-4">
                                <label className='col-form-label' htmlFor="empHD">Hired Date</label>
                            </div>
                            <div className="col-lg-10 col-md-9 col-sm-8">
                                <input type="date" className='form-control' name="empHD" id="empHD"
                                    value={data.hired_date} onChange={(e) => setData({ ...data, hired_date: e.target.value })}
                                    required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-lg-2 col-md-3 col-sm-4">
                                <label className='col-form-label' htmlFor="empSalary">Employee Salary</label>
                            </div>
                            <div className="col-lg-10 col-md-9 col-sm-8">
                                <input type="number" className='form-control' name="empSalary" id="empSalary"
                                    value={data.salary} onChange={(e) => setData({ ...data, salary: e.target.value })}
                                    placeholder='Enter Employee Salary' required />
                            </div>
                        </div>

                        <div className="mt-3 text-center">
                            <button type="submit" className='btn btn-primary px-4 me-2'>Insert</button>
                            <button type='reset' className='btn btn-danger px-4'>Cancel</button>
                        </div>
                    </div>
                </form >
            </div >
        </>
    )
}