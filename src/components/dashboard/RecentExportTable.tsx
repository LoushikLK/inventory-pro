import MaterialTable from "@material-table/core";
import dayjs from "dayjs";
import { muiTable } from "utils";

const RecentExportTable = () => {
  const tableData = [
    {
      slNo: 1,
      itemName: "Generator",
      itemQuantity: 100,
      createdAt: new Date().toISOString(),
      acceptOffer: "f48rff8f4erfeiiooweghweSD",
      biddingAmount: 100000,
    },
    {
      slNo: 2,
      itemName: "Electric Pump",
      itemQuantity: 20,
      createdAt: new Date().toISOString(),
      acceptOffer: "WF5F4RE4FERF11EWEFEEW55EFWFF",
      biddingAmount: 75000,
    },
  ];

  return (
    <div className="w-full py-4 ">
      <MaterialTable
        isLoading={false}
        title="Recent Tenders"
        localization={{
          pagination: {
            labelDisplayedRows: "{from}-{to} of {count}",
          },
          toolbar: {
            nRowsSelected: "{0} tender(s) selected",
          },
          header: {
            actions: "Actions",
          },
          body: {
            emptyDataSourceMessage: (
              <h3 className="font-medium tracking-wide text-lg">
                No Data Available
              </h3>
            ),
            filterRow: {
              filterTooltip: "Filter",
            },
          },
        }}
        data={tableData || []}
        options={{
          ...(muiTable.options() as any),
          pageSize: 10,
          selection: true,
          filtering: false,
        }}
        style={{
          ...(muiTable.styles as any),
        }}
        columns={[
          {
            title: "#",
            field: "slNo",
            editable: "never",
            width: "5%",
            filtering: false,
            align: "center",
          },
          {
            title: "Item Name",
            editable: "never",
            tooltip: "Item",
            field: "itemName",
          },
          {
            title: "Quantity",
            tooltip: "Item Quantity",
            field: "itemQuantity",
          },
          {
            title: "Bidding Price",
            tooltip: "Bidding Price",
            field: "biddingAmount",
          },
          {
            title: "Bid By",
            field: "acceptOffer",
            tooltip: "Bid By",
          },
          {
            title: "Created Date",
            field: "createdAt",
            tooltip: "Created Date",
            render: (rowData) => (
              <>{dayjs(rowData?.createdAt).format("DD-MMM-YYYY")}</>
            ),
          },
        ]}
      />
    </div>
  );
};

export default RecentExportTable;
