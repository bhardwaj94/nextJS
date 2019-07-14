import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText } from '@material-ui/core';
import { I18n } from 'react-redux-i18n';
import { ShowSessionWarningAction } from '../../../redux/actions/Users/ShowSessionWarningAction';
import { UserGetDetailAction } from '../../../redux/actions/Users/UserGetDetailAction';

class SessionDialog extends Component {
  constructor(props) {
    super(props);
  }

  handleOk = () => {
    this.props.getUserDetail();
    this.props.showSessionWarning(false);
  }

  render() {
    return (
      <>
        <Dialog
          open={this.props.isShowSessionWarning}
          maxWidth="sm"
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">{I18n.t('MISC.WARNING')}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {I18n.t('MISC.SESSION_CONTENT')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleOk} color="primary" autoFocus>
              {I18n.t('ACTIONS.CONTINUE')}
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isShowSessionWarning: state.isShowSessionWarning
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    showSessionWarning: ShowSessionWarningAction,
    getUserDetail: UserGetDetailAction
  }, dispatch);
}

SessionDialog.propTypes = {
  // Redux State
  isShowSessionWarning: PropTypes.bool,

  // Redux Actions
  showSessionWarning: PropTypes.func,
  getUserDetail: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionDialog);