import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className='' style={{ height: '100vh' }}>
      <div onClick={(e) => e.stopPropagation()} className='m-auto bg-light'>
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-title'>
              <h3 className='pl-1 pt-1'>{props.title}</h3>
            </div>
            <div className='modal-body mb-3'>{props.content}</div>
            <div className='modal-footer'>{props.actions}</div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
