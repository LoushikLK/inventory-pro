import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent, FocusEvent } from "react";
import UploadImage from "./UploadImage";

type Props = {
  type: "text" | "select" | "date" | "file" | "number";
  value?: any;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (e: FocusEvent<any, Element>) => void;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  options?: any;
  title?: string;
  id?: string;
  image?: string;
  variant?: "filled" | "outlined" | "standard";
  InputProps?: any;
  inputProps?: any;
  styleContact?: any;
  styleArea?: any;
  styleField?: any;
  onFileChange?: any;
  multiline?: boolean;
  rows?: number;
};

const InputField = ({
  type,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  fullWidth,
  placeholder,
  name,
  disabled,
  InputProps,
  title,
  id,
  variant,
  inputProps,
  options,
  styleContact,
  image,
  styleArea,
  styleField,
  onFileChange,
  rows,
  multiline,
}: Props) => {
  switch (type) {
    case "text":
      return (
        <div className={styleArea}>
          <p className="text-theme text-wider font-medium pb-2">{title}</p>
          <TextField
            fullWidth={fullWidth}
            placeholder={placeholder}
            name={name}
            id={id}
            variant={variant}
            className={styleContact}
            InputProps={InputProps}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            multiline={multiline}
            rows={rows}
            helperText={helperText}
          />
        </div>
      );
    case "number":
      return (
        <div className={styleArea}>
          <p className="text-theme text-wider font-medium pb-2">{title}</p>
          <TextField
            fullWidth={fullWidth}
            placeholder={placeholder}
            name={name}
            id={id}
            type="number"
            variant={variant}
            className={styleContact}
            InputProps={InputProps}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            multiline={multiline}
            rows={rows}
            helperText={helperText}
          />
        </div>
      );
    case "date":
      return (
        <div>
          <p className="text-theme text-wider font-medium pb-2">{title}</p>

          <TextField
            fullWidth={fullWidth}
            type="date"
            name={name}
            id={id}
            variant={variant}
            className="rounded-lg"
            inputProps={inputProps}
            InputProps={InputProps}
            value={value}
            onChange={onChange}
            disabled={disabled}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
          />
        </div>
      );
    case "file":
      return (
        <div className="">
          <p className="text-theme text-wider font-medium pb-2">{title}</p>
          <div className={styleField}>
            <UploadImage
              image={image}
              onChange={onFileChange}
              clearImage={() => onFileChange(undefined)}
            />
          </div>
        </div>
      );

    case "select":
      return (
        <div>
          <p className="text-theme text-wider font-medium pb-2">{title}</p>

          <TextField
            fullWidth={fullWidth}
            id={id}
            select={true}
            name={name}
            value={value}
            onChange={onChange}
            className={styleContact}
            InputProps={InputProps}
          >
            {options?.map((option: any) => (
              <MenuItem key={option?.value} value={option?.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      );

    default:
      return (
        <div>
          <p className="text-theme text-wider font-medium pb-2">{title}</p>
          <TextField
            fullWidth={fullWidth}
            placeholder={placeholder}
            name={name}
            id={id}
            variant={variant}
            className={styleContact}
            InputProps={InputProps}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
          />
        </div>
      );
  }
};

export default InputField;
