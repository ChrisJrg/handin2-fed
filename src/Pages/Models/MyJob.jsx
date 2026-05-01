import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "../../Styles/MyJob.css"


export function ModelJob(){
        const {jobId} = useParams();
        const [job, setJob] = useState(null);
        const [loading, setLoading] = useState(true);


        useEffect(()=>{
            let url = `http://localhost:8080/api/Jobs/${jobId}`;
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
                    setJob(data);
                    setLoading(false);
                })
                .catch(error => console.error('Error:', error));
        }, [jobId]);
        if (loading) return <p>Loading...</p>;

    return(
        <>
            <section>
                <section id="single-job" key={job.jobId}>
                    <p>Customer: {job.customer}</p>
                    <p>Start date: {job.startDate.split("T")[0]}</p>
                    <p>Duration in days: {job.days}</p>
                    <p>Location: {job.location}</p>
                    <p>Extra information: {job.comments}</p>
                </section>

                <section id="model-single-job-expense">
                    <p>Expenses</p>
                </section>
            </section>
        </>
    )

}

export default ModelJob;