import React, {useState, useEffect} from 'react';
import './App.css';
import reactDom from 'react-dom';


const apiURL = 'https://api.github.com/users/maurotello';
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
/*
  useEffect(() =>{
    fetch(apiURL)
      .then((response) => response.json())
      .then((posts) => {
        setData(posts)
      })
      .catch((error) =>{
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(()=>{
        setLoading(false);
      })
    },[]
  );
  */
  /*
  if (loading) return "Loading...";
  if (error) return "Error!";
*/

  const apiGet = () => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log(data);
       
      })
      .catch((error) =>{
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(()=>{
        setLoading(false);
      })
  };

  return (
    <div className="App">
      <section className="App-content">
        <button onClick={apiGet}>API</button>
          <div style={{ textAlign:"center" }}>
            <img src={data.avatar_url} alt="Avatar" height="100" />
            <p>Name: {data.name}</p>
            <p>Bio: {data.bio}</p>
            <p>Username: {data.login}</p>
            <p>Location: {data.location}</p>
            <p>Public Repos: {data.public_repos}</p>
          </div>
      </section>
    </div>
  );
}
/*
sudo sysctl -p
*/
export default App;
