import React, { Component } from 'react';
import Sidebar from './Sidebar.jsx';
import Content from './Content.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideBarCollapsed: '',
      brandText: 'BrandText',
      sideBarCollapsedIconCode: 'fa-chevron-circle-left',
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar(event) {
    event.preventDefault();
    if (!this.state.sideBarCollapsed) {
      this.setState({
        sideBarCollapsed: 'sibarCollapsead',
        brandText: '',
        sideBarCollapsedIconCode: 'fa-chevron-circle-right',
      });
    } else {
      this.setState({
        sideBarCollapsed: '',
        brandText: 'BrandText',
        sideBarCollapsedIconCode: 'fa-chevron-circle-left',
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar
          toggleSidebar={this.toggleSidebar}
          sideBarCollapsed={this.state.sideBarCollapsed}
          brandText={this.state.brandText}
          sideBarCollapsedIconCode={this.state.sideBarCollapsedIconCode}
        />
        <Content
          sideBarCollapsed={this.state.sideBarCollapsed}
        />
      </div>
    );
  }
}

export default App;
