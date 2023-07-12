import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import Datacontext from "../../Data/Data";
// import DropdownButton from "react-bootstrap/DropdownButton"

function EditTeacher() {

    const { teacher, addTeacher, editTea } = useContext(Datacontext)

    const [name, setName] = useState(editTea[0].name)

    const [emailid, setEmailid] = useState(editTea[0].emailid)

    const [address, setAddress] = useState(editTea[0].address)

    const [course, setCourse] = useState(editTea[0].course)

    let coursetype = ["MERNSTACK", "PYTHON", "C", "JAVA", "DATA SCIENCE"];


    function EDITteacher(id, name, emailid,  address, course) {

        let Teacher = teacher.map(te => {
            if (te.id === id) {
                return (
                    {
                        id: id,
                        name: name,
                        emailid: emailid,
                        address: address,
                        course: course
                    }
                )
            } else {
                return te
            }
        })
        addTeacher(Teacher)

    }




    return (
        <>
            <h1 className="form-control bg-primary text-white">Edit Teacher</h1>
            <form onSubmit={EDITteacher}>
                <div className="mb-3 m-3 text-start">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }} />
                </div>
                <div className="mb-3 m-3 text-start">
                    <label htmlFor="emailid" className="form-label">
                        emailid
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="emailid"
                        value={emailid}
                        onChange={(e) => {
                            setEmailid(e.target.value);
                        }} />
                </div>

                

                <div className="mb-3 m-3 text-start">
                    <label className="form-check-label" htmlFor="address">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }} />
                </div>

                <div className="dropdown mb-3 m-3 text-start">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                        Select Course
                    </button>
                    <ul className="dropdown-menu" >
                        {
                            coursetype.map((co, i) => {
                                return (
                                    <li key={i} onClick={() => setCourse(co)}>{co}</li>
                                )
                            })
                        }

                    </ul>
                    <input className='text-center btn btn-primary fw-bold m-3' style={{ width: "10vw" }} value={course} readOnly />

                </div>


                <Link to="/Teacher">
                    <button type="submit" className="btn btn-primary m-2 bg-danger">
                        Cancel
                    </button>
                </Link>
                <Link to="/Teacher">
                    <button
                        type="submit"
                        className="btn btn-primary m-2"
                        onClick={() => EDITteacher(editTea[0].id, name, emailid , address, course)}
                    >
                        Save
                    </button>
                </Link>
                <Link to="/Teacher">
                    <button type="submit" className="btn btn-primary m-2 bg-danger">
                        Back
                    </button>
                </Link>

            </form>
        </>
    )
}

export default EditTeacher;