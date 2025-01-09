// /utils/validate.js

/**
 * Validate a user registration input.
 * @param {object} data - The user data object, e.g. { email, password }.
 * @returns {object} An object containing { valid: boolean, errors: string[] }.
 */
function validateUserRegistration(data) {
    const errors = [];
  
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.push("A valid email is required.");
    }
  
    if (!data.password || data.password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }
  
    return {
      valid: errors.length === 0,
      errors
    };
  }
  
  module.exports = {
    validateUserRegistration
  };
  