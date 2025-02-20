import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Layout({children}) {
    const [theme, setTheme] = useState('☀');
    const [dropDrownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const toggleTheme = () => {
        setTheme(theme === "☀" ? "🌙" : "☀");
      };

    const toggleDropdown = () => {
        setDropdownVisible((prev) => !prev);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    };

  return (
      <div className={`app-container ${theme}`}>
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">My App</h2>
        <nav className="menu">
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/settings")}>Settings</button>
          <button onClick={() => navigate('/roles')}>Roles</button>
        </nav>
        <button className="flex items-center space-x-2 text-white focus:outline-none" onClick={toggleDropdown}>
              User
              {/* {data.aud} */}
        </button>
        {dropDrownVisible && (<button onClick={handleLogout} className="logout-btn">
                Logout
        </button>)}
        
      </div>

     {/* Header */}
      <div className="main-layout">
        <header className="header">
          <h2>Welcome</h2>
          <div style={{marginRight: '15px'}}>
            <div className="theme-toggle">
            <button onClick={toggleTheme} className="theme-btn">
             {theme === "☀" ? "🌙" : "☀"}
            </button>
          </div>
          </div>
        </header>

        {/* Main Content */}
        
        <main className="content">
            {children}
        </main>
      </div>
    </div>
  )
}

export default Layout