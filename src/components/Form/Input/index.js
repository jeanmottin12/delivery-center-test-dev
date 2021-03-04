import { Container } from './styles';

export default function Input({ id, label, inputType, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input type={inputType} id={id} {...rest}/>
    </Container>
  )
}
