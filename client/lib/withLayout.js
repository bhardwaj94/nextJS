import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
/* spell-checker: disable */
import NProgress from 'nprogress';
/* spell-checker: enable */
import { MuiThemeProvider } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from '../redux/store/store';
import '../../static/scss/fonts.scss';
import AppContainer from '../components/presentation/AppContainer/AppContainer';
import '../../static/styles/styles.css';
import getContext from './context';
import JssProvider from 'react-jss/lib/JssProvider';

Router.onRouteChangeStart = NProgress.start;

Router.onRouteChangeComplete = NProgress.done;

Router.onRouteChangeError = NProgress.done;

export default function withLayout(BaseComponent) {
  class App extends React.Component {
    constructor(props) {
      super(props);
      const { pageContext } = this.props;

      this.pageContext = pageContext || getContext();
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side');

      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <Provider store={store}>
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            <MuiThemeProvider
              theme={this.pageContext.SopraSteriaTheme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              <CssBaseline />
              <div>
                <SnackbarProvider
                  iconVariant={{}}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  action={[<IconButton color="secondary" key="close-button" size="small">
                    <CloseIcon />
                  </IconButton>
                  ]} maxSnack={3}>
                  <AppContainer>
                    <BaseComponent {...this.props} />
                  </AppContainer>
                </SnackbarProvider>
              </div>
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      );
    }
  }

  App.propTypes = {
    pageContext: PropTypes.object
  };

  App.defaultProps = {
    pageContext: null
  };

  App.getInitialProps = ctx => {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }

    return {};
  };

  return App;
}
