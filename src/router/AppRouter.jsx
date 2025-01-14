import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";


const AppRouter = createBrowserRouter([
      {
            path:'/',
            element: <Main/>
      }
])

export default AppRouter;