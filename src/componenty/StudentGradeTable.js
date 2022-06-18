import {useState} from "react";
import classes from './StudentGradeTable.module.css';
import {Grid} from "@mui/material";

const  rekordy = [
    {
        "id":1
    }
]

const StudentGradeTable = () => {
    const [students, setStudents] = useState(rekordy);

    return(
        <div className={classes.StudentGradeTable}>
            <Grid container className={classes.NaglowekTabeli}>
                <Grid item xs={1}>Lp</Grid>
                <Grid item xs={1}>Ocena</Grid>
            </Grid>

        </div>
    )
}

export default StudentGradeTable;