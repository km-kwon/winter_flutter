import Main from "./pages/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin";
import List from "./pages/list";
import Compare from "./pages/compare";
import Lecture from "./pages/lecture";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/compare" element={<Compare />}></Route>
        <Route path="/list/:index" element={<List />}></Route>
        <Route path="/lecture/:idx" element={<Lecture />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
