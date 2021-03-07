/**
 * check if param is empty
 */
export function isEmpty(param, checkPropertyEmpty = false): boolean {

  // null and undefined are "empty"
  if (param == null) { return true; }

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (param.length > 0) { return false; }
  if (param.length === 0) { return true; }

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof param !== 'object') { return false; }

  return checkPropertyEmpty
    ? Object.keys(param).length === 0 || !Object.keys(param).some(property => isNotEmpty(param[property], true))
    : Object.keys(param).length === 0;
}

/**
 * check if param is not empty
 */
export function isNotEmpty(param, checkPropertyEmpty = false): boolean {
  return !isEmpty(param, checkPropertyEmpty);
}

/**
 * check if param is number
 */
export function isNumber(param): boolean {
  return !isNaN(param);
}

/**
 * check if param is not number
 */
export function isNotNumber(param): boolean {
  return !isNumber(param);
}

/**
 * convert param to number
 */
export function toNumber(param, numberWhenFail = 0): number {
  return isNumber(param) ? param * 1 : numberWhenFail;
}
