import { useState } from 'react'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import axios from 'axios';
import '../App.css'

function Compiler(props) {
  const [code, setCode] = useState(`
  // Include the input/output stream library
  #include <iostream> 
  #include <bits/stdc++.h>
  using namespace std;

  // Define the main function
  int main() { 
      // Output "Hello World!" to the console
      cout << "Hello World!"; 
      
      // Return 0 to indicate successful execution
      return 0; 
  }`);

  const [input,setInput]=useState();

  const [output, setOutput] = useState('');

  const [verdict,setVerdict]=useState('');
  const handleClick = async () => {
    const payload = {
      language: 'cpp',
      code,
      input
    };

    try {
      const { data } = await axios.post('http://localhost:9000/run', payload);
      console.log(data);
      setOutput(data);
    }
    catch (err) {
      console.log(err);
    }
  }
  const handleSubmit = async () => {
    let allCorrect = true;

    for (let i = 0; i < props.testcases.length; i++) {
      const testcase = props.testcases[i];
      const payload = {
        language: 'cpp',
        code,
        input: testcase.input,
      };

      try {
        const { data } = await axios.post('http://localhost:9000/run', payload);
        if (data.trim() !== testcase.output.trim()) {
          allCorrect = false;
          break;
        }
      } catch (err) {
        console.log(err);
        allCorrect = false;
        break;
      }
    }

    setVerdict(allCorrect ? 'Correct' : 'Incorrect');
  };

  return (
    <div >
      {/* Right side (code editor and output) */}
      {/* <div className="right-side w-1/2 bg-gray-100 p-8 rounded-r-lg shadow-md"> */}
        {/* Code editor */}
        <div className="bg-gray-100 shadow-md w-full mb-4">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              outline: 'none',
              border: 'none',
              backgroundColor: '#f7fafc',
              height: '100%',
              overflowY: 'auto'
            }}
          />
        </div>
        <div>
          <textarea 
            className="input-area"
            placeholder="Enter your input here..."
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>

      <div className="buttons">
        <button 
          onClick={handleClick} 
          type="button" 
          className="run-button text-center inline-flex items-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          Run
        </button>
        <button 
          onClick={handleSubmit} 
          type="button" 
          className="submit-button text-center inline-flex items-center text-white bg-gradient-to-br from-green-500 to-blue-400 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          Submit
        </button>
      </div>

      {/* Output */}
      {output !== '' && (
        <div className="outputbox mt-4 bg-gray-100 rounded-md shadow-md p-4">
          <p style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}>
            {String(output)}
          </p>
        </div>
      )}

      {/* Verdict */}
      {verdict !== '' && (
        <div className={`verdict mt-4 p-4 ${verdict === 'Correct' ? 'bg-green-100' : 'bg-red-100'} rounded-md shadow-md`}>
          <p>{verdict}</p>
        </div>
      )}
      {/* </div> */}
    </div>
  )
}

export default Compiler
