import classes from "./AppBody.module.css";
import StudentGradeTable from "./StudentGradeTable";
import {Routes, Routeh} from "react-router-dom";

const AppBody = () =>{
    return(
    <div className={classes.AppBody}>
        <Routes>
           <Routes path ={"/list"}  element={<StudentGradeTable/>}/>
            http://localhost:3000/list
           </Routes>
        <StudentGradeTable/>
    </div>
    );
}

export default AppBody;
