import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import "../../Styles/EditJob.css"


export function EditModelOnJob() {
    const {jobId} = useParams();
    const [job, setJob] = useState(null);
    const [model, setModel] = useState([]);
    const [selectedModel, setSelectedModel] = useState("");
    const local_token = localStorage.getItem("token");


    useEffect(() => {
        let url = `http://localhost:8080/api/Jobs/${jobId}`;
        fetch(url, {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${local_token}`
            }
        }).then(response => response.json())
            .then((data) => {
                console.log(data);
                setJob(data);
            }).catch((error) => {
            console.log(error);
        });
    }, [jobId, local_token]);


    useEffect(() => {
        let url = `http://localhost:8080/api/Models`;
        fetch(url, {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${local_token}`
            }
        }).then(response => response.json())
            .then((data) => {
                console.log(data);
                setModel(data);
            }).catch((error) => {
            console.log(error);
        });
    }, [job, local_token]);

    async function AddModel(e) {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/Jobs/${jobId}/model/${selectedModel}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                alert("Successfully added model");
                console.log(response);
            }else{
                alert("Server returned: "+ response.statusText);
                console.log(response);
            }
        }catch(err){
            alert('error: '+ err);
        }
    }

    async function RemoveModel(e) {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/Jobs/${jobId}/model/${selectedModel}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                alert("Successfully removed model");
                console.log(response);
            }else{
                alert("Server returned: "+ response.statusText);
                console.log(response);
            }
        }catch(err){
            alert('error: '+ err);
        }
    }




    const exclude = job ? model.filter(model => !job.models.some(jobModel => String(jobModel.modelId) === String(model.modelId))):[];
    const include = job ? model.filter(model => job.models.some(jobModel => String(jobModel.modelId) === String(model.modelId))):[];





    return(
        <>
            <h1>HELLO</h1>
                <form className={"addmodel"} onSubmit={AddModel}>
                    <label>Select a model to add</label>
                    <select
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                    >
                        <option>None</option>
                        {exclude.map((m) => (
                            <option key={m.modelId} value={m.modelId}>{m.firstName + " " + m.lastName} </option>
                        ))}
                    </select>
                    <button type={"submit"} className="btn btn-primary">Add Model</button>
                </form>

                <form className={"addmodel"} onSubmit={RemoveModel}>
                    <label>Select a model to remove</label>
                    <select
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                    >
                        <option>None</option>
                        {include.map((m) => (
                            <option key={m.modelId} value={m.modelId}>{m.firstName + " " + m.lastName} </option>
                        ))}
                    </select>
                    <button type={"submit"} className="btn btn-primary">Remove Model</button>
                </form>
        </>
    )
}

export default EditModelOnJob
