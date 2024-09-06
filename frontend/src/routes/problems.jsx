import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import '../App.css'; 
import { useNavigate } from "react-router-dom";

const Problemset = () => {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const response = await axios.get("http://localhost:9000/api/problem");
                setProblems(response.data);
            } catch (err) {
                setErr(err);
            } finally {
                setLoading(false);
            }
        }
        fetchProblems();
    }, [])

    const handleClick = (id) => {
        navigate(`/problemset/${id}`);
    }

    if (loading) return <p>Loading...</p>;
    if (err) return <p>Error: {err.message}</p>;
    return (
        <div className="all_problems">
            <h1>Problem Set</h1>
            <ul>
                {problems.map((problem) => (
                    <li key={problem._id}>
                        <h2>{problem.title}</h2>
                        <p>{problem.desc}</p>
                        <button className="style_button" onClick={() => handleClick(problem._id)}>Solve</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Problemset