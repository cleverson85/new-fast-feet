import axios from "axios";
import { InputSearch } from "../../components/input-search";
import { Column, Table } from "../../components/table";
import { TableContainer } from "../../components/table-container";

type IssueType = {
  id: number;
  order: string;
  recipient: string;
  deliveryman: string;
  issue: string;
  actions: string;
}

async function getIssues() {
  const response = await axios.get<IssueType[]>("http://localhost:3333/deliveries");
  return response.data;
}

export function IssueList() {
  const issues = [];

  const columns: Column<IssueType>[] = [
    { key: "id", label: "Id" },
    { key: "order", label: "Nome" },
    { key: "recipient", label: "Destinatário" },
    { key: "deliveryman", label: "Entregador" },
    { key: "issue", label: "Problemas" },
    { key: "actions", label: "Açoes" },
  ];

  return (
    <TableContainer
      inputChildren={
        <InputSearch 
          name="buscar"
          type="text"
          placeholder="Buscar por destinatários" />
      }
      buttonChildren={null}
      tableChildren={<Table columns={columns} data={issues} />}
      title="Gerenciando problemas"
    />
  );
}