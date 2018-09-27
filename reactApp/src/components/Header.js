import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2> }
    </div>
  );
};

/* Passing in a default prop if one is not supplied */
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;