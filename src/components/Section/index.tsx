import moment from 'moment';
import 'moment/dist/locale/pt-br';

import { useI18n } from '../../hooks/i18n';

import { Container, List, Title } from './styles';

interface ItemProps {
  title: string;
  start: Date;
  end: Date | null;
  details: string[];
}

export interface SectionProps {
  title: string;
  items: ItemProps[];
  techs?: string[];
}

export function Section({ title, items, techs }: SectionProps) {
  const { countryCode } = useI18n();

  moment.locale(countryCode === 'BR' ? 'pt-br' : 'en');

  return (
    <Container>
      <Title>{title}</Title>

      {items.map((item, index) => {
        const start = moment(item.start).format('MMMM YYYY');
        const startParsed =
          start.charAt(0).toUpperCase() + start.slice(1).toLowerCase();

        const end = item.end
          ? moment(item.end).format('MMMM YYYY')
          : countryCode === 'BR'
          ? 'Atual'
          : 'Present';
        const endParsed =
          end.charAt(0).toUpperCase() + end.slice(1).toLowerCase();

        return (
          <div key={index}>
            <strong>{item.title}</strong>
            <br />
            <em>
              {startParsed} - {endParsed}
            </em>
            <br />
            <ul>
              {item.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        );
      })}

      {techs && (
        <List columns={3}>
          {techs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </List>
      )}
    </Container>
  );
}
