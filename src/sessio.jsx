import { useState, useEffect } from "react";

const Session = () => {
  const [name, setName] = useState('');
  const [lName, setLname] = useState('');

  useEffect(() => {
    const storedName = sessionStorage.getItem('userName');
    if (storedName) setName(storedName);
  }, []);

  
  useEffect(() => {
    const localname = localStorage.getItem('localname');
    if (localname) setLname(localname);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('userName', name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem("localname", lName);
  }, [lName]);

  return (
    <div>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lName}
        onChange={(e) => setLname(e.target.value)}
      />
      <p>Hello, {name}!</p>
      <p>LocalStorage Last Name: {lName}</p>
    </div>
  );
};

export default Session;
