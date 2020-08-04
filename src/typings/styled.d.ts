// Hack to make generated classNames work with re-exported macros
// https://github.com/styled-components/styled-components/issues/2368#issuecomment-462507866

declare module 'styled-components/macro' {
  // eslint-disable-next-line no-restricted-imports
  export * from 'styled-components';

  // eslint-disable-next-line no-restricted-imports
  import { ThemedStyledComponentsModule } from 'styled-components';
  import { ITheme } from 'src/common/theme';

  const ModuleInterface: ThemedStyledComponentsModule<ITheme>;

  export const createGlobalStyle: typeof ModuleInterface.createGlobalStyle;
  export const css: typeof ModuleInterface.css;
  export const keyframes: typeof ModuleInterface.keyframes;
  export const isStyledComponent: typeof ModuleInterface.isStyledComponent;
  export const ServerStyleSheet: typeof ModuleInterface.ServerStyleSheet;
  export const StyleSheetManager: typeof ModuleInterface.StyleSheetManager;
  export const ThemeConsumer: typeof ModuleInterface.ThemeConsumer;
  export const ThemeContext: typeof ModuleInterface.ThemeContext;
  export const ThemeProvider: typeof ModuleInterface.ThemeProvider;
  export const withTheme: typeof ModuleInterface.withTheme;
  export default ModuleInterface.default;
}
