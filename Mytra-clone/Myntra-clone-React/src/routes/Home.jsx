import HomeItem from "../components/HomeItem";
import {useSelector} from "react-redux"
const Home = () => {


    const item = useSelector((store)=>store.item);
    
    return(
        <>
        <main>
        <div className="items-container">
          {item.map((item)=><HomeItem key={item.id} item={item} />)}
          
        </div>
      </main>
        </>
    )
}
export default Home;