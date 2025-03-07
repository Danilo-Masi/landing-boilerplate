import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
import DialogCookies from "./components/custom/DialogCookies";
import Fallback from "./components/fallback/Fallback";
// Lazy loading delle pagine
const Homepage = lazy(() => import("./pages/Homepage"));
const Termspage = lazy(() => import("./pages/Termspage"));
const Privacypage = lazy(() => import("./pages/Privacypage"));

function AppRoutes() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/terms-of-services" element={<Termspage />} />
        <Route path="/privacy-policy" element={<Privacypage />} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  const { isCookiesDialogOpen } = useAppContext();
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      {isCookiesDialogOpen && <DialogCookies />}
    </>
  );
}