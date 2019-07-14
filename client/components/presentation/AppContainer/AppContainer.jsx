import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  CssBaseline, Drawer,
  AppBar, Toolbar, List,
  Typography, Divider, IconButton
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from '../MenuList/MenuList';
import Link from 'next/link';
import Notifier from '../../containers/Notifier/Notifier';
import UserMenu from '../../containers/UserMenu/UserMenu';
import { AppContainerStyles } from './AppContainerStyles';
import { UserGetDetailAction } from '../../../redux/actions/Users/UserGetDetailAction';
import SessionDialog from '../../containers/User/SessionDialog';
import Loader from '../../containers/Loader/Loader';

//Main application master page
class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };

    if (!this.props.sysContext.user) {
      this.props.getSysContext();
    }
  }

  handleDrawerOpen = () => {
    const flag = !this.state.open;

    this.setState({ open: flag });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  toggleMenu() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Notifier />
        <Loader />
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, this.state.open)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              onClick={this.handleDrawerOpen}
              className={classes.appMenuIcon}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              <Link href="/">
                <img className={classes.imgSopra} alt="panda"
                  src={'../../static/images/panda.JPG'} />
              </Link>
            </Typography>
            <UserMenu />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
          </div>
          <Divider />
          <List><MenuList /></List>
        </Drawer>
        {
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {this.props.children}
          </main>
        }
        <SessionDialog />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeProject: state.activeProject,
    sysContext: state.sysContext
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSysContext: UserGetDetailAction

  }, dispatch);
}

AppContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,

  // Redux State
  activeProject: PropTypes.object,
  sysContext: PropTypes.object,

  // Redux Actions
  getSysContext: PropTypes.func.isRequired,
  getConnections: PropTypes.func

};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(AppContainerStyles)(AppContainer));