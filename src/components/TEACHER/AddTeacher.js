import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import Datacontext from "../../Data/Data";

function AddTeacher() {

    const { teacher, addTeacher } = useContext(Datacontext)

    const [name, setName] = useState("")

    const [emailid, setEmailid] = useState("")

    const [address, setAddress] = useState("")

    const [course, setCourse] = useState("")

    let coursetype = ["MERNSTACK", "PYTHON", "C", "JAVA", "DATA SCIENCE"];


    useEffect(() => {
        setName("")
        setEmailid("")
        setAddress("")
        setCourse("")

    }, [teacher.length]);


    function ADDteacher() {
        if (name === "" || emailid === "" ||  address === "" || course === "") {
            alert("Fill all information");
        }
        else {
            addTeacher([...teacher, {
                id: teacher.length + 1,
                name: name,
                emailid: emailid,
                address: address,
                course: course
            },])

        }
    }

    return (
        <>
            <h1 className="form-control bg-primary text-white">Add Teacher</h1>
            <form onSubmit={ADDteacher}>
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
                        EmailId
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
                <Link>
                    <button
                        type="submit"
                        className="btn btn-primary m-2"
                        onClick={() => ADDteacher()}
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

export default AddTeacher