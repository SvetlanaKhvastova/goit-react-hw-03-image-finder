import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClickBtn }) => {
  return (
    <button type="button" className={s.Button} onClick={onClickBtn}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClickBtn: PropTypes.func.isRequired,
};

export default Button;
