module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    safelist: [
      'img1','img2','img3','img4','img5','img6','img7','img8',
      'img9','img10','img11','img12','img13','img14','img15',
      'img16','img17','img18','img19','img20',
      '::-webkit-scrollbar-track',
      '::-webkit-scrollbar-thumb',
    ],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
