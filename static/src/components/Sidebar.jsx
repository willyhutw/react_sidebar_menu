import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import SidebarBrand from './sidebar/SidebarBrand.jsx';
import SidebarLink from './sidebar/SidebarLink.jsx';
import SidebarLinkCollapse from './sidebar/SidebarLinkCollapse.jsx';


class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      activeLink: '',
    };
  }

  componentWillMount() {
    this.setState({
      activeLink: this.props.location.pathname.split('/')[1],
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeLink: nextProps.location.pathname.split('/')[1],
    });
  }

  render() {
    return (
      <nav className={`sidebar ${this.props.sideBarCollapsed}`}>
        <SidebarBrand />
        <SidebarLink
          activeLink={this.state.activeLink}
          linkText="Dashboard"
          iconCode="fa-tachometer"
        />
        <SidebarLink
          activeLink={this.state.activeLink}
          linkText="Visualize"
          iconCode="fa-bar-chart"
        />
        <SidebarLink
          activeLink={this.state.activeLink}
          linkText="Metric"
          iconCode="fa-heartbeat"
        />
        <SidebarLink
          activeLink={this.state.activeLink}
          linkText="Log"
          iconCode="fa-file-text-o"
        />
        <SidebarLink
          activeLink={this.state.activeLink}
          linkText="Alarm"
          iconCode="fa-bell-o"
        />
        <SidebarLink
          activeLink={this.state.activeLink}
          linkText="Setting"
          iconCode="fa-cog"
        />
        <SidebarLinkCollapse
          linkText="Collapse"
          iconCode={this.props.sideBarCollapsedIconCode}
          toggleSidebar={this.props.toggleSidebar}
        />
      </nav>
    );
  }
}

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  location: React.PropTypes.object.isRequired,
  sideBarCollapsed: PropTypes.string.isRequired,
  sideBarCollapsedIconCode: PropTypes.string.isRequired,
};

export default withRouter(Sidebar);
