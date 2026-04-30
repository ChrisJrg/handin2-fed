import "../../Styles/MyJobs.css"
import {useEffect, useState} from "react";
import edit_png from "../../assets/pencil-edit-button.svg";
import {Link} from "react-router-dom";


export function MyJobs(){
    const [jobs, setJobs] = useState([]);
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
                setJobs(data);
                setLoading(false);
            })
            .catch(error => console.error('Error:', error));
    })
    if (loading) return <p>Loading...</p>;

    return(
        <>
            <div><text>My Jobs</text></div>
            {jobs.map((job) => (
                <section id="job-container-outer"  key={job.jobId}>
                    <section id="job-container">
                    <text>Customer: {job.customer}</text>
                    <text>Start date: {job.startDate.split("T")[0]}</text>
                    <text>Duration in days: {job.days}</text>
                    <text>Location: {job.location}</text>
                    <text>Extra information: {job.comments}</text>
                    </section>

                    <nav>
                        <Link to={`/my-jobs/:${job.jobId}`}>
                    <button ><img id="edit" src={edit_png} alt="edit" /></button>
                        </Link>
                    </nav>
                </section>
            ))}

        </>
    )
}

export default MyJobs;