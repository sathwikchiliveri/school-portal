import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const base =
    "block px-4 py-2 rounded no-underline text-gray-700 hover:bg-gray-200 hover:text-black";
  const active = "bg-gray-300 font-semibold";

  return (
    <aside className="w-64 border-r p-4">
      <h1 className="text-2xl font-bold mb-6">School Portal</h1>

      <nav className="space-y-2">
        <NavLink to="/" end className={({ isActive }) => `${base} ${isActive ? active : ""}`}>Home</NavLink>
        <NavLink to="/admin" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>Admin</NavLink>
        <NavLink to="/teacher" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>Teacher</NavLink>
        <NavLink to="/student" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>Student</NavLink>
        <NavLink to="/parent" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>Parent</NavLink>
      </nav>
    </aside>
  );
}