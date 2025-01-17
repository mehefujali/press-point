import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Addarticles from "../Pages/Addarticles/Addarticles";
import PrivateRoute from "../Private/PrivateRoute";
import AllArticles from "../Pages/AllArticles/AllArticles";
import ArticleDetails from "../Pages/ArticleDetails/ArticleDetails";
import PremiumArticle from "../Pages/PremiumArticle/PremiumArticle";
import Dashboard from "../Layout/Main/Dashboard";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "addarticles",
        element: (
          <PrivateRoute>
            <Addarticles />
          </PrivateRoute>
        ),
      },
      {
        path:'articles',
        element: <AllArticles/>
      },
      {
        path:'article-details/:id',
        element: <ArticleDetails/>
      },
      {
       path:'premium-articles',
       element: <PremiumArticle/>
      }
    ],
  },
  {
    path:'/dashboard',
    element: <Dashboard/>
  }
]);

export default AppRouter;
