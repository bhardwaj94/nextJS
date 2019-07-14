import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AccountCircle, Language, SettingsInputComponent as ConnectionIcon, ExitToApp, AssignmentInd as ProfileIcon, Extension } from '@material-ui/icons';
import { IconButton, Menu, Tooltip, MenuItem, Typography, Grid } from '@material-ui/core';
import LanguageSelection from '../LanguageDialog/LanguageDialog';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import { LanguageAction } from '../../../redux/actions/i18n/LanguageAction';
import store from '../../../redux/store/store';
import Translation from '../../../i18n/index';
import { I18n } from 'react-redux-i18n';
import { userMenuStyles } from './UserMenuStyles';
import { Router } from '../../../lib/routes';

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLang: false,
      showMenu: false,
      showConnection: false,
      showProject: false,
      project: '',
      subMenuExpanded: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.language.iso !== this.props.language.iso) {
      this.props.setLocale(this.props.language.iso);
    }
  }

  lang = () => {
    if (!this.state.showLang) {
      this.setState({ showLang: true, subMenuExpanded: true });
    }
  }

  langMouseOver = () => {
    if (!this.state.showLang && this.state.subMenuExpanded) {
      this.setState({ showLang: true, subMenuExpanded: false, showMenu: true });
    }
  }

  connectionList = () => {
    if (!this.state.showConnection) {
      this.setState({ showConnection: true, subMenuExpanded: true });
    }
  }

  connectionListMouseOver = () => {
    if (!this.state.showConnection && this.state.subMenuExpanded) {
      this.setState({ showConnection: true, subMenuExpanded: false, showMenu: true });
    }
  }

  onProjectClick = () => {
    if (!this.state.showProject) {
      this.setState({ showProject: true, subMenuExpanded: true });
    }
  }

  onProjectMouseOver = () => {
    if (!this.state.showProject && this.state.subMenuExpanded) {
      this.setState({ showProject: true, subMenuExpanded: false, showMenu: true });
    }
  }

  componentWillMount() {
    syncTranslationWithStore(store);
    this.props.loadTranslations(Translation);
    this.props.setLocale(this.props.language.iso);
    this.props.languageChange(this.props.language);
  }

  handleNestedClose = () => {
    if (this.state.showLang) {
      this.setState({ showLang: false, showMenu: false });
    }
    else if (this.state.showProject) {
      this.setState({ showProject: false, showMenu: false });
    }
    else if (this.state.showConnection) {
      this.setState({ showConnection: false, showMenu: false });
    }

    this.setState({ subMenuExpanded: true });
  }

  onProjectChange = (event, selectedProject) => {
    this.setState({ showMenu: false, showProject: false, project: selectedProject.name, subMenuExpanded: false });
  }

  onLanguageChange = lang => {
    this.setState({ showLang: false, showMenu: false, subMenuExpanded: false });
  }

  onLogoutClick = () => {
    Router.pushRoute('logout');
  }

  onMouseOverLogout = () => {
    if (this.state.subMenuExpanded) {
      this.setState({ subMenuExpanded: false });
      Router.pushRoute('logout');
    }
  }

  onConnectionSelect = () => {
    this.setState({ showConnection: false, showMenu: false, subMenuExpanded: false });
  }

  render() {
    return (
      <WithState>
        {({ anchorEl, updateAnchorEl }) => {
          const open = Boolean(anchorEl);

          const handleClose = () => {
            updateAnchorEl(null);
          };

          return (
            <React.Fragment>
              {/* <div style={{ ...userMenuStyles.infoDiv }}>
                <Grid
                  container
                  direction="column"
                  justify="space-evenly"
                  alignItems="flex-end"
                >
                  <Grid style={{ ...userMenuStyles.projectInfo }}>
                    <Typography
                      style={{ ...userMenuStyles.projRoleSeparator }}
                    >|
                    </Typography>
                    <Tooltip disableFocusListener={true} title={I18n.t('USER_MENU.ROLE')}>
                      <Typography
                        style={{ ...userMenuStyles.roleTypography }}
                      >{(this.props.sysContext.user && this.props.activeProject.name) && this.props.sysContext.user.roles[this.props.activeProject.id].roles[0]}
                      </Typography>
                    </Tooltip>
                  </Grid>
                </Grid>
              </div> */}
              <IconButton onClick={e => {
                updateAnchorEl(e.currentTarget);
                this.setState({ showMenu: true, subMenuExpanded: false });
              }} style={userMenuStyles.iconButton}>
                <AccountCircle style={userMenuStyles.accountCircle} />
              </IconButton>
              <Menu style={userMenuStyles.menu} anchorEl={anchorEl} open={open && this.state.showMenu} onClose={handleClose}>
                <MenuItem >
                  <ProfileIcon style={userMenuStyles.assignment} />
                  {
                    this.props.sysContext.user && `@${this.props.sysContext.user.name}`
                  }
                </MenuItem>
                <MenuItem onClick={this.lang} onMouseOver={this.langMouseOver}>
                  <Language style={userMenuStyles.language} />
                  {I18n.t('USER_MENU.LANGUAGE')}
                </MenuItem>
                <MenuItem onClick={this.onLogoutClick} onMouseOver={this.onMouseOverLogout}>
                  <ExitToApp style={userMenuStyles.exitToApp} />
                  {I18n.t('USER_MENU.LOGOUT')}
                </MenuItem>
              </Menu>
              {
                this.state.showLang &&
                <Menu style={userMenuStyles.extendedMenu1} anchorEl={anchorEl} open={this.state.showLang} onClose={this.handleNestedClose}>
                  <LanguageSelection onSelect={lang => this.onLanguageChange(lang)} />
                </Menu>
              }
              {
                this.state.showProject &&
                <Menu style={userMenuStyles.extendedMenu2} anchorEl={anchorEl} open={this.state.showProject} onClose={this.handleNestedClose}>
                  {
                    this.props.sysContext.user.projects.map(item => <MenuItem key={item.id} onClick={e => this.onProjectChange(e, item)}>{item.name}</MenuItem>)
                  }
                </Menu>
              }
              {
                this.state.showConnection &&
                <Menu style={userMenuStyles.extendedMenu3} anchorEl={anchorEl} open={this.state.showConnection} onClose={this.handleNestedClose}>
                  <ConnectionActive onSelect={this.onConnectionSelect} />
                </Menu>
              }
            </React.Fragment>
          );
        }}
      </WithState>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
    activeConnection: state.activeConnection,
    sysContext: state.sysContext,
    activeProject: state.activeProject
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setLocale: setLocale,
    languageChange: LanguageAction,
    loadTranslations: loadTranslations
  }, dispatch);
}

UserMenu.propTypes = {
  // Redux State
  language: PropTypes.string,
  activeConnection: PropTypes.object,
  sysContext: PropTypes.object,
  activeProject: PropTypes.object,

  // Redux Actions
  setLocale: PropTypes.func,
  ConnectionGetAction: PropTypes.func,
  languageChange: PropTypes.func,
  loadTranslations: PropTypes.func,
  setConnectionActive: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);