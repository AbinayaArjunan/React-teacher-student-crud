import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import Datacontext from "../../Data/Data";

function AddStudent() {

    const { student, addStudent } = useContext(Datacontext)

    const [name, setName] = useState("")

    const [fathername, setFathername] = useState("")

    const [batch47, setBatch47] = useState("")

    const [address, setAddress] = useState("")

    const [course, setCourse] = useState("")

    let batchtype = ["40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"];
    let coursetype = ["MERNSTACK", "PYTHON", "C", "JAVA", "DATA SCIENCE"];


    useEffect(() => {
        setName("")
        setFathername("")
        setBatch47("")
        setAddress("")
        setCourse("")

    }, [student.length]);


    function ADDstudent() {
        if (name === "" || fathername === "" || batch47 === "" || address === "" || course === "") {
            alert("Fill all information");
        }
        else {
            addStudent([...student, {
                id: student.length + 1,
                name: name,
                fathername: fathername,
                batch: batch47,
                address: address,
                course: course
            },])

        }
    }

    return (
        <>
            <h1 className="form-control bg-primary text-white">Add Student</h1>
            <form onSubmit={ADDstudent}>
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
                    <label htmlFor="fathername" className="form-label">
                        Father Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fathername"
                        value={fathername}
                        onChange={(e) => {
                            setFathername(e.target.value);
                        }} />
                </div>

                <div className="dropdown mb-3 m-3 text-start">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                        Select Batch
                    </button>
                    <ul className="dropdown-menu">
                        {
                            batchtype.map((ba, i) => {
                                return (

                                    <li key={i} className="dropdown-item fw-bold" onClick={() => setBatch47(ba)}>{ba}</li>
                                )
                            })
                        }

                    </ul>
                    <input className='text-center btn btn-primary fw-bold m-3' style={{ width: "10vw" }} value={batch47} readOnly />
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


                <Link to="/Student">
                    <button type="submit" className="btn btn-primary m-2 bg-danger">
                        Cancel
                    </button>
                </Link>
                <Link>
                    <button
                        type="submit"
                        className="btn btn-primary m-2"
                        onClick={() => ADDstudent()}
                    >
                        Save
                    </button>
                </Link>
                <Link to="/Student">
                    <button type="submit" className="btn btn-primary m-2 bg-danger">
                        Back
                    </button>
                </Link>

            </form>
        </>
    )
}

export default AddStudent