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
const SCALE_MIN = 0.94;
const SCALE_MAX = 1.08;

// Each card starts in its own lane
let positions = [0, CARD_GAP, CARD_GAP * 2];

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
  positions = positions.map((y) => {
    const nextY = y + CARD_GAP;
    return nextY > CARD_GAP * 2 ? 0 : nextY;
  });

  cards.forEach((card, index) => {
    const y = positions[index];

    // scale interpolation
    const distanceFromCenter = Math.abs(y - CARD_GAP);
    const t = Math.min(distanceFromCenter / CARD_GAP, 1);
    const scale = SCALE_MAX - (SCALE_MAX - SCALE_MIN) * t;

    card.style.transform = `
      translateX(-50%)
      translateY(${y}px)
      scale(${scale})
    `;

    card.style.zIndex = Math.round(100 - distanceFromCenter);
  });
}

// Initial render
update();

// Animate
setInterval(update, 2500);
