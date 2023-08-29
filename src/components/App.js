
import React,{useEffect,useState} from "react";
import './../styles/App.css';
import axios from "axios";
import 'regenerator-runtime/runtime'

const App = () => {
  let [data,Setdata]=useState('')
  useEffect(()=>{
    (async ()=>{
      let res=await axios.get('https://dummyjson.com/products')
      console.log(res.data)
      Setdata(JSON.stringify(res.data.products))
    })()
  },[])
  return (
    <div>
      <h1>Data Fetched from API</h1>
        {data? <pre>{data}</h1> : ''}
    </div>
  )
}

export default App
