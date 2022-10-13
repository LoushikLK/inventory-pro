import MaterialTable from "@material-table/core";
import { Avatar } from "@mui/material";
import { BiddingDialog } from "components/productRequest";
import dayjs from "dayjs";
import { CommonLayout } from "layouts";
import { NextPage } from "next";
import { useState } from "react";
import { muiTable } from "utils";

const ProductRequest: NextPage = () => {
  const [biddingDialog, setBiddingDialog] = useState(false);

  const allTenders = [
    {
      slNo: "1",
      createdAt: new Date().toISOString(),
      tenderDetails: {
        logoUrl:
          "https://4.imimg.com/data4/DT/RO/ANDROID-38433214/product-500x500.jpeg",
        productName: "Pump Machine",
        price: 150000,
        createdAt: new Date().toISOString(),
      },
    },
  ];

  return (
    <CommonLayout title="Inventory | Tender" appBarTitle="Tender Request">
      <section className="w-full custom-container">
        <BiddingDialog
          open={biddingDialog}
          onClose={() => setBiddingDialog(false)}
        />
        <div className="w-full py-8 ">
          <MaterialTable
            isLoading={false}
            title="All Tenders"
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
            data={allTenders || []}
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
                title: "Logo",
                tooltip: "Logo",
                field: "logoUrl",
                render: ({ tenderDetails }) => (
                  <div className="w-full">
                    <Avatar
                      src={tenderDetails?.logoUrl}
                      alt="Product Logo"
                      sx={{
                        height: "8rem",
                        width: "7rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #55555550",
                      }}
                    >
                      {tenderDetails?.productName &&
                        tenderDetails?.productName[0]}
                    </Avatar>
                  </div>
                ),
              },
              {
                title: "Tender Name",
                editable: "never",
                tooltip: "Tender Name",
                field: "tenderDetails",
                render: ({ tenderDetails }) => (
                  <h3 className="font-medium tracking-wide">
                    {tenderDetails?.productName}
                  </h3>
                ),
              },
              {
                title: "Tender Price",
                tooltip: "Tender Price",
                field: "tenderDetails",
                render: ({ tenderDetails }) => (
                  <h3 className="font-medium tracking-wide">
                    {tenderDetails?.price}
                  </h3>
                ),
              },
              {
                title: "Tender Created",
                tooltip: "Tender Created",
                field: "tenderDetails",
                render: ({ tenderDetails }) => (
                  <h3 className="font-medium tracking-wide">
                    {dayjs(tenderDetails?.createdAt).format("LLL")}
                  </h3>
                ),
              },
              {
                title: "Action",
                tooltip: "Action",
                field: "action",
                render: (rowData) => (
                  <div className="flex w-full items-center gap-4">
                    <button
                      className="btn-primary whitespace-nowrap "
                      onClick={() => setBiddingDialog(true)}
                    >
                      Create Bidding
                    </button>
                    <button
                      className="btn-danger whitespace-nowrap "
                      onClick={() => {
                        console.log("Deleting bidding");
                      }}
                    >
                      Delete Bidding
                    </button>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>
    </CommonLayout>
  );
};

export default ProductRequest;
