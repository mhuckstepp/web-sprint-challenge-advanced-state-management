import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      {/* Changed from a to button to remove console warning  */}
      <button href="#" className="navbar-brand">
        Smurf Village Database
      </button>
    </nav>
  );
};

export default Header;
