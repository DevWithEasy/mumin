import { BrowserRouter, Route, Routes } from "react-router"
import AdminLayout from "./components/layout/AdminLayout"
import AppLayout from "./components/layout/AppLayout"
import CreateContent from "./pages/admin/CreateContent"
import Index from "./pages/Index"
import JsonView from "./pages/JsonView"
import Salah from "./pages/Salah"
import Splash from "./pages/Splash"
import SalaturTopics from "./pages/salah/SalaturTopics"
import SalaturUpdate from "./pages/salah/SalaturUpdate"
import SalahTopics from "./pages/salah/SalahTopics"
import SalahUpdate from "./pages/salah/SalahUpdate"

function App() {

  return (
    <BrowserRouter basename="/mumin/">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="salatur/topics" element={<SalaturTopics />} />
        <Route path="salatur/topics/:cat_id/:id" element={<SalaturUpdate />} />
        <Route path="salah/topics" element={<SalahTopics />} />
        <Route path="salah/topics/:cat_id/:id" element={<SalahUpdate />} />
        <Route path="json" element={<JsonView />} />
        <Route path="html" element={<CreateContent />} />
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
