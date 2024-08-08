export default function sortHealth(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
