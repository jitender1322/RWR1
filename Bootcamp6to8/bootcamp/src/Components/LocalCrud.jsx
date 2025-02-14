import React, { useState } from "react";

export default function LocalCrud() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const [record, setRecord] = useState([]);

  const handleSubmit = () => {
    let obj = {id : Date.now() ,name, email, city, gender };
    setRecord([...record, obj]);

    setName("");
    setCity("");
    setEmail("");
    setGender("");
  };

  const handleDelete = (id)=>{
    const deletedData = record.filter((item)=>item.id != id) 
    setRecord(deletedData)
  }
  return (
    <div>
      <h1>LocalCrud</h1>
      <input
        type="text"
        placeholder="Enter your Name"   
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="">Male</label>
      <input
        type="radio"
        value={"male"}
        checked={gender == "male" ? true : false}
        name="gender"
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="">Female</label>
      <input
        type="radio"
        value={"female"}
        checked={gender == "female" ? true : false}
        name="gender"
        onChange={(e) => setGender(e.target.value)}
      />

      <label htmlFor="">City</label>
      <select onChange={(e) => setCity(e.target.value)} value={city}>
        <option value="rajkot">Rajkot</option>
        <option value="surat">Surat</option>
        <option value="vadodara">Vadodara</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>

      <table width="80%" style={{ border: "2px solid black" }}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Gender</th>
          <th colSpan="2">Action</th>
        </tr>
        {record.map((e, i) => {
          return (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.city}</td>
              <td>{e.gender}</td>
              <td><button>Edit</button></td>
              <td><button onClick={()=>handleDelete(e.id)} >Delete</button></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
