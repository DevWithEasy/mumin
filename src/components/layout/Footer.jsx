import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="h-12 bg-gray-100 space-x-2">
      <Link to='/salatur/topics'>Salatur Topics</Link>
      <Link to='/salah/topics'>Salah Topics</Link>
      <Link to='/jakah/topics'>Jakah Topics</Link>
      <Link to='/sawm/topics'>Sawm Topics</Link>
    </div>
  )
}
