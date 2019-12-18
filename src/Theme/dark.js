const theme = {
  name: 'dark',
  backgroundColor: '#11151E',
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace'
  },
  colors: {
    text: '#C8D7EF',
    white: '#fff',
    inputText: '#6E7C99',
    inputBackground: '#131721',
    inputDisabledBackground: '#0E111A',
    inputFurniture: '#3e4d6b',
    borderColor: '#3a4256',
    background: '#12161F',
    contentAreaBackground: '#161B26',
    primary: '#0093FF',
    blue: '#07c',
    lightgray: '#f6f6ff',
    icon: 'primary',
    success: '#44AF69',
    info: '#0093FF',
    warning: '#FFD23F',
    error: '#D7263D',
    primaryGradient: 'linear-gradient(90deg, #0093FF 0%, #00B7FF 100%)',
    outlineButtonBackground: 'rgba(0, 147, 255, 0.12)'
  },
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    medium: '0 0 12px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary'
    }
  },
  icon: {
    size: {
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '96px'
    },
    extend: undefined
  },
  global: {
    colors: {}
  }
};

theme.global.colors = theme.colors;

export default theme;
