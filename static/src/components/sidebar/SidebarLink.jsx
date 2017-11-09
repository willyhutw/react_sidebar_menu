import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class SidebarLink extends PureComponent {
  render() {
    const activeLink = this.props.activeLink;
    const linkText = this.props.linkText;
    const linkTextLC = this.props.linkText.toLowerCase();
    const iconCode = this.props.iconCode;

    return (
      <div className={(activeLink === linkTextLC) ? 'sidebarLink active' : 'sidebarLink'}>
        <Link to={linkTextLC} className="sidebarLinkBlock">
          <div className="sidebarLinkIcon">
            <i className={`fa ${iconCode} fa-lg`} aria-hidden="true" />
          </div>
          <div className="sidebarLinkText">
            <span>{linkText}</span>
          </div>
        </Link>
      </div>
    );
  }
}

SidebarLink.propTypes = {
  activeLink: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  iconCode: PropTypes.string.isRequired,
};

export default SidebarLink;
