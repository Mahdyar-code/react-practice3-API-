import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditArticle() {
  const article_id = useParams().article_id;
  const [article, setArticle] = useState({});
  const navegate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/articles/${article_id}`)
      .then((respon) => setArticle(respon.data));
  }, []);

  const articlhandler = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const editArticle = () => {
    axios.patch(`http://localhost:3000/articles/${article_id}`,article);
    navegate("/");
  };
  return (
    <>
      <div className="max-w-md px-5 mx-auto mt-10">
        <h2 className="flex justify-center lalazar ">ویرایش مقاله</h2>
        <form
          action="#"
          className="flex flex-col [&>input]:border [&>input]:border-gray-400 [&>input]:rounded-sm [&>input]:outline-0 [&>input]:mb-2 [&>input]:mt-1 [&>input]:text-sm [&>input]:p-1.5"
        >
          عنوان مقاله:
          <input
            onChange={articlhandler}
            type="text"
            name="title"
            placeharticleer="عنوان مقاله را وارد کنید"
            value={article.title}
          />
          توضیحات مخصز:
          <input
            onChange={articlhandler}
            type="text"
            name="desc"
            placeharticleer=" یک توضیح کوتاه در باره مقاله وارد کنید"
            value={article.desc}
          />
          نویسنده:
          <input
            onChange={articlhandler}
            type="text"
            name="writter"
            placeharticleer="نام نویسنده مقاله را وارد کنید"
            value={article.writter}
          />
          موضوع مقاله:
          <input
            onChange={articlhandler}
            type="text"
            name="category"
            placeharticleer="موضوع مقاله را وارد کنید"
            value={article.category}
          />
          تصویر:
          <input
            onChange={articlhandler}
            type="text"
            name="image"
            placeharticleer="آدرس تصویر مقاله را وارد کنید"
            value={article.image}
          />
          مدت زمان خواندن:
          <input
            onChange={articlhandler}
            type="text"
            name="readingTime"
            placeharticleer="مقدار تایم نیاز برای خواندن مقاله"
            value={article.readingTime}
          />
          <button
            onClick={editArticle}
            type="submit"
            className=" bg-blue-600 rounded-md py-1 w-25 text-white hover:bg-blue-700 duration-300"
          >
            {" "}
            ویرایش
          </button>
        </form>
      </div>
    </>
  );
}
export default EditArticle;
