import { ExportCsv, ExportPdf, IColum } from "@material-table/exporters";

export const muiTable = {
  styles: {
    borderRadius: "4px",
    padding: "20px",
    border: "1px solid #e0e0e07d",
    boxShadow: "#8c80803d 0px 8px 16px 0px ",
  },
  options: () => ({
    exportAllData: true,
    exportMenu: [
      {
        label: "Export All Data In CSV",
        exportFunc: (cols: IColum<object>[], data: object[]) =>
          ExportCsv(cols, data, "csv"),
      },
      {
        label: "Export All Data In PDF",
        exportFunc: (cols: IColum<object>[], data: object[]) =>
          ExportPdf(cols, data, "pdf"),
      },
    ],
    selection: true,
    actionsColumnIndex: -1,
    pageSize: 10,
    addRowPosition: "first",
    detailPanelColumnAlignment: "center",
    // cellStyle: {
    //   textAlign: "center",
    // },

    headerStyle: {
      backgroundColor: "#065934",
      color: "#FFF",
      padding: "1rem",
      fontWeight: "600",
      fontSize: "1rem",
    },
  }),
};
