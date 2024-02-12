import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lebron': "url(https://i.pinimg.com/564x/52/8c/97/528c976c443a0325e5a1f5032a2b629e.jpg)",
        'jordan': "url(https://i.pinimg.com/564x/00/35/a1/0035a131ec140d3b6b5c708b5bf077be.jpg)",
        'curry': "url(https://i.pinimg.com/564x/eb/68/0d/eb680d142db1a804fde01e45163e68fb.jpg)",
        'larry-magic': "url(https://i.pinimg.com/564x/88/0f/fd/880ffd0c7ccc6c8dc4b57f25ef728f44.jpg)",
        'kobe': "url(https://i.pinimg.com/564x/56/29/47/56294746eb8cbf1b7bd8f370c6b03ca8.jpg)",
        'giannis': "url(https://i.pinimg.com/564x/c2/30/c4/c230c4dbe4ecf7adbe1e3cec9b68c51b.jpg)",
        'luka': "url(https://i.pinimg.com/564x/c0/3d/89/c03d8911d7cc358fdf28a8732498db88.jpg)",
        'shaq': "url(https://i.pinimg.com/564x/be/b4/d4/beb4d4b4c77fc3821f968cdea2f79344.jpg)",
        'durant': "url(https://i.pinimg.com/564x/3d/46/69/3d4669a3924e446567c1651d1bb06ae8.jpg)"
      },

    },
  },
  plugins: [],
}
export default config
