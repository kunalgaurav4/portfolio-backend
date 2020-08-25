module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-52-204-20-42.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "d3590jf9bc5v63"),
        username: env("DATABASE_USERNAME", "xotnsbnqmwmuls"),
        password: env(
          "DATABASE_PASSWORD",
          "a4edd5e5025eab66659ced4d9c8605d15bd7f8e9f754647c14b2dfc441f7127e"
        ),
        schema: "public",
      },
      options: {},
    },
  },
});
