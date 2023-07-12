import { useContext } from "react";
import Datacontext from "../../Data/Data";
import { Link } from "react-router-dom";
import { faPenNib, faUserPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Createstudent() {

    const { student, addStudent, setEditstu } = useContext(Datacontext)


    function Editstudent(id, name, fathername, batch47, address, course) {
        setEditstu([{
            id: id,
            name: name,
            fathername: fathername,
            batch: batch47,
            address: address,
            course: course,
        }])
    }



    function Deletestudent(id) {


        addStudent(
            student.filter((st) => st.id !== id)
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col table-responsive">
                    <div className="bg-primary form-control ">
                        <p className=" text-white d-inline-block col-10">Student's List</p>{" "}
                        <Link to="/Student/Add" className=" text-end col-2 text-white">
                            Add
                            <FontAwesomeIcon icon={faUserPlus} />
                        </Link>
                    </div>
                    <table className="table table-secondary table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Father Name</th>
                                <th>Batch</th>
                                <th>Address</th>
                                <th>Course</th>
                                <th>Edit & Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.length > 0 ? (
                                student.map((st, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{st.id}</td>
                                            <td>{st.name}</td>
                                            <td>{st.fathername}</td>
                                            <td>{st.batch}</td>
                                            <td>{st.address}</td>
                                            <td>{st.course}</td>

                                            <td>
                                                <Link to="/Student/Edit">
                                                    <FontAwesomeIcon icon={faPenNib}
                                                        onClick={() => Editstudent(st.id, st.name, st.fathername, st.batch, st.address, st.course)}
                                                    />
                                                </Link>
                                            </td>

                                            <td onClick={() => Deletestudent(st.id)}>
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

export default Createstudent