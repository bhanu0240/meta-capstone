import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import UnderConstruction from "./components/pages/UnderConstruction";
import Bookings from "./components/pages/Bookings/index.tsx";
import pages from "./utils/pages.ts";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get("home").path} element={<Home />} />
          <Route
            path={pages.get("about").path}
            element={<UnderConstruction />}
          />
          <Route
            path={pages.get("menu").path}
            element={<UnderConstruction />}
          />
          <Route path={pages.get("bookings").path} element={<Bookings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
