import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div
        className="h-screen w-full"
    >
        <Header/>
        <div
          className="h-[calc(100%-96px)] overflow-y-auto p-2"
        >
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
