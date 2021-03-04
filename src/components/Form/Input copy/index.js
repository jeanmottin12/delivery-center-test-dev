import { Container } from './styles';

export default function Select({ id, label, options, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...rest}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.name}</option>
        ))}
      </select>
    </Container>
  )
}
