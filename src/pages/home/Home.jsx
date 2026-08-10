import { useEffect, useState } from "react";
import Navbar from "../../compnent/navbar/Navbar";
import Article from "../article/Article";
import axios from "axios";

function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/articles")
      .then((response) => setArticles(response.data));
      
  }, []);
  return (
    <>
      <Navbar />
      <div className="container max-w-full">
        <h2 className="flex justify-center mt-10 font-bold text-xl">
          لیست مقالات
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 my-5  px-5">
            {
                articles.map(item=>(
                    <Article key={item.id} {...item}   />
                ))
            }

        
        </div>
      </div>
    </>
  );
}
export default Home;
