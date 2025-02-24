// import Faculty from "./Faculty";
import { createContext } from "react";
import Faculty from "../functionalcomponents/ContextAPI/Faculty";
import StudentResult from "../functionalcomponents/ContextAPI/StudentResult";
export const ResPub = createContext();
const CoE = () => {
    return (
        <ResPub.Provider value={{ sgpa: "10 SGPA", cgpa: "10 CGPA" }}>
            {/* <Faculty></Faculty> */}
            <h1>Students result are Published🩵</h1>
            {/* <Faculty></Faculty> */}
            <StudentResult></StudentResult>
        </ResPub.Provider>

    )
}
export default CoE;