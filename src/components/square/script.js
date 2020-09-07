const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 11; i++) {
const li = document.createElement("li");
const random = (min, max) => Math.random() * (max - min) + min;
const size = Math.floor(random(10, 100));
const position = random(1, 70);
const radius = random(20, 0.1);
const duration = random(24, 12);

li.style.width = `${size}px`;
li.style.height = `${size}px`;
li.style.bottom = `+${size}px`;
li.style.borderRadius = `${radius}px`;
li.style.left = `${position}%`;
li.style.animationDuration = `${duration}s`;
li.style.animationTimingFunction = `
  cubic-bezier(${Math.random()},
  ${Math.random()},
  ${Math.random()},
  ${Math.random()})
`;

ulSquares.appendChild(li);
}
