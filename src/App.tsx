import { AppProvider } from './hooks';

import { GlobalStyle } from './styles/global';

import { Home } from './pages/Home';

export function App() {
  return (
    <AppProvider>
      <GlobalStyle />

      <Home />
    </AppProvider>
  );
}
