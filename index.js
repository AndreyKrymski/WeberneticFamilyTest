const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('show');
  }, 10); 
});

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove('show');
  setTimeout(() => {
    modalOverlay.style.display = 'none';
  }, 300);
}