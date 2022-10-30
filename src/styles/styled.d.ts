// Sobresrever definição de tipos
import 'styled-components';
import colors from './colors/colors';

declare module 'styled-components' {
  type ThemeType = typeof colors;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
