"use client"
import { useEffect, useState } from "react";
import NavBar from "../../components/navbar";

const API_KEY= process.env.NEXT_PUBLIC_API_KEY



export default function Home() {
  const [movies, setMoives]=useState<[]>();
  

    async function getData(){
    const url =`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko`
    const  response = await fetch(url);
    const {results} = await response.json();

    console.log(results)
    

    setMoives(results);
  }




  useEffect(()=>{
    getData();
  },[])


  return (
    <>
      <NavBar/>
      <>
        {
          movies && movies.map((m:any)=>(
            <div key={m.id}>{m.title}</div>
          ))
        }
      </>
    </>
  )
}
