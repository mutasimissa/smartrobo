export class Utility {
  isOneLetterOfRegex = (string, regex) => {
    string = String(string);
    String(regex).endsWith("/", String(regex).length - 1)
      ? (regex = regex)
      : (regex = new RegExp(regex, "g"));
    return (
      string.length === 1 &&
      string.toUpperCase() !== string.toLowerCase() &&
      string.toUpperCase().match(regex)
    );
  };
}
