import { createBrowserRouter } from "react-router";
import WelcomeView from "@/reactComponents/WelcomeView";
import Test from "@/reactComponents/Test";
import Result from "@/reactComponents/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeView />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

export default router;
