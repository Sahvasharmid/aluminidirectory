import React from 'react';

const BootstrapModal = ({ id, title, children, onClose, zIndex = 1100 }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ zIndex: zIndex }}
      >
        <div
          className="modal-content"
          style={{ backgroundColor: 'var(--footer-color)' }}
        >
          <div
            className="modal-header"
            style={{ borderBottom: 'none', padding: '0.5rem 1rem' }}
          >
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <h5 className="text-center pt-3">{title}</h5>
          <div className="modal-body" style={{ padding: '1rem' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootstrapModal;
