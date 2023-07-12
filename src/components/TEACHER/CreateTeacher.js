import { useContext } from "react";
import Datacontext from "../../Data/Data";
import { Link } from "react-router-dom";
import { faPenNib, faUserPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Createteacher() {

    const { teacher, addTeacher, setEditTea } = useContext(Datacontext)


    function EditTeacher(id, name, emailid, address, course) {
        setEditTea([{
            id: id,
            name: name,
            emailid: emailid,
            address: address,
            course: course,
        }])
    }



    function Deleteteacher(id) {


        addTeacher(
            teacher.filter((te) => te.id !== id)
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col table-responsive">
                    <div className="bg-primary form-control ">
                        <p className=" text-white d-inline-block col-10">Teacher's List</p>{" "}
                        <Link to="/Teacher/Add" className=" text-end col-2 text-white">
                            Add
                            <FontAwesomeIcon icon={faUserPlus} />
                        </Link>
                    </div>
                    <table className="table table-secondary table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Address</th>
                                <th>Course</th>
                                <th>Edit & Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teacher.length > 0 ? (
                                teacher.map((te, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{te.id}</td>
                                            <td>{te.name}</td>
                                            <td>{te.emailid}</td>
                                            <td>{te.address}</td>
                                            <td>{te.course}</td>

                                            <td>
                                                <Link to="/Teacher/Edit">
                                                    <FontAwesomeIcon icon={faPenNib}
                                                        onClick={() => EditTeacher(te.id, te.name, te.emailid, te.address, te.course)}
                                                    />
                                                </Link>
                                            </td>

                                            <td onClick={() => Deleteteacher(te.id)}>
                                                <Link>
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={7}>Data Not available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Createteacher