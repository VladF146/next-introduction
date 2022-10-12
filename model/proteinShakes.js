const proteinShakes = [
  {
    id: 1,
    name: "Strawberry",
    taste: "yummi",
  },
  {
    id: 2,
    name: "Chocolate",
    taste: "very niiice",
  },
  {
    id: 3,
    name: "Banana",
    taste: "wow wow wee wow",
  },
];

export async function getProteinShakes() {
  return proteinShakes;
}

export async function getProteinShakeById(id) {
  return proteinShakes.find((proteinShake) => proteinShake.id === id);
}
