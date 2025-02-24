// import Exam from "./Exam";
import { useContext } from "react";
import { ResPub } from "../CoE";
const StudentResult = () => {
    const result = useContext(ResPub);

    return (
        <div>
            {/* <Exam sgpa={res.sgpa} cgpa={res.cgpa}></Exam> */}

            <h1>Result: </h1>
            <h2>SGPA:{result.sgpa}</h2>
            <h2>CGPA:{result.cgpa}</h2>
        </div>
    )
}
export default StudentResult;