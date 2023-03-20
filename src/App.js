import React from 'react';
//import axios from 'axios'
import './App.css';

function App() {
  const [usuarios, setusuarios] = React.useState([])

  React.useEffect(() =>{
    function getData(){
      fetch("https://jsonplaceholder.typicode.com/users")
      //axios.get("http://localhost:5000/categoria")
      .then((response) =>(response.json()))
      .then((data) => setusuarios(data))
      //.catch((err)=>(console.log(err)))
  }
  getData()

  }, [])
  return (
    <div>
      hola gente
      {usuarios && usuarios.map((usuario) =>
      <p>{usuario.name}</p>
      )}
    </div>
      
  );
}

export default App;