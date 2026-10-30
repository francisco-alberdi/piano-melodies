module.exports = {
  apps: [
    {
      name: "piano-melodies",
      cwd: "/var/www/piano-melodies/current",
      script: "server.js",
      exec_mode: "fork",
      instances: 1,
      node_args: "--max_old_space_size=320",
      max_memory_restart: "450M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "127.0.0.1",
      },
    },
  ],
};
