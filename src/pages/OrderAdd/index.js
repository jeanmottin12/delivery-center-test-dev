import { gql, useMutation } from '@apollo/client';

import { FiInfo, FiList, FiCreditCard, FiPlus } from "react-icons/fi";

import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";

import { Box } from './styles';

const ADD_ORDER = gql`
  mutation CreateOrder($store: String!) {
    createOrder(store: $store) {
      _id
      store
    }
  }
`;

export default function OrderAdd() {
  let input;
  const [addOrder, { data }] = useMutation(ADD_ORDER);

  return (
    <>
      <Header />
      <Breadcrumb
        title="Cadastrar novo pedido"
        goBack
        breadcrumb={[
          { to: '/home', name: 'Home' },
          { to: '', name: 'Cadastrar novo pedido' },
        ]}
      />

      <div className="container">
        <form onSubmit={() => {}}>
          <Box>
            <h3>
              <FiInfo size={24} />
              Informações do pedido
            </h3>

            <Select
              label="Customer"
              id="customer-field"
              options={[
                { name: "DPIZZA", value: "DPIZZA" },
                { name: "DBURGUER", value: "DBURGUER" },
                { name: "DHOTDOG", value: "DHOTDOG" },
              ]}
            />

            <h4>Endereço</h4>
            <div className="field-3">
              <Input
                type="text"
                label="Rua"
                id="street-field"
              />

              <Input
                type="number"
                label="Número"
                id="number-field"
              />

              <Input
                type="text"
                label="Complemento"
                id="complement-field"
              />
            </div>

            <div className="field-3">
              <Input
                type="text"
                label="Bairro"
                id="neighborhood-field"
              />

              <Input
                type="text"
                label="Cidade"
                id="city-field"
              />

              <Input
                type="text"
                label="Estado"
                id="state-field"
              />
            </div>
          </Box>

          <Box>
            <h3>
              <FiList size={24} />
              Items do pedido
            </h3>

            <div className="field-3">
              <Input
                type="text"
                label="Nome do produto"
                id="product-field"
              />

              <Input
                type="number"
                label="Quantidade"
                id="quantity-field"
              />

              <Input
                type="number"
                label="Preço"
                id="amount-field"
              />
            </div>

            <Input
              type="text"
              label="Notas"
              id="note-field"
            />
          </Box>

          <Box>
            <h3>
              <FiCreditCard size={24} />
              Pagamento
            </h3>

            <Input
              type="number"
              label="Valor Total"
              id="amount-field"
            />

            <Input
              type="number"
              label="Frete"
              id="delivery-fee-field"
            />

            <h4>Método</h4>

            <div className="field-2">
              <Select
                label="Método de pagamento"
                id="payment-method-field"
                options={[
                  { name: "Crédito", value: "CREDIT" },
                  { name: "Débito", value: "DEBIT" },
                  { name: "Online", value: "ONLINE" },
                ]}
              />

              <Input
                type="number"
                label="Valor à pagar"
                id="payment-amount-field"
              />
            </div>

            <button type="submit">
              <FiPlus size={24}/>
              Adicionar pedido
            </button>
          </Box>
        </form>
      </div>
    </>
  )
}
