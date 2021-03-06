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

export function isNumber(arg): boolean {
  return !isNaN(arg);
}

export function toNumber(arg, numberWhenFail = 0): number {
  return isNumber(arg) ? arg * 1 : numberWhenFail;
}