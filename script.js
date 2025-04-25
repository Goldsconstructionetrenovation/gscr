// Validation du formulaire de contact
document.querySelector('form').addEventListener('submit', function(e) {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  
  if (!name || !email || !message) {
    alert('Tous les champs doivent être remplis !');
    e.preventDefault(); // Empêche l'envoi du formulaire
  } else {
    alert('Votre message a été envoyé avec succès !');
  }
});

// Fonction pour le menu mobile (Menu hamburger)
const menuToggle = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
  menuNav.classList.toggle('active');
});

// Affichage dynamique des avis clients (avec un tableau simulé)
const reviews = [
  { name: "Client 1", rating: 5, comment: "Excellente prestation!" },
  { name: "Client 2", rating: 4, comment: "Très satisfait, mais quelques petits retards." },
  { name: "Client 3", rating: 5, comment: "Travail impeccable, je recommande !" }
];

function loadReviews() {
  const reviewsSection = document.querySelector('#reviews');
  reviews.forEach(review => {
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.innerHTML = `
      <h4>${review.name} - ${'★'.repeat(review.rating)}</h4>
      <p>${review.comment}</p>
    `;
    reviewsSection.appendChild(reviewDiv);
  });
}

// Charger les avis à l'initialisation de la page
window.onload = function() {
  loadReviews();
};
