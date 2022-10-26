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
  isPositiveInt = (value) => {
    return Number.isInteger(value) && value > 0;
  };
  isDirectionLetter = (value) => {
    return ["N", "W", "E", "S"].includes(String(value).toUpperCase());
  };
  isPositiveIntNotMoreThan = (value, max) => {
    return Number.isInteger(value) && value > 0 && value < max;
  };
}
