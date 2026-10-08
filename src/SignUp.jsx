import { useState } from "react"
function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp() {

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("SignUp Successful!");
    }


    return(
        <>
        <div className="main">

            <h1>SignUp Page</h1>
            
            <div className="inn">
                <p>Entre your Email: </p>
                <input placeholder="Example@gmail.com" value={email} type="email"></input>

                <p>Entre your Password: </p>
                <input placeholder="password" value={password} type="password"></input>
                <br></br>

                <button onClick={handleSignUp}>SignUp</button>
            </div>

        </div>
        </>
    )

}

export default SignUp