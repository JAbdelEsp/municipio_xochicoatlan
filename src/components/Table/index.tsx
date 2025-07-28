import { Table } from "antd";
import Button from "../../common/Button";

const DataTable = () => {
  const columns = [
    {
      dataIndex: "tramite",
      title: "Trámite o Servicio",
      width: 400,
      editable: false,
    },
    {
      dataIndex: "cost",
      title: "Costo $",
      width: 350,
      editable: false,
    },
    {
      dataIndex: "online",
      title: "Trámite en Línea",
      width: 391,
      editable: false,
      render: (row: any) => (row ? <Button>En Línea</Button> : "No"),
    },
  ];

  const rows = [
    {
      id: 0,
      tramite: "Pago de Impuesto Predial",
      cost: "",
      area: "tesoreria",
      online: true,
    },
    {
      id: 1,
      tramite: "Pago de Agua Potable",
      area: "tesoreria",
      cost: "",
      online: true,
    },
  ];
  return <Table columns={columns} dataSource={rows} />;
};

export default DataTable;
