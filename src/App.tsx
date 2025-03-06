import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Termspage from "./pages/Termspage";
import Privacypage from "./pages/Privacypage";
import { useAppContext } from "./context/AppContext";
import DialogCookies from "./components/custom/DialogCookies";

export default function App() {

  const { isCookiesDialogOpen } = useAppContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/terms-of-services" element={<Termspage />} />
          <Route path="/privacy-policy" element={<Privacypage />} />
        </Routes>
      </BrowserRouter>
      {isCookiesDialogOpen && <DialogCookies />}
    </>
  );
}