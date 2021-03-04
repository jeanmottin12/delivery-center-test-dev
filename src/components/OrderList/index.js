import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { FiChevronRight, FiSearch, FiPlus } from "react-icons/fi";

import { formatToCurrency } from '../../utils/convertMoney';
import { GET_ORDERS_SHORT } from '../../utils/ordersQuery';

import Loading from '../../components/Loading';

import { OrderList, OrderListItem, OrderListHeader, Filters } from './styles';

export default function OrdersList() {
  const { loading, error, data } = useQuery(GET_ORDERS_SHORT);

  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const orders = data?.orders;

    if (!orders) return;

    setOrders(orders);
  }, [data?.orders]);

  function handleSearch(event){
    event.preventDefault();

    if (searchTerm !== "") {
      let newList = [];

      newList = orders.filter(order => order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()));

      console.log("new list: ", newList);
      setOrders(newList);
    } else {
      setOrders(data.orders);
    }
  }

  return (
    <div className="container">
      {loading && <Loading />}
      {error && (<p>Estamos com problemas, tente novamente...</p>)}

      <Filters>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            placeholder="Pesquise por cliente"
            onChange={e => setSearchTerm(e.target.value)}
          />
          <FiSearch size={24} />
        </form>

        <Link to="/orders/add">
          <FiPlus size={24} />
          Cadastrar
        </Link>
      </Filters>

      {/* {!loading && (
        <>
          {orders && orders.map((item, index) => <p key={index}>{item.customer.name}</p>)}
        </>
      )} */}

      {!loading && (
        <OrderList>
          <OrderListHeader>
            <span>ID do pedido</span>
            <span>lojista</span>
            <span>Data de criação</span>
            <span>cliente</span>
            <span>Total</span>
            <span>Valor pendente</span>
            <span></span>
          </OrderListHeader>
          {orders.length > 0 ? orders.map(order => (
            <OrderListItem key={order._id}>
              <Link to={`/order-detail/${order._id}`}>
                <p><strong>{`#${order.reference}`}</strong></p>
                <p>{order.store}</p>
                <p>20/03/2021</p>
                <p>{order.customer.name}</p>
                <p>{formatToCurrency(order.amount + order.deliveryFee)}</p>
                <p>10</p>
                <p><FiChevronRight size={24}/></p>
              </Link>
            </OrderListItem>
          )) : (
            <div className="no-orders">
              <h3>Nenhum pedido encontrado.</h3>
            </div>
          )}
        </OrderList>
      )}
    </div>
  )
}
