import "./App.css";

// react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import News from "./pages/News";
import Contact from "./pages/Contact";
import ShopDetails from "./pages/Shop/ShopDetails";

// layouts
import RootLayout from "./layouts/RootLayout";
import ShopLayout from "./layouts/ShopLayout";

// fonts
import "./fonts/font.css";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<ShopLayout />}>
          <Route index element={<Shop />} />
          <Route path=":id" element={<ShopDetails />} />
        </Route>

        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
