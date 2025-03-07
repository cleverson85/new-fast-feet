import { ButtonCad } from "../../components/button-cad";
import { InputSearch } from "../../components/input-search";
import { TableContainer } from "../../components/table-container";
import { Column, Table } from "../../components/table";
import axios from "axios";
import { use } from "react";

async function getDeveryMen() {
  const response = await axios.get<DeliveryManType[]>("http://localhost:3333/deliveries");
  return response.data;
}

type DeliveryManType = {
  id: number;
  name: string;
  avatar: string;
  phone: string;
  register: string;
  actions: string;
}

export function DeliveryManList() {
  const deliveries = [] as DeliveryManType;

  const findByName = (name: string) => {
    console.log(name);
  };
  
  const handleDeliveryMan = () => {
    console.log("Cadastrar");
  };

  const columns: Column<DeliveryManType>[] = [
    { key: "id", label: "Id" },
    { key: "name", label: "Nome" },
    { key: "avatar", label: "" },
    { key: "phone", label: "Cel." },
    { key: "register", label: "Registro" },
    { key: "actions", label: "Açoes" },
  ];

  return (
    <TableContainer
      inputChildren={
        <InputSearch 
          name="buscar"
          type="text"
          placeholder="Buscar por entregadores"
          onChange={(e) => findByName(e.target.value)} />
      }
      buttonChildren={<ButtonCad onClick={handleDeliveryMan} />}
      tableChildren={<Table columns={columns} data={deliveries} />}
      title="Gerenciando entregadores"
    />
  );
}