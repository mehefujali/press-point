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
import AdminRoute from "../Private/AdminRoute";
import Error from "../Pages/Error/Error";
import MyArticles from "../Pages/MyArticles/MyArticles";
import MyProfile from "../Pages/MyProfile/MyProfile";
import Subscription from "../Pages/Subscription/Subscription";

const AppRouter = createBrowserRouter([
  {
    errorElement: <Error />,
  },
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
        element: (
          <PrivateRoute>
            <ArticleDetails />,
          </PrivateRoute>
        ),
      },
      {
        path: "premium-articles",
        element: (
          <PrivateRoute>
            <PremiumArticle />,
          </PrivateRoute>
        ),
      },
      {
        path: "my-articles",
        element: <PrivateRoute><MyArticles/></PrivateRoute>,
      },
      {
        path:'my-profile',
        element: <MyProfile/>
      },
      {
        path:'subscription',
        element: <Subscription/>
      }
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/dashboard/analytics" replace />,
      },
      {
        path: "/dashboard/analytics",
        element: (
          <AdminRoute>
            <ChildDashboard />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-user",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-articles",
        element: (
          <AdminRoute>
            <AllArticlesDashboard />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-publisher",
        element: (
          <AdminRoute>
            <AddPublisher />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default AppRouter;
