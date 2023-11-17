import Main from "./pages/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin";
import Compare from "./pages/compare";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>

        <Route path="/compare/:index" element={<Compare />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
