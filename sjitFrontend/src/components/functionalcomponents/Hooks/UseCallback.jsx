import { useCallback, useMemo, useState } from "react";

const UseCallback = () => {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(false);
    const styling = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
    };
    var numList = useCallback((mul) => {
        return [mul*number * 2, number*mul * 3, number*mul * 4];
    }, [number]);

    return (
        <div style={styling}>
            <button onClick={() => setTheme(!theme)}>DarkMode</button>
            <h1>This is UseCallback Example</h1>
            Number Box:{" "}
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <h2>
                The number List is{" "}
                {numList(100).map((value, index) => (
                    <h2 key={index}>{value}</h2>
                ))}{" "}
            </h2>
        </div>
    );
};

export default UseCallback;