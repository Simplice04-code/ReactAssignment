import { Link, Outlet } from "react-router-dom";

export default function Blog() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Blog</h1>

      <ul className="mt-4 space-y-2">
        <li>
          <Link to="1" className="text-blue-600 underline">
            Post 1
          </Link>
        </li>
        <li>
          <Link to="2" className="text-blue-600 underline">
            Post 2
          </Link>
        </li>
      </ul>

      {/* Child routes render here */}
      <div className="mt-6 border-t pt-4">
        <Outlet />
      </div>
    </div>
  );
}