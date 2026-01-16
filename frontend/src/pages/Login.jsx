export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="w-full max-w-md bg-white p-6 rounded shadow space-y-4">
        <h1 className="text-2xl font-bold text-center">School Portal Login</h1>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter your password"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Role</label>
          <select className="w-full mt-1 p-2 border rounded">
            <option>Select role</option>
            <option>Admin</option>
            <option>Teacher</option>
            <option>Student</option>
            <option>Parent</option>
          </select>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}
