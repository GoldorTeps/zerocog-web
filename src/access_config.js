/**
 * Simple Access Configuration for ZeroCog Investor Area.
 * To revoke a key, simply remove it from the VALID_KEYS array.
 * To add a key, add a new string to the array.
 */

export const VALID_KEYS = [
  "ZCOG_2026_INV", // Main investor key
  "ALPHA_BETA_ACCESS", 
  "STRATEGIC_PARTNER_99"
];

const INVESTOR_PASSWORD = "@Invitado01";
const SESSION_COOKIE_NAME = "zc_investor_session";

/**
 * Validates a key and an optional expiration timestamp.
 * @param {string} key - The key provided in the URL (?key=...)
 * @param {string|number} exp - Optional unix timestamp (?exp=...)
 * @returns {boolean} - True if access is granted.
 */
export function validateAccess(key, exp) {
  if (hasActiveSession()) return true;

  if (!VALID_KEYS.includes(key)) return false;

  if (exp) {
    const expTime = parseInt(exp, 10);
    if (isNaN(expTime)) return false;
    
    // Check if current time is past expiration
    if (Date.now() > expTime) {
      return false;
    }
  }

  return true;
}

export function processLogin(email, password) {
  const cleanEmail = email?.trim().toLowerCase()
  if (password === INVESTOR_PASSWORD && cleanEmail) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 15);
    document.cookie = `${SESSION_COOKIE_NAME}=${encodeURIComponent(cleanEmail)}; expires=${expiryDate.toUTCString()}; path=/; samesite=strict`;
    return true;
  }
  return false;
}

export function hasActiveSession() {
  if (typeof document === 'undefined') return false;
  return document.cookie.split(';').some((item) => item.trim().startsWith(`${SESSION_COOKIE_NAME}=`));
}
