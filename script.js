// Sélection des éléments HTML
const navLinks = document.querySelectorAll('nav a');
const articleLinks = document.querySelectorAll('article a');
const eventButton = document.querySelector('#eventButton');

// Fonction pour gérer le clic sur un lien de navigation
function handleNavLinkClick(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  const targetId = event.target.getAttribute('href'); // Récupère l'ID de la section cible
  const targetSection = document.querySelector(targetId); // Sélectionne la section cible

  // Fait défiler la page jusqu'à la section cible
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Fonction pour gérer le clic sur un lien d'article
function handleArticleLinkClick(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  // Ajoute ici le code pour afficher l'article complet (par exemple, dans une modal)
  alert('Article complet à afficher ici !');
}

// Fonction pour gérer le clic sur le bouton "Voir les événements"
function handleEventButtonClick() {
  // Ajoute ici le code pour afficher le calendrier des événements (par exemple, dans une modal)
  alert('Calendrier des événements à afficher ici !');
}

// Ajout des écouteurs d'événements
navLinks.forEach(link => {
  link.addEventListener('click', handleNavLinkClick);
});

articleLinks.forEach(link => {
  link.addEventListener('click', handleArticleLinkClick);
});

if (eventButton) {
  eventButton.addEventListener('click', handleEventButtonClick);
}