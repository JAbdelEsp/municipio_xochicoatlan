import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import Button from "../../common/Button";

const Table = () => {
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "tramite",
      headerName: "Trámite o Servicio",
      width: 400,
      editable: false,
    },
    {
      field: "cost",
      headerName: "Costo $",
      width: 350,
      editable: false,
    },
    {
      field: "online",
      headerName: "Trámite en Línea",
      width: 391,
      editable: false,
      renderCell: (row) => (row.value ? <Button>En Línea</Button> : "No"),
    },
  ];

  const rows = [
    {
      id: 0,
      tramite: "Pago de Impuesto Predial",
      cost: "",
      online: true,
    },
    { id: 1, tramite: "Pago de Agua Potable", cost: "", online: true },
  ];
  return (
    <DataGrid
      className="table"
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      disableRowSelectionOnClick
    />
  );
};

export default Table;
