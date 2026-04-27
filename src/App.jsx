import './App.css'
import {useState} from "react";
import {useNavigate} from "react-router";
export function ControlledForm(){
    const initialValues = {password: '', userName: ''};
    const [state, setState] = useState(initialValues);
    const Navigate = useNavigate();


    function handleChange(event){
        setState({password: event.target.value});
        setState({userName: event.target.value});
    }

    async function handleSubmit(event){
        alert('Logged in successfully!');
        event.preventDefault();

        let url = "http://localhost:8000/";
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({password: state.password, userName: state.userName}),
                headers: new Headers({
                    "Content-Type": "application/json",
                })
            });
            if (response.ok) {
                let token = await response;
                localStorage.setItem("token", token.jwt);


            }else{
                alert("Server returned: " + response.statusText);
            }
        }catch(err){
            alert("error: " + err);
        }
    }


  return (
    <>
     <section>
         <form onSubmit={handleSubmit}>
             <label>Login</label>
             <input placeholder="Username" type="text" value={state.userName} onChange={handleChange} />
             <input placeholder="Password" type="password" value={state.password} onChange={handleChange} />
             <button type="submit">Submit</button>
         </form>
     </section>
    </>
  )
}

export default ControlledForm
