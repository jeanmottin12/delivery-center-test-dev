import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import OrdersList from "../../components/OrderList";

export default function Home() {
  return (
    <>
      <Header />
      <Breadcrumb title="Lista de Pedidos" />
      <OrdersList />
    </>
  )
}
