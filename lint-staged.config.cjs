module.exports = {
  // 'src/**/*.{ts,tsx}': ['pnpm run lint', 'pnpm run format', 'pnpm run test']
  'src/**/*.{ts,tsx,js,jsx}': () => 'next lint',
  'src/**/*.{ts,tsx}': ['pnpm run format', "pnpm run test"]
}