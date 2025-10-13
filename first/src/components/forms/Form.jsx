import React from 'react'

function Form(){

    const[username, setUsername] = React.useState("")
    const[password, setPassword] = React.useState("")
    const[error, setError] = React.useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!password || !username){
            setError("All fields are mandatory")
        }
        else{
            setError("")
            alert(`Login Successful`)
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <input type="submit" />
                <br />
                {error && <p style={{color: 'red'}}>{error}</   p>}
            </form>
        </div>
    )
}

export default Form;