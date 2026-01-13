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
const CENTER_Y = CARD_GAP;
const SCALE_MIN = 0.94;
const SCALE_MAX = 1.08;

let progress = 0;

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
    // base position per card
    let y = (index * CARD_GAP + progress) % (CARD_GAP * cards.length);

    // normalize so we always have: top / middle / bottom
    if (y < 0) y += CARD_GAP * cards.length;

    // shift up so middle sits at CENTER_Y
    y -= CARD_GAP;

    // scale interpolation based on distance to center
    const distance = Math.abs(y - CENTER_Y);
    const t = Math.min(distance / CARD_GAP, 1);
    const scale = SCALE_MAX - (SCALE_MAX - SCALE_MIN) * t;

    card.style.transform = `
      translateX(-50%)
      translateY(${y}px)
      scale(${scale})
    `;

    card.style.zIndex = Math.round(100 - distance);
  });

  progress += CARD_GAP;
}

// Initial paint
update();

// Animate
setInterval(update, 2500);
