import { useEffect, useState } from "react";
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";

import { FiInfo, FiList, FiCreditCard } from "react-icons/fi";

import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import Loading from '../../components/Loading';

import { GET_ORDERS } from '../../utils/ordersQuery';
import { formatToCurrency } from '../../utils/convertMoney';

import { ContainerCard, Card} from './styles';


export default function OrderDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const orders = data?.orders;

    if (!orders) return;

    const order = orders.find(item => item._id === id);

    if (!order) return;

    setOrderData(order);

    console.log(order);
  }, [id, orderData, data?.orders]);

  return (
    <>
      <Header />
      <Breadcrumb
        title="Detalhes do pedido"
        goBack
        breadcrumb={[
          { to: '/home', name: 'Home' },
          { to: '', name: 'Detalhes do pedido' },
        ]}
      />

      {loading && <Loading />}

      {error && (<p>Estamos com problemas, tente novamente...</p>)}

      {orderData && (
        <div className="container">
          <ContainerCard>
            <Card>
              <h3>
                <FiInfo size={24} />
                Informações do pedido
              </h3>

              <p><strong>Data de criação:</strong> 20/03/2021</p>
              <p><strong>Nome do cliente:</strong> {orderData.store}</p>
              <p>
                <strong>Endereço do cliente:</strong>
                {`${orderData.address.street}, ${orderData.address.number}
                ${orderData.address.complement && ` - ${orderData.address.complement}`} -
                ${orderData.address.neighborhood} - ${orderData.address.city} / ${orderData.address.state}`}
              </p>
            </Card>

            <Card>
              <h3>
                <FiList size={24} />
                Items do pedido
              </h3>

              <ul>
                {orderData.items.map(item => (
                  <li key={item._id}>
                    <p><strong>Nome:</strong> {item.name} x {item.quantity}</p>
                    <p><strong>Valor:</strong> {formatToCurrency(item.amount)}</p>
                    {item.note && (
                      <p>
                        <strong>Notas:</strong>
                        {item.note}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3>
                <FiCreditCard size={24} />
                Valores do pedido
              </h3>

              <p>
                <strong>Valor total dos items:</strong>
                {formatToCurrency(orderData.amount - orderData.deliveryFee)}
              </p>
              <p>
                <strong>Valor do frete:</strong>
                {formatToCurrency(orderData.deliveryFee)}
              </p>
              <p>
                <strong>Valor total:</strong>
                {formatToCurrency(orderData.amount)}
              </p>
              <p>
                <strong>Valor pendente:</strong>
              </p>
              <p>
                <strong>Pagamentos</strong>
              </p>
              <ul>
                {orderData.payments.map((payment, index) => (
                  <li key={index}>
                    <p><strong>Valor:</strong> {formatToCurrency(payment.amount)}</p>
                    <p><strong>Método:</strong> {payment.method}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </ContainerCard>
        </div>
      )}
    </>
  )
}
