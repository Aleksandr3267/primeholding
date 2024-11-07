import { toast } from 'react-toastify';

let loadingToast = null;

export const showToast = (render, type, isLoading, closeButton, autoClose, progressStyle) => {
  return toast.update(loadingToast, {
    render,
    type,
    isLoading,
    closeButton,
    autoClose,
    progressStyle,
  });
};

export const showLoadingToast = () => {
  loadingToast = toast.loading('Loading...');
  return loadingToast;
};

export const showSuccessToast = (message) => {
  showToast(message, 'success', false, true, 1000, {
    backgroundColor: '#24d17c',
    height: '2px',
  });
};

export const showErrorToast = (error) => {
  const errorMessage = error.response
    ? error.response.data.Detail || error.response.data.errors
    : error.message;

  const displayError = typeof error === 'string' ? error : errorMessage;

  showToast(displayError, 'error', false, true, 2000, {
    backgroundColor: '#e53835',
    height: '2px',
  });
};

export const showInfoToast = (message) => {
  showToast(message, 'info', false, true, 2000, {
    backgroundColor: '#2196f3',
    height: '2px',
  });
};

export const showSingleInfoToast = (message) => {
  toast.info(message, {
    className: 'rounded-xl',
    progressStyle: { backgroundColor: '#2196f3', height: '2px' },
  });
};

export const showSingleSuccessToast = (message) => {
  toast.success(message, {
    className: 'rounded-xl',
    progressStyle: { backgroundColor: '#24d17c', height: '2px' },
  });
};

export const showSingleErrorToast = (message) => {
  console.log(message);
  toast.error(message, {
    className: 'rounded-xl',
    progressStyle: { backgroundColor: '#e53835', height: '2px' },
  });
};
