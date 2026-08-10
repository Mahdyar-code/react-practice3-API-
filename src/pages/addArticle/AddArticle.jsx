import { useState } from "react";
import Navbar from "../../compnent/navbar/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

function AddArticle() {
  const [article, setArticle] = useState({});
  const navegate = useNavigate();
  const articlhandler = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const creatArticle = () => {
    axios
      .post("http://localhost:3000/articles", article)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch(() => {
        console.log();
        Swal.fire({
          title: "مقاله اضافه نشد",
          timer: 2000,
          timerProgressBar: true,
          icon: "success",
        });
      });
    navegate("/");
  };
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 px-5">
        <h2 className="flex justify-center lalazar ">اضافه کردن مقاله</h2>
        <form
          action="#"
          className="flex flex-col [&>input]:border [&>input]:border-gray-400 [&>input]:rounded-sm [&>input]:outline-0 [&>input]:mb-2 [&>input]:mt-1 [&>input]:text-sm [&>input]:p-1.5"
        >
          عنوان مقاله:
          <input
            onChange={articlhandler}
            type="text"
            name="title"
            placeholder="عنوان مقاله را وارد کنید"
            required
          />
          توضیحات مخصز:
          <input
            onChange={articlhandler}
            type="text"
            name="desc"
            placeholder=" یک توضیح کوتاه در باره مقاله وارد کنید"
            required
          />
          نویسنده:
          <input
            onChange={articlhandler}
            type="text"
            name="writter"
            placeholder="نام نویسنده مقاله را وارد کنید"
            required
          />
          موضوع مقاله:
          <input
            onChange={articlhandler}
            type="text"
            name="category"
            placeholder="موضوع مقاله را وارد کنید"
            required
          />
          تصویر:
          <input
            onChange={articlhandler}
            type="text"
            name="image"
            placeholder="آدرس تصویر مقاله را وارد کنید"
            required
          />
          مدت زمان خواندن:
          <input
            onChange={articlhandler}
            type="text"
            name="readingTime"
            placeholder="مقدار تایم نیاز برای خواندن مقاله"
          />
          <button
            onClick={creatArticle}
            type="submit"
            className=" bg-blue-600 rounded-md py-1 w-25 text-white hover:bg-blue-700 duration-300"
          >
            {" "}
            ساخت مقاله
          </button>
        </form>
      </div>
    </>
  );
}
export default AddArticle;
