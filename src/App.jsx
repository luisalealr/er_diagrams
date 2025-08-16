import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Layout } from "./pages/layout";
import Home from "./pages/home";
import Zologico from "./pages/zologico";
import Universidad from "./pages/universidad";
import Abogados from "./pages/abogados";
import Ecommerce from "./pages/ecommerce";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/zoologico" element={<Zologico />} />
          <Route path="/universidad" element={<Universidad />} />
          <Route path="/abogados" element={<Abogados />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
