import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Poll from '@material-ui/icons/Poll';
import TestPlanIcon from '@material-ui/icons/PlaylistAddCheck';
import ActiveLink from '../ActiveLink/ActiveLink';
import { I18n } from 'react-redux-i18n';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class mainListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    if (this.props.i18n.locale !== this.state.language) {
      this.setState({ language: this.props.i18n.locale });
    }
  }

  render() {
    return (<div>
      <style dangerouslySetInnerHTML={{
        __html: `
       .active, .active:hover {
        background-color: #E78095
      }
    `}} />
      <ActiveLink activeClassName='active' href='/home'>
        <ListItem button>
          <ListItemIcon>
            <TestPlanIcon />
          </ListItemIcon>
          <ListItemText primary={I18n.t('NAVBAR.HOME')} />
        </ListItem>
      </ActiveLink>
      <ActiveLink activeClassName='active' href='/about'>
        <ListItem button>
          <ListItemIcon>
            <Poll />
          </ListItemIcon>
          <ListItemText primary={I18n.t('NAVBAR.ABOUT')} />
        </ListItem>
      </ActiveLink>
    </div>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    i18n: state.i18n
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(mainListItems);
