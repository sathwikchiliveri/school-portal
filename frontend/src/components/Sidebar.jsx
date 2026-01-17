import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-8">School Portal</h1>

      <nav className="flex flex-col gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded bg-gray-700"
              : "px-4 py-2 rounded hover:bg-gray-700"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded bg-gray-700"
              : "px-4 py-2 rounded hover:bg-gray-700"
          }
        >
          Admin
        </NavLink>
      </nav>
    </aside>
  );
}
