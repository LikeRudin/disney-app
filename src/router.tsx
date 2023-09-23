import { createBrowserRouter } from "react-router-dom";
import { Detail } from "./routes/detail";
import {App} from "./App"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path: "/character/:id",
    element: <Detail/>
  }
]);

export default router;
