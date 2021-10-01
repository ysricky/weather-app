// Function for loading animation
const showSpinner = () => {
  document.querySelector('.loader').classList.remove('hide');
};

const hideSpinner = () => {
  document.querySelector('.loader').classList.add('hide');
};

export { showSpinner, hideSpinner };
