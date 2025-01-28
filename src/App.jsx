import { BrowserRouter, Route, Routes } from "react-router"
import Splash from "./pages/Splash"
import Index from "./pages/Index"
import Salah from "./pages/Salah"
import AppLayout from "./components/layout/AppLayout"
import AdminLayout from "./components/layout/AdminLayout"
import CreateContent from "./pages/admin/CreateContent"

function App() {

  return (
    <BrowserRouter basename="/mumin/">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/html" element={<CreateContent />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Index />} />
          <Route path="salah" element={<Salah />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<CreateContent />} />
          <Route path="salah" element={<Salah />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
