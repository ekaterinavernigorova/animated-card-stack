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
const CARD_GAP = 72;
let offset = 0;

// Create cards once
const cards = doctors.map((doctor) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${doctor.image}" alt="${doctor.name}" />
    <div class="info">
      <div class="name">${doctor.name}</div>
      <div class="role">${doctor.specialty}</div>
    </div>
  `;

  carousel.appendChild(card);
  return card;
});

function update() {
  cards.forEach((card, index) => {
    // continuous position
    const y =
      ((index * CARD_GAP + offset) % (CARD_GAP * cards.length)) -
      CARD_GAP;

    card.style.transform = `translateX(-50%) translateY(${y}px) scale(0.94)`;

    // middle detection (± half gap)
    if (Math.abs(y) < CARD_GAP / 2) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  offset += CARD_GAP;
}

// Initial layout
update();

// Animate
setInterval(update, 2500);
