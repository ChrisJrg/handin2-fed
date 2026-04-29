import "../App.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {decodeToken} from "../Hooks/Hook.js"

export function ControlledForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();

        let url = "http://localhost:8080/api/Account/login";
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({email, password}),
                headers: new Headers({
                    "Content-Type": "application/json",
                })
            });
            if (response.ok) {
                alert('Logged in successfully!');
                let token = await response.text();
                localStorage.setItem("token", token);
                let decoded_token = decodeToken(token);
                if(decoded_token.role === "Manager"){
                    navigate("/jobs")
                }else{
                    navigate("/my-jobs")
                }
            }else{
                alert("Server returned: " + response.statusText);
            }
        }catch(err){
            alert("error: " + err);
        }
    }


    return (
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Login</label>
                    <input placeholder="Email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </section>
    )
}

export default ControlledForm
