import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-red-500 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">School Portal</h1>

      <nav className="space-y-2">
        <NavLink to="/" className="block px-4 py-2 hover:bg-red-600">
          Home
        </NavLink>
        <NavLink to="/admin" className="block px-4 py-2 hover:bg-red-600">
          Admin
        </NavLink>
      </nav>
    </aside>
  );
}
