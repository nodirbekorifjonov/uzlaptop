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

// layouts
import RootLayout from "./layouts/RootLayout";

// fonts
import "./fonts/font.css";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
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
