// Sobresrever definição de tipos
import "styled-components";
import colors from "./colors/colors";

declare module "styled-components" {
  type ThemeType = typeof colors;
  export interface DefaultTheme extends ThemeType {}
}
