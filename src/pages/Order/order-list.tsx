import { InputSearch } from "../../components/input-search";
import { ButtonCad } from "../../components/button-cad";
import axios from "axios";
import { Column, Table } from "../../components/table";
import { TableContainer } from "../../components/table-container";

type DeliveryType = {
  id: number;
  recipient: string;
  product: string;
  avatar: string;
  deliveryman: string;
  city: string;
  state: string;
  status: string;
  actions: string;
}

async function getDeliveries() {
  const response = await axios.get<DeliveryType[]>("http://localhost:3333/deliveries");
  return response.data;
}

export function OrderList() {
  //const deliveries = use(getDeliveries());

  const findOrderByProductName = (productName: string) => {
    console.log(productName);
  };
  
  const handleOrder = () => {
    console.log("Cadastrar encomenda");
  };

  const deliveries: DeliveryType[] = [
    {
      id: 1,
      recipient: "Carlos Silva",
      product: "Smartphone",
      avatar: "https://via.placeholder.com/50",
      deliveryman: "João Pereira",
      city: "São Paulo",
      state: "SP",
      status: "Entregue",
      actions: "Ver Detalhes",
    },
    {
      id: 2,
      recipient: "Mariana Costa",
      product: "Notebook",
      avatar: "https://via.placeholder.com/50",
      deliveryman: "Ana Souza",
      city: "Rio de Janeiro",
      state: "RJ",
      status: "Pendente",
      actions: "Ver Detalhes",
    },
    {
      id: 3,
      recipient: "Fernanda Lima",
      product: "Fone de Ouvido",
      avatar: "https://via.placeholder.com/50",
      deliveryman: "Carlos Mendes",
      city: "Belo Horizonte",
      state: "MG",
      status: "Em trânsito",
      actions: "Ver Detalhes",
    },
    {
      id: 4,
      recipient: "Pedro Henrique",
      product: "Câmera DSLR",
      avatar: "https://via.placeholder.com/50",
      deliveryman: "Marcos Tavares",
      city: "Curitiba",
      state: "PR",
      status: "Cancelado",
      actions: "Ver Detalhes",
    },
    {
      id: 5,
      recipient: "Julia Rocha",
      product: "Tablet",
      avatar: "https://via.placeholder.com/50",
      deliveryman: "Beatriz Oliveira",
      city: "Fortaleza",
      state: "CE",
      status: "Entregue",
      actions: "Ver Detalhes",
    },
  ];
  
  
  const columns: Column<DeliveryType>[] = [
    { key: "id", label: "Id" },
    { key: "recipient", label: "Destinatário" },
    { key: "product", label: "Produto" },
    { key: "avatar", label: "#" },
    { key: "deliveryman", label: "Entregador" },
    { key: "city", label: "Cidade" },
    { key: "state", label: "Estado" },
    { key: "status", label: "Status" },
    { key: "actions", label: "Açoes" },
  ];
  
  return (
    <TableContainer
      inputChildren={
        <InputSearch 
          name="buscar"
          type="text"
          placeholder="Buscar por encomendas"
          onChange={(e) => findOrderByProductName(e.target.value)} />
      }
      buttonChildren={<ButtonCad onClick={handleOrder} />}
      tableChildren={<Table columns={columns} data={deliveries} />}
      title="Gerenciando encomendas"
    />
  );
}
