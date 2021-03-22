module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: 8501,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd12787aa2e1be42189dc3c9483e7d047'),
    },
  },
});
