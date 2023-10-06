import { useLoaderData } from "react-router-dom";
import Hero from "../Header/Hero/Hero";


const Home = () => {
    const heroData = useLoaderData()
  
    return (
        <div>
           <Hero heroData={heroData}/>
        </div>
    );
};

export default Home;