import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { useI18n } from '../../hooks/i18n';

import CV from '../../components/CV';

import { Container, ButtonsContainer } from './styles';
import { useCallback } from 'react';

export function Home() {
  const { countryCode, changeCountryCode } = useI18n();

  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    documentTitle: 'CV-Guilherme-César-Athayde',
  });

  const handleChangeCountryCode = useCallback(() => {
    changeCountryCode(countryCode === 'BR' ? 'US' : 'BR');
  }, [changeCountryCode, countryCode]);

  return (
    <Container>
      <ButtonsContainer>
        <button onClick={handlePrint}>
          {countryCode === 'BR' ? 'Baixar' : 'Download'}
        </button>
        <button onClick={handleChangeCountryCode}>
          {countryCode === 'BR' ? 'English' : 'Português'}
        </button>
      </ButtonsContainer>

      <CV
        ref={cvRef}
        name="Guilherme César Athayde"
        email="guiathayde303@gmail.com"
        phoneNumber="+5516991635766"
        phoneNumberInternational="+55 (16) 99163-5766"
        linkedInURL="https://www.linkedin.com/in/gui-athayde/"
        githubURL="https://www.github.com/guiathayde/"
        siteURL="https://guiathayde.dev/"
      />
    </Container>
  );
}
