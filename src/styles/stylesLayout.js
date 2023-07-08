const media = {
  mobile: '@media(max-width: 766px)',
  mobileAndTablet: '@media(max-width: 1279px)',
  tablet: '@media(min-width: 767px) and (max-width: 1279px)',
  tabletAndDesktop: '@media(min-width: 767px)',
  desktop: '@media(min-width: 1280px)',
  desktopHeight: '@media(min-height: 800px)',
  desktop2kHeight: '@media(min-height: 1000px)',
  mobileHeight: '@media(max-height: 900px)',
  tabletHeight: '@media(max-height: 1000px)',
};

const colors = {
  accentBlue: '#2196f3',
  accent: '#F59256',
  background: '#FDF7F2',
  accentButton: '#FF6101',
  black: '#111111',
  newsText: '#111321',
  maleColor: '#23C2EF',
  femaleColor: '#FF8787',
  accentHover: '#FF6101',
  blue: '#3091EB',
  white: '#FFFFFF',
  gray: 'rgba(17, 17, 17, 0.6)',
  gradient: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
  shadow: 'rgba(49, 21, 4, 0.07)',

  // blue: '#3b5998',
  '--indigo': '#6610f2',
  '--purple': '#6f42c1',
  '--pink': '#e83e8c',
  '--red': '#ee3a5a',
  '--orange': '#fccd34',
  '--yellow': '#ffc107',
  '--green': '#acc945',
  '--teal': '#20c997',
  '--cyan': '#17a2b8',
  '--white': '#fff',
  '--gray': '#dadada',
  '--gray-dark': '#536773',
  '--primary': '#3b5998',
  '--light-grey': '#f1f1f3',
  '--secondary': '#dadada',
  '--success': '#acc945',
  '--info': '#17a2b8',
  '--warning': '#fccd34',
  '--danger': '#ee3a5a',
  '--light': '#f8f9fa',
  '--dark': '#536773',
  '--breakpoint-xs': '0',
  '--breakpoint-sm': '576px',
  '--breakpoint-md': '768px',
  '--breakpoint-lg': '992px',
  '--breakpoint-xl': '1200px',
  '--font-family-sans-serif': '"Roboto",sans-serif',
  '--font-family-monospace':
    'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
};

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const gap = {
  containerMobile: '0 15px',
  containerTablet: '0 20px',
  containerDesktop: '0 30px',
};
const radius = { button: '25px' };

const optionsToast = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};
const transFunc = {
  td250CB: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  td250EinO: '250ms ease-in-out',
};

export { media, colors, fontWeights, optionsToast, transFunc, gap, radius };
