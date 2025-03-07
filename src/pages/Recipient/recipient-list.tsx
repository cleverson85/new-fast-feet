import { ButtonCad } from "../../components/button-cad";
import { InputSearch } from "../../components/input-search";
import { TableContainer } from "../../components/table-container";
import axios from "axios";
import { Column, Table } from "../../components/table";


async function getRecipient() {
  const response = await axios.get<RecipientType[]>("http://localhost:3333/deliveries");
  return response.data;
}

type RecipientType = {
  id: number;
  name: string;
  address: string;
  actions: string;
}

export function RecipientList() {
  const recipients = [] as RecipientType;

  const findByName = (name: string) => {
    console.log(name);
  }
  
  const handleRecipient = () => {
    console.log("Recipient button clicked");
  }  

  const columns: Column<RecipientType>[] = [
    { key: "id", label: "Id" },
    { key: "name", label: "Nome" },
    { key: "address", label: "Endereço" },
    { key: "actions", label: "Açoes" },
  ];

  return (
    <TableContainer
      inputChildren={
        <InputSearch 
          name="buscar"
          type="text"
          placeholder="Buscar por destinatários"
          onChange={(e) => findByName(e.target.value)} />
      }
      buttonChildren={<ButtonCad onClick={handleRecipient} />}
      tableChildren={<Table columns={columns} data={recipients} />}
      title="Gerenciando destinatários"
    />
  );
}