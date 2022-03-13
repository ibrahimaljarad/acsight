import "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/sms/list";
import AddSMS from "./components/sms/add/AddSMS";
import EditSms from "./components/sms/edit/EditSms";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/add" element={<AddSMS />}></Route>
        <Route path="/edit/:id" element={<EditSms />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
