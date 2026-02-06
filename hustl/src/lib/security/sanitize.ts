import sanitizeHtml from "sanitize-html";
import validator from "validator";

/**
 * Strips all HTML and script content.
 * Safe for storing user-generated text.
 */
export function sanitizeInput(input: string): string {
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {},
  });
}

/**
 * Extra guard for common string inputs
 */
export function normalizeInput(input: string): string {
  return validator.escape(input.trim());
}
