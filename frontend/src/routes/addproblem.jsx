// import React, { useState } from "react";
// import axios from "axios";

// const Addproblem = () => {
//     const [problem, setProblem] = useState({
//         title: "",
//         desc: "",
//         statement: "",
//         input: "",
//         output: "",
//         constraints: "",
//         testcase: [{ input: "", output: "", sample: false, explanation: "" }],
//     });

//     const handleChange = (e) => {
//         setProblem({ ...problem, [e.target.name]: e.target.value });
//     };

//     const handleTestcaseChange = (index, e) => {
//         const updatedTestCases = problem.testcase.map((test, i) =>
//             i === index ? { ...test, [e.target.name]: e.target.value } : test
//         );

//         setProblem({ ...problem, testcase: updatedTestCases });
//     };

//     const addTestcase = () => {
//         setProblem({
//             ...problem,
//             testcase: [...problem.testcase, { input: "", output: "", sample: false, explanation: "" }]
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post("http://localhost:9000/api/problem/add", problem);
//             alert("Problem added successfully!");
//         } catch (err) {
//             console.error(err);
//             alert("Error adding problem");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
//             <h2 className="text-2xl font-bold mb-6">Add New Problem</h2>
            
//             <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2">Title</label>
//                 <input
//                     type="text"
//                     name="title"
//                     value={problem.title}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2">Description</label>
//                 <textarea
//                     name="desc"
//                     value={problem.desc}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 ></textarea>
//             </div>

//             <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2">Statement</label>
//                 <textarea
//                     name="statement"
//                     value={problem.statement}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 ></textarea>
//             </div>

//             <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2">Input</label>
//                 <textarea
//                     name="input"
//                     value={problem.input}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 ></textarea>
//             </div>

//             <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2">Output</label>
//                 <textarea
//                     name="output"
//                     value={problem.output}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 ></textarea>
//             </div>

//             <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2">Constraints</label>
//                 <textarea
//                     name="constraints"
//                     value={problem.constraints}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 ></textarea>
//             </div>

//             <div className="mb-6">
//                 <h3 className="text-xl font-semibold mb-4">Test Cases</h3>
//                 {problem.testcase.map((testcase, index) => (
//                     <div key={index} className="mb-4 p-4 border rounded-md bg-gray-50">
//                         <div className="mb-2">
//                             <label className="block text-gray-700 font-bold">Input</label>
//                             <textarea
//                                 name="input"
//                                 value={testcase.input}
//                                 onChange={(e) => handleTestcaseChange(index, e)}
//                                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                             ></textarea>
//                         </div>
//                         <div className="mb-2">
//                             <label className="block text-gray-700 font-bold">Output</label>
//                             <textarea
//                                 name="output"
//                                 value={testcase.output}
//                                 onChange={(e) => handleTestcaseChange(index, e)}
//                                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                             ></textarea>
//                         </div>
//                         <div className="mb-2 flex items-center">
//                             <input
//                                 type="checkbox"
//                                 name="sample"
//                                 checked={testcase.sample}
//                                 onChange={(e) => handleTestcaseChange(index, e)}
//                                 className="mr-2"
//                             />
//                             <label className="text-gray-700 font-bold">Sample Test Case</label>
//                         </div>
//                         <div>
//                             <label className="block text-gray-700 font-bold">Explanation</label>
//                             <textarea
//                                 name="explanation"
//                                 value={testcase.explanation}
//                                 onChange={(e) => handleTestcaseChange(index, e)}
//                                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                             ></textarea>
//                         </div>
//                     </div>
//                 ))}
//                 <button
//                     type="button"
//                     onClick={addTestcase}
//                     className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 >
//                     Add Testcase
//                 </button>
//             </div>

//             <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md focus:outline-none focus:ring focus:ring-green-300"
//             >
//                 Submit Problem
//             </button>
//         </form>
//     );
// }

// export default Addproblem;
import React, { useState } from "react";
import axios from "axios";

const AddProblem = () => {
  const [problem, setProblem] = useState({
    title: "",
    desc: "",
    statement: "",
    input: "",
    output: "",
    constraints: "",
    testcase: [{ input: "", output: "", sample: false, explanation: "" }],
    createdBy: "admin",  // You can make this dynamic based on user authentication
  });

  const handleChange = (e) => {
    setProblem({ ...problem, [e.target.name]: e.target.value });
  };

  const handleTestcaseChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedTestCases = problem.testcase.map((test, i) =>
      i === index
        ? { ...test, [name]: type === "checkbox" ? checked : value }
        : test
    );
    setProblem({ ...problem, testcase: updatedTestCases });
  };

  const addTestcase = () => {
    setProblem({
      ...problem,
      testcase: [
        ...problem.testcase,
        { input: "", output: "", sample: false, explanation: "" },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(problem); // This will show you what is being sent
    try {
        await axios.post("http://localhost:9000/api/problem/add", problem);
        alert("Problem added successfully!");
    } catch (err) {
        console.error(err);
        alert("Error adding problem");
    }
};


  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-6">Add New Problem</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={problem.title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          name="desc"
          value={problem.desc}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Statement</label>
        <textarea
          name="statement"
          value={problem.statement}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Input</label>
        <textarea
          name="input"
          value={problem.input}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Output</label>
        <textarea
          name="output"
          value={problem.output}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Constraints</label>
        <textarea
          name="constraints"
          value={problem.constraints}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Test Cases</h3>
        {problem.testcase.map((testcase, index) => (
          <div key={index} className="mb-4 p-4 border rounded-md bg-gray-50">
            <div className="mb-2">
              <label className="block text-gray-700 font-bold">Input</label>
              <textarea
                name="input"
                value={testcase.input}
                onChange={(e) => handleTestcaseChange(index, e)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold">Output</label>
              <textarea
                name="output"
                value={testcase.output}
                onChange={(e) => handleTestcaseChange(index, e)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>
            <div className="mb-2 flex items-center">
              <input
                type="checkbox"
                name="sample"
                checked={testcase.sample}
                onChange={(e) => handleTestcaseChange(index, e)}
                className="mr-2"
              />
              <label className="text-gray-700 font-bold">Sample Test Case</label>
            </div>
            <div>
              <label className="block text-gray-700 font-bold">Explanation</label>
              <textarea
                name="explanation"
                value={testcase.explanation}
                onChange={(e) => handleTestcaseChange(index, e)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addTestcase}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          Add Testcase
        </button>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md focus:outline-none focus:ring focus:ring-green-300"
      >
        Submit Problem
      </button>
    </form>
  );
};

export default AddProblem;
