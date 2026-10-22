
import axios from "axios";
import { useState } from "react";

const App = () => {


  const api = "https://dummyjson.com/products";

  const[data , setdata] = useState([])
  return (
 


  <div  className="page">
    <div  className="main-card">
      <div className="header">
        <h1>api data</h1>
        <button className="add-btn" onClick={}>ADD</button>
        <div className="card-container">
          <div className="innercard" >
            <span className="card-id" >
              ID: {postMessage.id}
            </span>

            <h3>{postMessage.title}</h3>
            <p>{post.body}</p>


            <button className="delete-btn" > DELETE</button>
          </div>

        </div>
        <button className="add-btn"  onClick={}>DELETE</button>

      </div>
    </div>


  </div>
  )
}

export default App
