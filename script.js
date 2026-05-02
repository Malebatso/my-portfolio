const submitBtn = document.getElementById('submit-btn');
const closeBtn = document.getElementById('close-popup');
const popup = document.getElementById('popup');
const list = document.getElementById('recommendation-list');
const messageInput = document.getElementById('new-recommendation');
const nameInput = document.getElementById('recommender-name');

submitBtn.addEventListener('click', () => {
  const message = messageInput.value.trim();
  const name = nameInput.value.trim();

  if (!message) {
    alert('Please enter a recommendation message before submitting.');
    return;
  }

  const quote = document.createElement('blockquote');
  quote.textContent = `“${message}”${name ? ` — ${name}` : ''}`;
  list.appendChild(quote);

  messageInput.value = '';
  nameInput.value = '';
  popup.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});