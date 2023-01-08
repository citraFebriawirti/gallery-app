import { Routes, Route } from "react-router-dom";
import AddPhotos from "./Pages/AddPhotos";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="addPhotos" element={ <AddPhotos/>} />
      </Routes>
    </div>
  ) 
}

export default App;
