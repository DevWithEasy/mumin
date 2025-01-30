import { BrowserRouter, Route, Routes } from "react-router"
import Splash from "./pages/Splash"
import Index from "./pages/Index"
import Salah from "./pages/Salah"
import AppLayout from "./components/layout/AppLayout"
import AdminLayout from "./components/layout/AdminLayout"
import CreateContent from "./pages/admin/CreateContent"
import Topics from "./pages/salah/Topics"
import TopicUpdate from "./pages/salah/Update"
import JsonView from "./pages/JsonView"
import AppTopics from "./pages/salah/app/Topics"
import AppTopicUpdate from "./pages/salah/app/Update"

function App() {

  return (
    <BrowserRouter basename="/mumin/">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="topics" element={<Topics />} />
        <Route path="topics/:id" element={<TopicUpdate />} />
        <Route path="topics/app" element={<AppTopics />} />
        <Route path="topics/app/:id" element={<AppTopicUpdate />} />
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
