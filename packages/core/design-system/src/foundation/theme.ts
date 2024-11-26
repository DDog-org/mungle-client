import colors from './colors';
import typography from './typography';

const theme = {
  colors,
  typo: typography,
  size: {
    minWidth: '320px',
    maxWidth: '480px',
    appBarHeight: '52px',
    gnbHeight: '76px',
  },
  zIndex: {
    overlay: 5,
    appBar: 10,
    gnb: 10,
    fab: 10,
    dim: 20,
    actionSheet: 30,
    bottomSheet: 30,
    dialog: 40,
  },
} as const;

export default theme;
