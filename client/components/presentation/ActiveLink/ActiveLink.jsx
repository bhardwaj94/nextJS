import { withRouter } from 'next/router';
import { Link } from '../../../lib/routes';
import React, { Children } from 'react';
import PropTypes from 'prop-types';

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);

  let className = child.props.className || null;

  let isActive = false;

  let routerPathName = router.pathname;

  if (routerPathName === '/' || routerPathName === '') {
    routerPathName = '/plans';
  }

  const indexHref = routerPathName.indexOf(props.href);

  if (indexHref === 0) {
    if (['/', '?', '#', undefined].includes(routerPathName[props.href.length])) {
      isActive = true;
    }
  }

  if (isActive && props.activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

ActiveLink.propTypes = {
  router: PropTypes.object,
  children: PropTypes.object,
  activeClassName: PropTypes.string,
  href: PropTypes.string
};

export default withRouter(ActiveLink);