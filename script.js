const doctors = [
  {
    name: "Dr Shim Ching",
    specialty: "Certified Plastic Surgeon",
    image: "https://images.unsplash.com/photo-1755189118414-14c8dacdb082?q=80&w=300"
  },
  {
    name: "Dr Gary Linkov",
    specialty: "Hair & Lip Aesthetic Specialist",
    image: "https://images.unsplash.com/photo-1762237798212-bcc000c00891?q=80&w=300"
  },
  {
    name: "Jonathan Zelken, MD",
    specialty: "Facial Rejuvenation Expert",
    image: "https://images.unsplash.com/photo-1758573467030-52481ea92007?q=80&w=300"
  }
];

const carousel = document.getElementById("carousel");
let currentIndex = 0;

function renderCards() {
  carousel.innerHTML = "";

  doctors.forEach((doctor, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const position =
      (index - currentIndex + doctors.length) % doctors.length;

    card.style.top = `${position * 72}px`;

    if (position === 1) {
      card.classList.add("active");
    }

    card.innerHTML = `
      <img src="${doctor.image}" alt="${doctor.name}" />
      <div class="info">
        <div class="name">${doctor.name}</div>
        <div class="role">${doctor.specialty}</div>
      </div>
    `;

    carousel.appendChild(card);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % doctors.length;
  renderCards();
}

renderCards();
setInterval(nextSlide, 2500);
