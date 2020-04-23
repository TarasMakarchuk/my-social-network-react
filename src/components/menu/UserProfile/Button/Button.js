import React from 'react';
import styles from './Button.module.scss';

export const Button = props => {
  return (
    <button
      className={`${styles.Button} ` + `btn btn-secondary btn-sm`}
      onClick={props.onClick}
    >
      {props.iconLeft} {props.name} {props.iconRight}
    </button>
  );
};
