import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


const Wellcome = () => (
  <h2>Wellcome</h2>
);

const Dashboard = () => (
  <h2>Dashboard</h2>
);

const Visualize = () => (
  <h2>Visualize</h2>
);

const Metric = () => (
  <h2>Metric</h2>
);

const Log = () => (
  <h2>Log</h2>
);

const Alarm = () => (
  <h2>Alarm</h2>
);

const Setting = () => (
  <h2>Setting</h2>
);

class Content extends Component {
  render() {
    return (
      <div className={`content ${this.props.sideBarCollapsed}`}>
        <Switch>
          <Route exact path="/" component={Wellcome} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/visualize" component={Visualize} />
          <Route path="/metric" component={Metric} />
          <Route path="/log" component={Log} />
          <Route path="/alarm" component={Alarm} />
          <Route path="/setting" component={Setting} />
        </Switch>
      </div>
    );
  }
}

Content.propTypes = {
  sideBarCollapsed: PropTypes.string.isRequired,
};

export default Content;
