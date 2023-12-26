import { useRouter } from "next/router"



export default function Detail(){
  const router = useRouter();
  const params = router.query.params;

  const [title, id]:any = params || [];
  
  

  
  return(
    <div>
      <p>{title}</p>
    </div>
  )
}