export function Greetings({ lang }) {
    switch (lang) {
      case "fr":
        return <h1>Bonjour</h1>;
      case "en":
        return <h1>Hello</h1>;
      case "es":
        return <h1>Hola</h1>;
      default:
        return <h1>Salcicha</h1>;
    }
  }
