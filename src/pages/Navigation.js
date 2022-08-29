import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="linkWrapper">
        <NavLink className="navlink" to="/">
          UseInput
        </NavLink>
        <NavLink className="navlink" to="/usehover">
          UseHover
        </NavLink>
        <NavLink className="navlink" to="/usescroll">
          UseScroll
        </NavLink>
        <NavLink className="navlink" to="/usedebounce">
          UseDebounce
        </NavLink>
        <NavLink className="navlink" to="/usestate">
          UseState
        </NavLink>
        <NavLink className="navlink" to="/usememo">
          UseMemo
        </NavLink>
        <NavLink className="navlink" to="/usecallback">
          UseCallback
        </NavLink>
        <NavLink className="navlink" to="/usefetch">
          UseFetch
        </NavLink>
        <NavLink className="navlink" to="/usereducer">
          UseReducer
        </NavLink>
        <NavLink className="navlink" to="/userequest">
          UseRequest
        </NavLink>
      </div>
    </nav>
  );
};
