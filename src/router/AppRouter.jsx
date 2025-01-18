import { createBrowserRouter, Navigate } from "react-router-dom";
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
import ChildDashboard from "../Pages/Dashboard/Dashboard";
import AllUser from "../Pages/AllUser/AllUser";
import AddPublisher from "../Pages/AddPublisher/AddPublisher";
import AllArticlesDashboard from "../Pages/AllArticlesDashboard/AllArticlesDashboard";

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
        path: "articles",
        element: <AllArticles />,
      },
      {
        path: "article-details/:id",
        element: <ArticleDetails />,
      },
      {
        path: "premium-articles",
        element: <PremiumArticle />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path:'/dashboard',
        element : <Navigate to="/dashboard/analytics" replace/>
      },
      {
        path: "/dashboard/analytics",
        element: <ChildDashboard />,
      },
      {
        path:'/dashboard/all-user',
        element: <AllUser/>
      },
      {
        path:'/dashboard/all-articles',
        element: <AllArticlesDashboard/>
      },
      {
        path:'/dashboard/add-publisher',
        element: <AddPublisher/>
      }
    ],
  },
]);

export default AppRouter;
