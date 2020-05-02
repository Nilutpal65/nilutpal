const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Nilutpal D\'Angelo',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Nilutpal D\'Angelo',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Nilutpal D\'Angelo',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Nilutpal D\'Angelo',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Nilutpal D\'Angelo',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
