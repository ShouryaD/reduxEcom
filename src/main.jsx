import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import ViewProduct from "./components/ViewProduct.jsx";
import ContextProvider from "./Context/ContextProvider.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/view" element={<ViewProduct />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ContextProvider>
  </Provider>
);
