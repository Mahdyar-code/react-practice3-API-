import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

function Article(props) {
  return (
    <>
      <div
        className="box rounded-md overflow-auto shadow-lg shadow-gray-300 border-t hover:translate-y-0.5 duration-500 max-w-85 w-full mx-auto
         "
      >
        <img src={props.image} alt="article picture"  className=""/>
        <div className="p-3 pb-1">
          <div className="title font-bold mb-2"> {props.title}</div>
          <div className="disc text-sm text-taupe-600 ">{props.desc}</div>
          <Link
            to={`/articleItem/${props.id}`}
            className="font-bold flex items-center my-2 hover:text-amber-800"
          >
            ادامه مطلب <FiArrowLeft className="text-md mt-2 " />
          </Link>
        </div>
        <div className="fott flex justify-between  px-3 py-2.5 bg-gray-200">
          <div className="ritter">نویسنده:{props.writter}</div>
          <div className="time text-sm flex items-center">
            <FiClock className="ml-1" /> {props.readingTime} دقیقه{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default Article;
