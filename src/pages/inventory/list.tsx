import MaterialTable from "@material-table/core";
import { Avatar } from "@mui/material";
import dayjs from "dayjs";
import { CommonLayout } from "layouts";
import { muiTable } from "utils";

const List = () => {
  const productDetails = [
    {
      slNo: "1",
      productName: "Pump machine",
      productStock: "599",
      productSold: "900",
      createdAt: new Date().toISOString(),
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aspernatur doloremque ipsum sunt amet sit vitae cupiditate. Repellendus nulla facilis blanditiis tempora neque, officiis voluptatum quia distinctio recusandae ducimus. Magnam ipsum tenetur eligendi quae eius. Iste voluptates deleniti tempore dolore, eius eveniet qui cum ullam libero atque ipsa sunt nulla`,
      logoUrl:
        "https://4.imimg.com/data4/DT/RO/ANDROID-38433214/product-500x500.jpeg",
    },
    {
      slNo: "2",
      productName: "Combine machine",
      productStock: "23",
      productSold: "17",
      createdAt: new Date().toISOString(),
      description: `Lorem ipsum do lorem ipsum dolor sit amet, consectetur adip   odio. Fusce et justo sed  diam. Lorem ipsum dolor sit amet, consectetur adip odio. Fusce et justo sed diam. Lorem ipsum dolor sit amet, consectetur adip odio. Lorem  sed diam`,
      logoUrl:
        "https://5.imimg.com/data5/PU/HR/MY-52206836/agriculture-combine-harvester-500x500.jpg",
    },
  ];

  return (
    <CommonLayout title="Inventory | List" appBarTitle="Product Inventory">
      <section className="w-full custom-container ">
        <MaterialTable
          isLoading={false}
          title="All Products"
          localization={{
            pagination: {
              labelDisplayedRows: "{from}-{to} of {count}",
            },
            toolbar: {
              nRowsSelected: "{0} product(s) selected",
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
          data={productDetails || []}
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
              render: ({ logoUrl, productName }) => (
                <div className="w-full">
                  <Avatar
                    src={logoUrl}
                    alt="Product Logo"
                    sx={{
                      height: "8rem",
                      width: "7rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #55555550",
                    }}
                  >
                    {productName && productName[0]}
                  </Avatar>
                </div>
              ),
            },
            {
              title: "Product Name",
              editable: "never",
              tooltip: "Product Name",
              field: "productName",
            },
            {
              title: "Product Stock",
              tooltip: "Product Stock",
              field: "productStock",
            },
            {
              title: "Product Sold",
              tooltip: "Product Sold",
              field: "productSold",
            },
            {
              title: "Created Date",
              field: "createdAt",
              tooltip: "Created Date",
              render: (rowData) => (
                <>{dayjs(rowData?.createdAt).format("MMMM DD YYYY")}</>
              ),
            },
          ]}
          detailPanel={({ rowData }) => (
            <div className="w-full flex flex-col  py-6 gap-4">
              <h3 className="font-medium tracking-wide text-lg text-theme ">
                Description
              </h3>
              <p className="tracking-wide text-gray-700 font-medium">
                {rowData?.description}
              </p>
            </div>
          )}
        />
      </section>
    </CommonLayout>
  );
};

export default List;
