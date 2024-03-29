import Image from "next/image";
import Presente from "../../components/Presente";
import Porta from "../../components/Porta";

export default function Home() {
  
  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <Presente/>
      <Porta selecionadas={true}/>
      <Porta selecionadas={false}/>
    </div>
  );
}
