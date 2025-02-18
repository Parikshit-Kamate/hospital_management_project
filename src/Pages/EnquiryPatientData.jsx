import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';

const EnquiryPatientData = () => {
    const [patient, setPatient] = useState([]);
    const navigate = useNavigate();

    
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    useEffect(() => {
        
        if (isLoggedIn === "true") {
            fetchData();
        }
    }, [isLoggedIn]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/patients');
            const result = response.data;
            setPatient(result);
        } catch (error) {
            console.error('Error fetching patient data:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate('/enquiry');
    };

    
    if (isLoggedIn !== "true") {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger text-center">
                    <h2>you have no authority to view this data</h2>
                </div>
            </div>
        );
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>SR.No</th>
                        <th>Full Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th>Write Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {patient.map((value, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.fullname}</td>
                            <td>{value.email}</td>
                            <td>{value.mobilenumber}</td>
                            <td>{value.writemessage}</td>
                            <td>
                                <NavLink to={`/delete/enquiry/${value._id}`}>
                                    <button className="btn btn-danger">Delete</button>
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button className="btn btn-warning mt-5 mb-5 w-25" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default EnquiryPatientData;
