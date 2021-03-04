import { Breadcrumbs } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';

import { Container } from './styles';

export default function Breadcrumb({ title, breadcrumb, goBack }) {
  const history = useHistory();

  return (
    <Container className="container">
      <div>
        <h1>{title}</h1>
        {goBack &&
          <button type="button" onClick={history.goBack}>
            <FiChevronLeft size={24} />
            Voltar
          </button>
        }
      </div>

      {breadcrumb && (
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumb.map((item, index) => (
            <Link
              key={index}
              to={item.to ? item.to : '/home'}
            >
              {item.name}
            </Link>
          ))}
        </Breadcrumbs>
      )}
    </Container>
  )
}
