import "./App.css";
import { Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path="/create/step1" element={<Step1 />}/>
        <Route path="/create/step2" element={<Step2 />}/>
        <Route path="/create/step3" element={<Step3 />}/>
      </Routes>
    </>
  );
}

export default App;
