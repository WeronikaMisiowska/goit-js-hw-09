const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';


const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
if (savedData) {
  form.elements.email.value = savedData.email || '';
  form.elements.message.value = savedData.message || '';
}

form.addEventListener('input', () => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const formData = { email, message };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  console.log({ email, message });
  
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
});
