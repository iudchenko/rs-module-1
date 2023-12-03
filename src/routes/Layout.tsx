import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="container mx-auto p-5">
      <nav>
        <ul className="flex gap-8 text-white ">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/uncontrolled">Uncontrolled Form</Link>
          </li>
          <li>
            <Link to="/hook-form">Hook Form</Link>
          </li>
        </ul>
      </nav>

      <div className="container max-w-3xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
