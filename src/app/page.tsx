import Link from "next/link";
import NavBar from "../../components/navbar";
import style from "./style.module.scss";



interface dataType{
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}



export default async function Home() {

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const url =`${API_URL}?api_key=${API_KEY}&language=ko`;


  const res = await fetch(url,{cache : "no-cache"});
  const {results} = await res.json();

  return (
    <>
      <NavBar/>
      <div className={style.info}>
        <ul>
          {
            results && results.map((m:dataType,i:number)=>
                <div className={style.card} key={i}>
                  <Link href={{
                    pathname : `/movies/${m.title}/${m.id}`,     }}

                  >
                    <img src={`https://image.tmdb.org/t/p/original/${m.poster_path}`} alt="이미지" width={150}/>
                    <p>{m.title}</p>
                  </Link>
                </div>
            )
          }
        </ul>
      </div>
    </>
  )
}
