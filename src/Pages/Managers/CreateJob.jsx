import {useState} from "react";


export function CreateJob() {
    const [formData, setFormData] = useState({customer: "", startdate: "", days: "", location: "", comments: ""});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/Jobs', {
                method: 'POST',
                body: JSON.stringify(formData),
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                alert("Successfully created a job");
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
            <h1>Create a job</h1>

            <section>
                <form onSubmit={handleSubmit}>
                    <label>
                        Customer Name:
                        <input name={"customer"} required={true} type={"text"} placeholder={"Customer"} id={"customer"}
                               value={formData.customer}
                               onChange={handleChange}
                        />
                    </label>

                    <label>
                        Start Date:
                        <input name={"startdate"} required={true} type={"date"} placeholder={"Start Date"} id={"startdate"}
                               value={formData.startdate}
                               onChange={handleChange}
                        />
                    </label>

                    <label>
                        Days:
                        <input name={"days"} required={true} type={"text"} placeholder={"Days"} id={"days"}
                               value={formData.days}
                               onChange={handleChange}
                        />
                    </label>

                    <label>
                        Location:
                        <input name={"location"} required={true} type={"text"} placeholder={"location"} id={"location"}
                               value={formData.location}
                               onChange={handleChange}
                        />
                    </label>

                    <label>
                        Comments:
                        <input name={"comments"} required={true} type={"text"} placeholder={"comments"} id={"comments"}
                               value={formData.comments}
                               onChange={handleChange}
                        />
                    </label>
                    <button type={"submit"} >SUBMIT</button>
                </form>
            </section>
        </>
    )
}

export default CreateJob
