/** @type {import('next').NextConfig} */

const API_KEY= process.env.NEXT_PUBLIC_API_KEY


const nextConfig = {
  
  //갈려하는 경로를 변경해버림
  // async redirects(){
  //   return[
  //     {
  //       source : "/contact",
  //       destination: "/form",
  //       permanent: false
  //     }
  //   ]
  // },

  // async rewrites(){
  //   return[
  //     {
  //       source : "/api/movies",
  //       destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko`
  //     }
  //   ]
  // }

}

module.exports = nextConfig
