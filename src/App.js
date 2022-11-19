import React, { useState, useEffect} from "react"
import './App.css';

function App({ login }){
  const [data, setData] = useState(null);
  const [loading,setloading] = useState(null);
  const [error, setError] = useState(null);

    useEffect(() => {
      if(!login) return;
      setloading(true);

      fetch(`https://api.github.com/users/${login}`)
        .then(response => response.json())
        .then(setData)
        .then(()=> setloading(false))
        .catch(setError);
    },[login]);

    if(loading) return <h1>Loading...</h1>;
    if(error) 
      return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if(!data) return null;

      return <div>
        <h1>Hello {data.name}</h1>
        <p>We know a lot about you. For instance: {data.bio}</p>
        <p>And this is what you look like:</p>
        <img alt={data.login} src={data.avatar_url}/>
        <p>This image has nothing to do with you. It's just here for your entertainment</p>
        <img alt="pingu coding meme" src='https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be7eedf8e1f31aabcec_BwENfmI0CU5dZGYlSyo142mpfG08-rYgTS-Qm47uMUXN6JXtmdZvtzVzTooUQdXTWmTD8uzF9N6XQJA2vUIMi53tunFyVtvOBJTNfOjHit2P_JkTmFzFsK7ep6Vb9781XZnRAryH.png'/>
      </div>

}


export default App;
