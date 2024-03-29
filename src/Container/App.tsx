import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "../Components/Layout";
import { Home, MenuItemDetails, NotFound } from "../Pages";

function App() {
  return (
    <div className="">
      <Header />
      <div className="pb-5 ">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
