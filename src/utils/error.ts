/**
 * Convert camel cased strings to title case. Used for
 * parsing error messages into react-query
 * @param camelStr
 * @returns {string} - Title cased string
 */
export function camel2Title(camelStr: string): string {
  const normCase = camelStr.replace(/([A-Z])/g, " $1");
  return normCase.charAt(0).toUpperCase() + normCase.slice(1);
}
