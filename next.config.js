/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/pulse-pomodoro',
        destination: '/pomodoro-work-study-timer',
        permanent: true,
      },
      {
        source: '/pulse-pomodoro/support',
        destination: '/pomodoro-work-study-timer/support',
        permanent: true,
      },
      {
        source: '/pulse-pomodoro/privacy',
        destination: '/pomodoro-work-study-timer/privacy',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
