import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar({ searchTerm }) {
  const navigate=useNavigate()
  const handleClick=()=>{
   
    localStorage.clear();
    navigate("/")

    window.location.reload();
    
}


  return (
    <header>
      <div className="navbar">
      <div class="navbar-left">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcUjuHEMI2evqQCycvQF72ZlRZ_0eu32ZZsNKML5Kk&s"
          alt="Netflix Logo"
        />
      </div>
        <div className="navbar-right">
          <input
            type="text"
            id="search-button"
            className="searchbutton"
            placeholder="Search your movie here"

            onChange={(e) => searchTerm(e.target.value)}
          >
          </input>
          <img
            className="avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="Avatar"
           onClick={handleClick}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
