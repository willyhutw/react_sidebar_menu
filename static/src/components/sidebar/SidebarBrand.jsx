import React from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../images/nav_logo.png';


const SidebarBrand = () => (
  <div className="sidebarBrand">
    <Link to="/" className="sidebarBrandBlock">
      <div className="sidebarBrandLogo">
        <img src={`static/${navLogo}`} alt="navLogo" width="40" height="40" />
      </div>
      <div className="sidebarBrandText">
        <span>BrandText</span>
      </div>
    </Link>
  </div>
);

export default SidebarBrand;
