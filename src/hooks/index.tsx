import { ReactNode } from 'react';

import { I18nProvider } from './i18n';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <I18nProvider>{children}</I18nProvider>;
}
