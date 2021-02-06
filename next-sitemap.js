const { VERCEL_ENV } = process.env;

module.exports = {
  siteUrl: 'https://www.eskolare.com',
  generateRobotsTxt: VERCEL_ENV === 'production',
};
