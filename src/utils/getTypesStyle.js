export function getTypesStyle(type) {
    switch (type) {
      case "normal":
        return { backgroundColor: "#A8A878", color: "#fff" };
      case "fire":
        return { backgroundColor: "#F08030", color: "#fff" };
      case "water":
        return { backgroundColor: "#6890F0", color: "#fff" };
      case "electric":
        return { backgroundColor: "#F8D030", color: "#fff" };
      case "grass":
        return { backgroundColor: "#78C850", color: "#fff" };
      case "ice":
        return { backgroundColor: "#98D8D8", color: "#fff" };
      case "fighting":
        return { backgroundColor: "#C03028", color: "#fff" };
      case "poison":
        return { backgroundColor: "#A040A0", color: "#fff" };
      case "ground":
        return { backgroundColor: "#E0C068", color: "#fff" };
      case "flying":
        return { backgroundColor: "#A890F0", color: "#fff" };
      case "psychic":
        return { backgroundColor: "#F85888", color: "#fff" };
      case "bug":
        return { backgroundColor: "#A8B820", color: "#fff" };
      case "rock":
        return { backgroundColor: "#B8A038", color: "#fff" };
      case "ghost":
        return { backgroundColor: "#705898", color: "#fff" };
      case "dragon":
        return { backgroundColor: "#7038F8", color: "#fff" };
      case "dark":
        return { backgroundColor: "#705848", color: "#fff" };
      case "steel":
        return { backgroundColor: "#B8B8D0", color: "#fff" };
      case "fairy":
        return { backgroundColor: "#EE99AC", color: "#fff" };
      default:
        return { backgroundColor: "#777", color: "#fff" };
    }
  }

  export default getTypesStyle;