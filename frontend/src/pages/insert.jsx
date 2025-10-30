// import { useState } from "react";
// import axios from"axios";

// const Insert=()=>{
//     const[input,setInput] = useState({});
//     const handleInput=(e)=>{
//        let name=e.target.name;
//        let value=e.target.value;
//        setInput(values=>({...values,[name]:value}));

//     }
//     const handleSubmit=async()=>{
//         let api="http://localhost:800/"
//         const response=await axios.post(api,input);
//         console.log(response);
//     }
//     return(
//         <><h1>Insert data</h1>
//         Enter Empno:<input type="text" name="empno" onChange={handleInput}/>
//         <br/>
//         Enter Name: <input type="text" name="name" onChange={handleInput}/>
//         <br/>
//         Enter Designation :<input type="text" name="designation" onChange={handleInput}/>
//         <br/>
//         Enter salary :<input type="text" name="salary" onChange={handleInput}/>
//         <br/>
//         <button onClick={handleInput}>Save!!</button>
//         </>
//     )
// }
// export default Insert;



import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [input, setInput] = useState({
    empno: "",
    name: "",
    designation: "",
    salary: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const api = "http://localhost:8000/insert"; // ✅ fix port and endpoint
      const response = await axios.post(api, input);
      console.log("Response:", response.data);
      alert("Data inserted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error inserting data!");
    }
  };

  return (
    <>
      <h1>Insert Data</h1>
      Enter Empno:{" "}
      <input type="text" name="empno" value={input.empno} onChange={handleInput} />
      <br />
      Enter Name:{" "}
      <input type="text" name="name" value={input.name} onChange={handleInput} />
      <br />
      Enter Designation:{" "}
      <input
        type="text"
        name="designation"
        value={input.designation}
        onChange={handleInput}
      />
      <br />
      Enter Salary:{" "}
      <input
        type="text"
        name="salary"
        value={input.salary}
        onChange={handleInput}
      />
      <br />
      <button onClick={handleSubmit}>Save!!</button>
    </>
  );
};

export default Insert;