import "styled-components";
import { ThemeType } from "./common/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
