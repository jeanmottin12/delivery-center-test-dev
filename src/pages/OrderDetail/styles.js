import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background: var(--white);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 25px;

  h3 {
    margin-bottom: 30px;

    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  p {
    margin-bottom: 20px;
    font-size: 1.1rem;

    strong {
      display: block;
      font-size: .8rem;
      margin-bottom: 5px;
      text-transform: uppercase;
      color: var(--black);
    }
  }

  ul {
    list-style: none;

    li {
      border-bottom: 1px solid var(--text);
      padding-bottom: 20px;
      margin-bottom: 20px;

      p {
        margin-bottom: 5px;

        &:last-child {
          margin-bottom: 0;
        }

        strong {
          display: inline;
        }
      }

      &:last-child {
        border-bottom: 0;
        margin-bottom: 0;
        padding-bottom: 0;
      }
    }
  }
`;
