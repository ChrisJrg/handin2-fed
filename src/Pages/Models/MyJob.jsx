import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


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
        <div><text>One very nice job</text></div>
                <section key={job.jobId}>
                    <text>Customer: {job.customer}</text>
                    <text>Start date: {job.startDate}</text>
                    <text>Duration in days: {job.days}</text>
                    <text>Location: {job.location}</text>
                    <text>Extra information: {job.comments}</text>
                </section>
        </>
    )

}

export default ModelJob;