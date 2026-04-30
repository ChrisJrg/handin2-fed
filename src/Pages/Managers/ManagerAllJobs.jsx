
import {useEffect, useState} from "react";
import edit_png from "../../assets/pencil-edit-button.svg";
import "../../Styles/ManagerAllJobs.css"
import {Link} from "react-router-dom";

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
    }, [])
    if (loading) return <p>Loading...</p>;




    return(
        <>
            <h1>All Jobs</h1>
            {Mjobs.map((job) => (
                <section id="manager-job-container-outer"  key={job.jobId}>
                    <section id="manager-job-container">
                        <p>Customer: {job.customer}</p>
                        <p>Start date: {job.startDate}</p>
                        <p>Duration in days: {job.days}</p>
                        <p>Location: {job.location}</p>
                        <p>Extra information: {job.comments}</p>
                        {job.models.map(model => (
                            <section id={"models-container"} key={model.modelId}>
                                <p>Model Name: <br/> {model.firstName} {model.lastName}</p>
                            </section>
                        ))}
                    </section>
                    <Link to={`/jobs/${job.id}`}>
                        <button><img id="edit" src={edit_png} alt="edit" /></button>
                    </Link>
                </section>
            ))}
        </>
    )
}

export default ManagerAllJobs
