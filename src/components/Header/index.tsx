import { useI18n } from '../../hooks/i18n';

interface HeaderProps {
  name: string;
  email: string;
  phoneNumber: string;
  phoneNumberInternational: string;
  linkedInURL: string;
  githubURL?: string;
  siteURL?: string;
}

export function Header({
  name,
  email,
  phoneNumber,
  phoneNumberInternational,
  linkedInURL,
  githubURL,
  siteURL,
}: HeaderProps) {
  const { countryCode } = useI18n();

  return (
    <header>
      <h1>{name}</h1>
      <p>
        {countryCode === 'BR' ? 'E-mail' : 'Email'}:{' '}
        <a href={`mailto:${email}`}>{email}</a> |{' '}
        {countryCode === 'BR' ? 'Telefone' : 'Phone'}:{' '}
        <a href={`tel:${phoneNumber}`}>{phoneNumberInternational}</a> |
        LinkedIn:
        <a href={linkedInURL}>{linkedInURL}</a>
        
        {githubURL && <> | GitHub: <a href={githubURL}>{githubURL}</a></>}
        
        {siteURL && <> | Site: <a href={siteURL}>{siteURL}</a></>}
      </p>
    </header>
  );
}
