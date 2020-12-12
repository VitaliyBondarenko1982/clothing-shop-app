import React from 'react';
import * as cx from 'classnames';
import './_menu.item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl}`,
      }}
      className={cx('menu-item', { large: !!size })}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;