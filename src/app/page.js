import Image from "next/image";
import  Invitation from './asset/Black and gold birthday elegant invitation (2).png' 
export default function Home() {
  return (
<>
  <main>
    <h1 className=""> Welcome To Krishnvi Public School</h1>
    <h1>We Will Be Comming Soon...</h1>
    <Image src={Invitation} alt="invitation" height={1280} width={720}/>
  </main>
</>
 
  );
}
