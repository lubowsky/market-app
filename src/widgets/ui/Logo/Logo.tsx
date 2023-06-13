import { Theme, useTheme } from '../../../app/providers/ThemeProvider';

import DarkLogo from '../../../shared/assets/icons/dark-logo.svg';
import LightLogo from '../../../shared/assets/icons/light-logo.svg';

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <img src={theme === Theme.DARK ? DarkLogo : LightLogo} />
  );
};
