import { Cancel, CloudUpload } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { ChangeEventHandler } from "react";

type Props = {
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  image?: string;
  clearImage: () => void;
};

const UploadImage = ({ onChange, image, clearImage }: Props) => {
  return (
    <div className="w-full min-h-[12rem]  bg-theme/95 text-white relative shadow-lg grid place-content-center rounded-md cursor-pointer ">
      {image ? (
        <div className="relative h-full w-full  ">
          {" "}
          <img src={image} className="w-full  contain h-40 " loading="lazy" />
        </div>
      ) : (
        <div className="h-full w-full flex flex-col gap-4 items-center justify-center">
          <CloudUpload className="text-5xl" />
          <small>Upload File</small>
        </div>
      )}

      {image && (
        <span className="absolute top-0 z-50 cursor-pointer right-0">
          <Tooltip title="Clear">
            <IconButton onClick={clearImage}>
              <Cancel className="text-white" />
            </IconButton>
          </Tooltip>
        </span>
      )}

      <input
        type="file"
        className="absolute top-0 left-0 w-full h-full z-10 opacity-0 "
        onChange={onChange}
      />
    </div>
  );
};

export default UploadImage;
