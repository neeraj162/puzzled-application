import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [level, setLevel] = useState(0);
    const [path, setPath] = useState([]);
    const [timeStamps, setTimeStamps] = useState([]);
    const [attempts, setAttempts] = useState([0, 0, 0, 0, 0]);
    const [deadends, setDeadends] = useState(0);
    const [admin, setAdmin] = useState(0);
    const [hint1, setHint1] = useState(false)
    const [hint2, setHint2] = useState(false)
    const [result, setResult] = useState(false)

    return (
        <AuthContext.Provider value={{ level, setLevel, path, setPath, timeStamps, setTimeStamps, attempts, setAttempts, deadends, setDeadends, admin, setAdmin, hint1, setHint1, hint2, setHint2, result, setResult}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;