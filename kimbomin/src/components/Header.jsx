import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = ({ isActive }) =>
    isActive
      ? "bg-blue-500 text-white px-4 py-2 rounded"
      : "px-4 py-2";

  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold mb-4">
        생활 정보 대시보드
      </h1>

      <nav className="flex gap-3">
        <NavLink to="/" className={activeStyle}>
          홈
        </NavLink>

        <NavLink to="/weather" className={activeStyle}>
          날씨
        </NavLink>

        <NavLink to="/air" className={activeStyle}>
          미세먼지
        </NavLink>

        <NavLink to="/life" className={activeStyle}>
          생활정보
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
