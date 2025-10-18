import React, { useRef } from "react"

function UncontrolledForm(){
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSubmit(e){
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        alert("Form submitted" + JSON.stringify(payload))
        nameRef.current.value="";
        emailRef.current.value="";
        passwordRef.current.value="";
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" ref={nameRef} />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" ref={emailRef} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" ref={passwordRef} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UncontrolledForm;