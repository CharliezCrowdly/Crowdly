import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useAppContext } from "../context/appContext";
const NavLinks = ({ toggleSidebar }) => {
  const { user } = useAppContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={id === 2 ? `/user/profile/${user._id}` : path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            <span>{text}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
