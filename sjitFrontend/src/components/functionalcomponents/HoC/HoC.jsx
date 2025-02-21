import Button from "./Button";
import trackingMyButtonComp from "./trackingMyButtonComp"


const HoC = () => {
    const ButtonTrack = trackingMyButtonComp(Button);
    return(
        <div>
            <h1>Welcome to higher order Components(Hoc)</h1>
            {/* <Button value={"Login"}/> */}
            <ButtonTrack value ={"Login"} trackingInfo={{"CustTd":"Hello","password":"password"}}/>
        </div>
    )
}
export default HoC;