import useMemoize from "./CustomHooks/MemorizingHook";
const UseMemoize = () => {
    var [custID, setCustID] = useMemoize("CustomerID", "")
    var [pass, setPass] = useMemoize("Password", "")
    const handleEvent = () => {
        console.log(custID,pass)
        localStorage.removeItem("CustomerID")
        localStorage.removeItem("Password")
    }

    return (
        <div>
            <h1>It is the Custom hooks designed using useState
                <hr />
                Customer Id:
                <input
                    type="text"
                    value={custID}
                    onChange={(e) => setCustID(e.target.value)}
                />
                <hr />
                <br />
                Password:
                <input
                    type="text"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <hr />
                <br />
                <button onClick={handleEvent}>Login</button>
            </h1>
        </div>
    );
};
export default UseMemoize;
