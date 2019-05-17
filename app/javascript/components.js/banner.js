import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Mr. Cocktail", "Let's Get Fancy"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
