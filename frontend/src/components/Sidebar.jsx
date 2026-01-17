import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">School Portal</h1>

      <nav className="flex flex-col gap-3">
        <NavLink to="/" className="hover:bg-gray-700 px-3 py-2 rounded">
          Home
        </NavLink>
        <NavLink to="/admin" className="hover:bg-gray-700 px-3 py-2 rounded">
          Admin
        </NavLink>
      </nav>
    </aside>
  );
}
