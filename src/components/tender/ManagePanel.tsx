import MaterialTable from "@material-table/core";
import { Avatar } from "@mui/material";
import dayjs from "dayjs";
import { muiTable } from "utils";

type Props = {
  id?: string;
};

const ManagePanel = ({ id }: Props) => {
  const bidUsers = [
    {
      slNo: "1",
      user: {
        displayName: "Chandan Sahu",
        email: "chandansahu@gmail.com",
        photoUrl: "",
        phoneNumber: "+91 1234567890",
      },
      biddingAmount: 12000,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut mollitia deserunt. Nemo tempora esse dolorum, consectetur quaerat officia eos dignissimos commodi voluptatum aperiam! Quos, corporis deleniti atque fugit, obcaecati eum debitis quis ad hic sequi minima quasi rerum recusandae velit iste sed tempore reprehenderit, dolorum harum enim! Soluta, fugiat.`,
      createdAt: new Date().toISOString(),
    },
  ];
  return (
    <div className="w-full flex flex-col  py-6 gap-4">
      <h3 className="font-medium tracking-wide text-lg text-theme ">
        All Bidding
      </h3>
      <MaterialTable
        isLoading={false}
        title="Bidding Details"
        localization={{
          pagination: {
            labelDisplayedRows: "{from}-{to} of {count}",
          },
          toolbar: {
            nRowsSelected: "{0} bidding(s) selected",
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
        data={bidUsers || []}
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
            title: "User",
            tooltip: "User",
            field: "user",
            render: ({ user }) => (
              <div className="w-full flex items-center gap-2 ">
                <Avatar
                  src={user?.photoUrl}
                  alt="Product Logo"
                  sx={{
                    height: "3rem",
                    width: "3rem",
                    border: "1px solid #55555550",
                  }}
                >
                  {user?.displayName && user?.displayName[0]}
                </Avatar>
                <div className="flex flex-col">
                  <h3 className="font-medium tracking-wide">
                    {user?.displayName}
                  </h3>
                  <small className="text-gray-500 tracking-wide">
                    {user?.email}
                  </small>
                </div>
              </div>
            ),
          },
          {
            title: "Phone Number",
            tooltip: "Phone Number",
            field: "user",
            render: ({ user }) => (
              <h3 className="font-medium tracking-wide">{user?.phoneNumber}</h3>
            ),
          },
          {
            title: "Bidding Amount",
            editable: "never",
            tooltip: "Bidding Amount",
            field: "biddingAmount",
            render: ({ biddingAmount }) => (
              <h3 className="font-medium tracking-wide">{biddingAmount}</h3>
            ),
          },

          {
            title: "Bidding Date",
            tooltip: "Bidding Date",
            field: "createdAt",
            render: ({ createdAt }) => (
              <h3 className="font-medium tracking-wide">
                {dayjs(createdAt).format("LLL")}
              </h3>
            ),
          },
        ]}
        detailPanel={({ rowData }) => (
          <div className="w-full flex flex-col p-4 ">
            <h3 className="font-medium text-theme text-xl">Description</h3>

            <p className="tracking-wide text-base">{rowData?.description}</p>
          </div>
        )}
      />
    </div>
  );
};

export default ManagePanel;
