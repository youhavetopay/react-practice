import React from 'react';

import Button from './Button';

function Dialog({ title, children, confirmText, cancelText }) {
  return (
    <div className="DarkBackground">
      <div className="DialogBlock">
        <h3>{title}</h3>
        <p>{children}</p>
        <div className="ButtonGroup">
          <Button color="gray">{cancelText}</Button>
          <Button color="gray">{confirmText}</Button>
        </div>
      </div>
    </div>
  );
}

Dialog.defalutProps = {
  cancelText: '확인',
  confirmText: '취소',
};

export default Dialog;
