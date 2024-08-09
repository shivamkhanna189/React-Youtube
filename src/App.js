import "./App.css";
import Head from "./component/Head";
import Body from "./component/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import WatchPage from "./component/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body></Body>,
      children: [
        {
          path: "",
          element: <MainContainer></MainContainer>,
        },
        {
          path: "watch",
          element: <WatchPage></WatchPage>,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <Head></Head>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
