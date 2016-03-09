import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { switchPage } from '../actions/actions';

class MainPage extends Component {
  handleSwitchPage(event) {
    event.preventDefault();
    this.props.switchPage('/other');
  }

  render() {
    return (
      <div>
        <p>This is Main page</p>
        <a href="#" onClick={this.handleSwitchPage.bind(this)}>Go to other page</a>
      </div>
    );
  }
}

MainPage.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => (bindActionCreators({
  switchPage
}, dispatch));

export default connect(null, mapDispatchToProps)(MainPage);
