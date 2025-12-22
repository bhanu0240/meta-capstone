import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import UnderConstruction from "./components/pages/UnderConstruction";
import pages from "./utils/pages.ts";
import "./App.css";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
