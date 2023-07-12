import { useContext } from "react";
import Datacontext from "../Data/Data";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Dashboard() {

    const { student,teacher } = useContext(Datacontext)

    return (
        <div className="container-fluid dashboard">
            <div className="row">
                <div className="col-lg-12 col-sm-12 d-flux text-center table-responsive">

                    <div>
                        <p className="font-weight-bolder text-info"><b>
                            Welcome to Sakthi Academy Students & Teachers Database</b>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="row ">
                               <div className="col-12">
                                <p className="btn  btn-warning"><FontAwesomeIcon icon={faCircleUser} />  Total Students: {student.length} </p>
                               </div>
                            </div>
                        <table className="table table-secondary table-striped">
                            <thead>
                                <tr>
                                    <th className="bg-primary bg-gradiant  text-white">Student</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student.length > 0 ? (student.map((st, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="text-black fw-bold">{st.name}</td>
                                        </tr>
                                    );
                                })) :
                                    (
                                        <tr>
                                            <td colSpan={2}>Data Not available</td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12">

                             <p className="btn btn-warning"><FontAwesomeIcon icon={faCircleUser} />  Total Teachers: {student.length} </p>
                            </div>
                        </div>   
                        <table className="table table-secondary table-striped">
                            <thead>
                                <tr>
                                    <th className="bg-primary bg-gradiant  text-white">Teacher</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teacher.length > 0 ? (teacher.map((te, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="text-black fw-bold">{te.name}</td>
                                        </tr>
                                    );
                                })) :
                                    (
                                        <tr>
                                            <td colSpan={2}>Data Not available</td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>



                </div>
            </div>

        </div>
        
                            


)}




export default Dashboard;