/**
 * Common validation regex patterns
 */

export const NAME_REGEX =
  /^[a-zA-Z0-9\s\-_]+$/;

export const ALPHA_NUMERIC_REGEX =
  /^[a-zA-Z0-9\s]+$/;

export const NUMBER_REGEX =
  /^[0-9]+$/;

export const DECIMAL_REGEX =
  /^\d+(\.\d+)?$/;

export const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const NO_SPECIAL_CHAR_REGEX =
  /^[a-zA-Z0-9\s]+$/;

export const POSITIVE_INTEGER_REGEX =
  /^[1-9]\d*$/;