import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PhonebookMain from "./pages/PhonebookMain";
import PhonebookEdit from "./pages/PhonebookEdit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/listing" element={<PhonebookMain />} />
          <Route path="/create" element={<PhonebookEdit />} />
          <Route path="/update/:id" element={<PhonebookEdit />} />

          <Route path="*" element={<Navigate to="/listing" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
