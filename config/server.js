module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '737d2d7e1ab5cd3b6df1cd0ff7e9d76b'),
    },
  },
});
