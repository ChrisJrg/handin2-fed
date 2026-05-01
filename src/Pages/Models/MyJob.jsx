import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "../../Styles/MyJob.css"
import {decodeToken} from "../../Hooks/TokenHook.jsx";


export function ModelJob(){
        const {jobId} = useParams();
        const [amount , setAmount] = useState(null);
        const [text, setText] = useState('');
        const local_token = localStorage.getItem("token");
        const decoded_token = decodeToken(local_token);
        const date = new Date().toISOString();
        const modelId = decoded_token.modelId;

    async function newExpense(event) {
        event.preventDefault();

        let url = `http://localhost:8080/api/Expenses`;
        try {
            const response = await fetch(url, {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    modelId,
                    jobId,
                    date,
                    text,
                    amount
                })
            })
            if(response.ok){
                alert("Expense successfully created!");
                setAmount('');
                setText('');

            }
        }
        catch(err) {
            console.log(err)
        }
    }


    return(
        <>
            <section id="single-job">
                <h1>Create a new expense</h1>
                <br/>
               <form onSubmit={newExpense}>
                   <label> Enter details about expense <br/>
                   <input required={true} type="text" name="details" placeholder="Enter details about expense" onChange={(event) => setText(event.target.value)}/>
                   </label>

                   <label> Enter the amount of your expense <br/>
                       <input required={true} type="number" name="amount" placeholder="Enter the amount of your expense" onChange={(event) => setAmount(event.target.value)}/>
                   </label>

                   <button type="submit" value="submit">Submit</button>
               </form>
            </section>
        </>
    )

}

export default ModelJob;