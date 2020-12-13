import React from 'react';
import { withRouter } from 'react-router-dom';

import * as cx from 'classnames';
import './_menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={cx('menu-item', { large: !!size })}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      role="presentation"
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl}`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
