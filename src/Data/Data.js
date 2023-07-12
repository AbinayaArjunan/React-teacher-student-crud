import { createContext, useState } from "react";

const Datacontext = createContext({});

export const DataProvider = ({ children }) => {

    const [editstu, setEditstu] = useState([])
    const [student, addStudent] = useState([
        {
            id: 1,
            name: "Abinaya",
            fathername: "Arjunan",
            batch: "47",
            address: "chinnasalem",
            course: "MERN STACK",
        },
    ]);
    const [editTea, setEditTea] = useState([])
    const [teacher, addTeacher] = useState([
        {
            id: 1,
            name:"raj",
            emailid: "peter2000@gmail.com",
            address:" Chennai",
            course: "MERN STACK"
        },
    ]);






    const [style, setStyle] = useState(
        "navbar-nav  bg-gradient-black   sidebar sidebar-dark accordion"
    );

    const Changestyle = () => {
        if (
            style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        ) {
            setStyle(
                "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
            );
        } else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
        }
    };
    const Changestyle1 = () => {
        if (
            style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        ) {
            setStyle(
                "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
            );
        } else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
        }
    };


    return (
        <Datacontext.Provider value={{
            style, Changestyle, Changestyle1,
            student, addStudent,
            editstu, setEditstu,
            teacher, addTeacher,
            editTea, setEditTea

        }}>
            {children}

        </Datacontext.Provider>
    )
}

export default Datacontext;