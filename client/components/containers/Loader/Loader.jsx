import React, { Component } from 'react';
import './LoaderStyles.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { I18n } from 'react-redux-i18n';
import { ChangeDocumentLoadAction } from '../../../redux/actions/Loader/LoaderShowAction';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad = () => {
    this.props.changeDocumentLoad(true);
  }

  render() {
    if (!this.props.documentLoad || this.props.loaderData > 0) {
      return (
        <div className={this.props.documentLoad ? "progressDisplay" : "progressDisplayOpaque"}>
          <div className="progressContainer">
            <div className="circular-loader"></div>
            <div className="progressText">{I18n.t('LOADER.LOADER_TEXT')}</div>
          </div>
        </div>
      );
    }

    return (
      <div></div>
    );
  }
}

Loader.propTypes = {
  // Redux State
  loaderData: PropTypes.number,
  documentLoad: PropTypes.bool,

  // Redux Actions
  changeDocumentLoad: PropTypes.func
};

function mapStateToProps(state) {
  return {
    loaderData: state.loaderVisible,
    documentLoad: state.documentLoad
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeDocumentLoad: ChangeDocumentLoadAction
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
