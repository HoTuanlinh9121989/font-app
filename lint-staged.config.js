export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier  --write'],
  '*.{md,mdx,css,yaml,yml}': ['prettier --cache --write'],
}
