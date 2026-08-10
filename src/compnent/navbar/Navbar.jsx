import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./nav.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="nav bg-blue-600 p-3">
        <div className="mobil md:hidden">
          <div className="flex justify-between items-center mx-5">
            <h2 className="lalazar text-xl"> مهدیار کود</h2>
            <div className="text-xl" onClick={() => setIsOpen(!isOpen)}>
              {" "}
              {isOpen ? <FiX /> : <FiMenu />}
            </div>{" "}
          </div>
          <div>
            <ul className={`m-5 ${isOpen ? "" : "hidden"} flex flex-col gap-2`}>
              <li>
                <NavLink to="/">صفحه اصلی</NavLink>
              </li>
              <li>
                <NavLink to="/addArticle"> ساخت مقاله</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/about">درباره ما</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className=" desctop hidden md:flex justify-between mx-15">
          <div className=" text-2xl font-bold"> مهدیار کود</div>
          <ul className=" md:flex ml-10 gap-5  [&>li]:hover:bg-blue-700 [&>li]:hover:rounded-sm">
            <li>
              <NavLink to="/">صفحه اصلی</NavLink>
            </li>
            <li>
              <NavLink to="/addArticle">ساخت مقاله </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/about">درباره ما</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
