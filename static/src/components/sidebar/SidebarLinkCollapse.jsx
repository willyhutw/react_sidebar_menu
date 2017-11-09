import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SidebarLinkCollapse extends PureComponent {
  render() {
    const toggleSidebar = this.props.toggleSidebar;
    const iconCode = this.props.iconCode;
    const linkText = this.props.linkText;

    return (
      <div className="sidebarLink footer">
        <a className="sidebarLinkBlock" href="#toggleSidebar" onClick={toggleSidebar}>
          <div className="sidebarLinkIcon">
            <i className={`fa ${iconCode} fa-lg`} aria-hidden="true" />
          </div>
          <div className="sidebarLinkText">
            <span>{linkText}</span>
          </div>
        </a>
      </div>
    );
  }
}

SidebarLinkCollapse.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  linkText: PropTypes.string.isRequired,
  iconCode: PropTypes.string.isRequired,
};

export default SidebarLinkCollapse;
