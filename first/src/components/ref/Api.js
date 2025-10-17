import React, { UseState, UseEffect } from "react";

const Api = () => {
    const [user, setUser] = useState([]);
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    useEffect(()=>{
        fetch("")
            .then((res) => {
                if(!res.ok) throw new Error("Failed to fetch users")
                return res.json();
            })
            .then((data) => {
                setUser(data)
            })
            .catch((err) => {
                setError(err.message)
            })
    },[]);

    const handleAddUser = async() => {

    }
}