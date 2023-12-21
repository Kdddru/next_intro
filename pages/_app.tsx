//page들 상위 컴포넌트
import { AppProps } from "next/app";
import Layout from "../components/layout";


//초기화 css
import '../src/app/globals.css'

export default function App({Component, pageProps}:AppProps){
  


  return(
    <Layout>
      <Component {...pageProps}/>
      <span>hello</span>
    </Layout>
  )
}