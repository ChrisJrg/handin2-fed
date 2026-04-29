import {useState} from "react";

export function CreateManager(){
    const [formData, setFormData] = useState({firstname: "", lastname: "", email: "", password: ""});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const response = fetch('http://localhost:8080/api/Managers', {
                method: 'POST',
                body: JSON.stringify(formData),
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                alert("Successfully created manager");
                console.log(response);
            }else{
                alert("Server returned: "+ response.statusText);
                console.log(response);
            }
        }catch(err){
            alert('error: '+ err);
        }
    };




    return(
        <>
            <h1>Create Manager</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name
                        <input name={"firstname"} required={true} type={"text"} placeholder={"First Name"} id={"firstname"}
                               value={formData.firstname}
                               onChange={handleChange}
                        />
                    </label>

                    <label>
                        Last Name
                        <input name={"lastname"} required={true} type={"text"} placeholder={"Last Name"} id={"lastname"}
                        value={formData.lastname}
                        onChange={handleChange}
                        />
                    </label>


                    <label>
                        Email
                        <input name={"email"} required={true} type={"email"} placeholder={"Email"} id={"email"}
                        value={formData.email}
                        onChange={handleChange}
                        />
                    </label>

                    <label>
                        Password
                        <input name={"password"} required={true} type={"password"} placeholder={"Password"} id={"password"}
                        value={formData.password}
                        onChange={handleChange}
                        />
                    </label>

                    <button type={"submit"} >SELL YOUR SOUL</button>
                </form>
            </section>
        </>
    )
}

export default CreateManager
