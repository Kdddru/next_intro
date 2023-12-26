'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './navbar.module.scss'


export default function NavBar(){
  const pathname = usePathname();

  return(
    <nav className={style.nav}>
      <div>
        <img src="/vercel.svg" alt="img" width={150}/>
      </div>
      <ul>
        <li><Link href="/" className={pathname === '/' ? style.active : ''}>Home</Link></li>
        <li><Link href="/about" className={pathname === '/about' ? style.active : ''} >About</Link></li>
      </ul>
    </nav>
  )
}