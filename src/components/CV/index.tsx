import { ForwardRefRenderFunction, forwardRef } from 'react';

import { useI18n } from '../../hooks/i18n';

import { Header } from '../Header';
import { Section } from '../Section';

import { Container } from './styles';

interface CVProps {
  name: string;
  email: string;
  phoneNumber: string;
  phoneNumberInternational: string;
  linkedInURL: string;
  githubURL?: string;
  siteURL?: string;
}

const CV: ForwardRefRenderFunction<HTMLDivElement, CVProps> = (
  {
    name,
    email,
    phoneNumber,
    phoneNumberInternational,
    linkedInURL,
    githubURL,
    siteURL,
  },
  ref
) => {
  const { sections } = useI18n();

  return (
    <Container ref={ref}>
      <Header
        name={name}
        email={email}
        phoneNumber={phoneNumber}
        phoneNumberInternational={phoneNumberInternational}
        linkedInURL={linkedInURL}
        githubURL={githubURL}
        siteURL={siteURL}
      />

      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          items={section.items}
          techs={section.techs}
        />
      ))}
    </Container>
  );
};

export default forwardRef(CV);
