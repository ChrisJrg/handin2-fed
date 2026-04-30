
import {useEffect, useState} from "react";
import edit_png from "../../assets/pencil-edit-button.svg";
import "../../Styles/ManagerAllJobs.css"

export function ManagerAllJobs() {
    const [Mjobs, setMJobs] = useState([]);
    const [loading, setLoading] = useState(true);


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
    })
    if (loading) return <p>Loading...</p>;




    return(
        <>
            <h1>All Jobs</h1>
            {Mjobs.map((job) => (
                <section id="job-container-outer"  key={job.jobId}>
                    <section id="job-container">
                        <text>Customer: {job.customer}</text>
                        <text>Start date: {job.startDate}</text>
                        <text>Duration in days: {job.days}</text>
                        <text>Location: {job.location}</text>
                        <text>Extra information: {job.comments}</text>
                        {job.models.map(model => (
                            <section id={"models-container"} key={model.modelId}>
                                <text>Model Name: <br/> {model.firstName} {model.lastName}</text>
                            </section>
                        ))}
                    </section>
                    <button><img id="edit" src={edit_png} alt="edit" /></button>
                </section>
            ))}
        </>
    )
}

export default ManagerAllJobs
