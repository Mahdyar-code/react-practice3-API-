import About from "./pages/about/Aboute";
import AddArticle from "./pages/addArticle/AddArticle";
import ArticleItem from "./pages/article/ArticleItem";
import EditArticle from "./pages/editArticle/EditArticle";
import Home from "./pages/home/Home";
import NotFound from "./pages/natFound/NotFound";

export const routes=[
    {path:"/", element:<Home/>},
    {path:"/about",element:<About/>},
    {path:"/addArticle",element:<AddArticle/>},
    {path:"/editArticle/:article_id",element:<EditArticle/>},
    {path:"/articleItem/:article_id", element:<ArticleItem/>},
    {path:"*",element:<NotFound/>}
]