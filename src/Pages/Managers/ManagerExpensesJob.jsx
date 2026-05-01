import "../../Styles/ManagerExpensesJob.css"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export function JobExpenses() {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const {jobId} = useParams();

    useEffect(() => {
        let url = "http://localhost:8080/api/Expenses";
        fetch(url, {
            method: "GET",
            'credentials': "same-origin",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('token'),
            }
        }).then(response => response.json())
            .then(data => {
                const jobExpenses = data.filter(expense => String(expense.jobId) === jobId);
                setExpenses(jobExpenses);
                setLoading(false);
            })
    }, [jobId])

    if (loading) return <p>Loading...</p>;

    return(
        <>
            <p>Expenses</p>
            <section id='expenses-general-container'>
            {expenses.map((expense) => (
                <div key={expense.jobId} id="expense-single-container">
                    <p>Model Id: {expense.modelId}</p>
                    <p>Date: {expense.date}</p>
                    <p>Details: {expense.text}</p>
                    <p>Amount: {expense.amount}</p>
                </div>
            ))}
            </section>
        </>
    )

}

export default JobExpenses;