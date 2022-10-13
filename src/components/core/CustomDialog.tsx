import { Dialog, DialogProps } from "@mui/material";

interface Props extends DialogProps {
  close: () => void;
}

const CustomDialog = ({ open, close, children, maxWidth }: Props) => {
  return (
    <div className="w-full">
      <Dialog
        onClose={close}
        keepMounted={false}
        open={open}
        maxWidth={maxWidth}
        fullWidth
      >
        {children}
      </Dialog>
    </div>
  );
};

export default CustomDialog;
