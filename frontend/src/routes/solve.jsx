import React, { useEffect, useState ,useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import Compiler from "./compiler";
import { AlertCircle, Loader, Trash } from "lucide-react"; // Import Lucide icons
import { AuthContext } from "./AuthContext";

const Solve = () => {
    let { id } = useParams();
    const navigate = useNavigate(); // Hook for programmatic navigation

    const { user } = useContext(AuthContext);

    const [problem, setProblem] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/api/problem/${id}`);
                setProblem(response.data);
            } catch (err) {
                setErr(err);
            }
        };

        fetchProblem();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:9000/api/problem/delete`, { params: { id } });
            alert("Problem deleted successfully!");
            navigate('/'); // Redirect the user after successful deletion
        } catch (err) {
            console.error("Error deleting the problem:", err);
            alert("Failed to delete the problem");
        }
    };

    if (err) return <div>Error: {err.message}</div>;
    if (!problem) return <div>Loading...</div>;

    return (
        <div style={styles.container}>
            <div style={styles.problemStatement}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1 style={styles.title}>{problem.title}</h1>
                    {user && user.role==='admin' && (
                    <button 
                        onClick={handleDelete} 
                        style={styles.deleteButton}
                    >
                        <Trash color="red" /> Delete
                    </button>
                    )}
                </div>

                <p style={styles.description}>{problem.desc}</p>

                <div style={styles.problemDetails}>
                    <h2>Input:</h2>
                    <p>{problem.input}</p>

                    <h2>Output:</h2>
                    <p>{problem.output}</p>

                    <h2>Constraints:</h2>
                    <p>{problem.constraints}</p>

                    <h2>Test Cases:</h2>
                    {problem.testcase.map((testcase, index) => (
                        <div key={index} style={styles.testCase}>
                            <p>Input: {testcase.input}</p>
                            <p>Output: {testcase.output}</p>
                            {testcase.explanation && <p>Explanation: {testcase.explanation}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <div style={styles.problemCompiler}>
                <Compiler problem={problem} />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',  
        padding: '20px',
    },
    problemStatement: {
        width: '48%',  
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '24px', 
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '10px',
    },
    deleteButton: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0',
        fontSize: '16px',
    },
    description: {
        fontSize: '18px',  
        color: '#555',
        marginBottom: '20px',
    },
    problemDetails: {
        marginTop: '20px',
    },
    testCase: {
        marginBottom: '10px',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
    },
    problemCompiler: {
        width: '48%',  
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    }
};

export default Solve;
