/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const domainIndex = email.lastIndexOf('@');
  return email.split('').splice(domainIndex + 1, email.length - domainIndex).join('');
}
module.exports = getEmailDomain;
