
import {useEffect, useState} from "react";
import "../../Styles/ManagerAllJobs.css"
import {useNavigate} from "react-router-dom";


export function ManagerAllJobs() {
    const [Mjobs, setMJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(()=>{
        let url = "http://localhost:8080/api/Jobs";
        fetch(url, {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        }).then(response =>
            response.json())
            .then(data => {
                setMJobs(data);
                setLoading(false);
            })
            .catch(error => console.error('Error:', error));
    }, [])
    if (loading) return <p>Loading...</p>;




    return(
        <>
            <h1>All Jobs</h1>
            <button onClick={() => navigate(`/createJob`)}><p>CREATE A JOB</p></button>
            <section id="general-job-container">
            {Mjobs.map((job) => (
                <section id="manager-job-container-outer"  key={job.jobId}>
                    <section id="manager-job-container">
                        <p>Customer: {job.customer}</p>
                        <p>Start date: {job.startDate.split("T")[0]}</p>
                        <p>Duration in days: {job.days}</p>
                        <p>Location: {job.location}</p>
                        <p>Extra information: {job.comments}</p>
                        {job.models.map(model => (
                            <section id={"models-container"} key={model.modelId}>
                                <p>Model Name: <br/> {model.firstName} {model.lastName}</p>
                            </section>
                        ))}
                    </section>
                    <section className={"edit-button"}>
                        <button onClick={() => navigate(`/expenses/${job.jobId}`)}><p>Expenses</p></button>
                        <button onClick={() => navigate(`/Edit/${job.jobId}`)}><p>Edit Models</p></button>
                    </section>
                </section>
            ))}
            </section>
        </>
    )
}

export default ManagerAllJobs
