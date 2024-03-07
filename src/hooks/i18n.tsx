import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { SectionProps } from '../components/Section';

import { en } from '../i18n/en';
import { pt } from '../i18n/pt';

interface I18nContextData {
  countryCode: string;
  changeCountryCode: (code: string) => void;
  sections: SectionProps[];
}

const I18nContext = createContext<I18nContextData>({} as I18nContextData);

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [countryCode, setCountryCode] = useState('US');
  const [sections, setSections] = useState<SectionProps[]>(en);

  const changeCountryCode = useCallback((code: string) => {
    setCountryCode(code);
  }, []);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => {
        setCountryCode(data.country_code);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (countryCode === 'US') {
      setSections(en);
    } else {
      setSections(pt);
    }
  }, [countryCode]);

  useEffect(() => {
    console.log('countryCode', countryCode);
  }, [countryCode]);

  return (
    <I18nContext.Provider
      value={{
        countryCode,
        sections,
        changeCountryCode,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextData {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within a I18nProvider');
  }

  return context;
}
