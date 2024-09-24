/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-props-no-spreading */
// InputText Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import classname from "classnames";
import { ThemeProvider, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
//  import InputLabel from  "@mui/material/InputLabel";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import theme from "../Popup/Others/theme";
import Colors from "../../utils/helpers/Colors";

const SelectMUI = styled(Select)(() => ({
  ".MuiSvgIcon-root": {
    color: Colors.white,
    fontSize: "0.938rem",
  },
}));

const CustomMenuItem = styled(MenuItem)(() => ({
  fontSize: "0.938rem",
  fontWeight: 400,
}));

const InputText = ({
  color,
  size,
  id,
  type,
  name,
  value,
  placeholder,
  maxLength,
  autoComplete,
  tabIndex,
  weight,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  disabled,
  spellCheck,
  variant,
  className,
  iconComponents,
  iconEndComponents,
  isPhoneNumber,
  isEndAndornment,
  isTransparentBorder,
  isTextArea,
  isCurrent,
  isBrowse,
  isCurs,
  isSelectDrodpown,
  sx,
  isError,
  dataSelect,
  handleSelect,
  selectedValue,
  language,
  currency,
  ...input
}) => {
  const classNames = classname(
    "a-input-text",
    className,
    color,
    size,
    weight,
    isPhoneNumber ? "phoneNumber" : "",
    isCurrent ? "currents" : "",
    isBrowse ? "browse" : "",
    isCurs ? "curs" : "",
    isEndAndornment ? "endAndornment" : "",
    isSelectDrodpown ? "selectDropDown" : "",
    iconComponents ? "iconLeft" : "",
    iconEndComponents ? "iconRight" : ""
  );
  const phoneNumber = () => (
    <InputAdornment
      position="start"
      className="inputAdorment"
      sx={{
        zIndex: 200,
        justifyContent: "center",
        width: "67px",
        maxHeight: "56px",
        height: "56px",
        borderRadius: "10px 0px 0px 10px",
        backgroundColor: Colors.primary.hard,
        ".MuiTypography-root": {
          color: Colors.white,
          fontSize: "0.938rem",
          fontWeight: "400",
          lineHeight: "1.124rem",
        },
        ...sx,
      }}
    >
      +62
    </InputAdornment>
  );
  const browse = () => (
    <InputAdornment
      disabled={disabled}
      position="end"
      className="inputAdorment"
      onClick={() => {}}
      sx={{
        zIndex: 200,
        justifyContent: "center",
        width: "110px",
        maxHeight: "110px",
        height: "56px",
        borderRadius: "0px 10px 10px 0px",
        backgroundColor: disabled ? "#BCC8E7" : Colors.primary.hard,
        cursor: "pointer",
        paddingRight: 0,
        ".MuiTypography-root": {
          color: Colors.white,
          fontSize: "0.938rem",
          fontWeight: "400",
          lineHeight: "1.124rem",
        },
        // paddingRight: 0,
        ...sx,
      }}
    >
      {language === "id" ? "Telusuri" : "Browse"}
    </InputAdornment>
  );
  const currents = () => (
    <InputAdornment
      position="start"
      className="inputAdorment"
      sx={{
        zIndex: 200,
        justifyContent: "center",
        width: "67px",
        maxWidth: "67px",
        maxHeight: "56px",
        height: "56px",
        borderRadius: "10px 0px 0px 10px",
        backgroundColor: Colors.primary.hard,
        ".MuiTypography-root": {
          color: Colors.white,
          fontSize: "0.938rem",
          fontWeight: "400",
          lineHeight: "1.124rem",
        },
        ...sx,
      }}
    >
      {currency === "IDR"
        ? language === "id" && !isCurs
          ? "Rp"
          : "IDR"
        : currency}
    </InputAdornment>
  );

  const selectDropDown = () => (
    <InputAdornment
      position="start"
      className="inputAdorment"
      sx={{
        zIndex: 200,
        justifyContent: "center",
        width: "67px",
        maxHeight: "56px",
        height: "56px",
        borderRadius: "10px 0px 0px 10px",
        backgroundColor: Colors.primary.hard,
        ".MuiTypography-root": {
          color: Colors.white,
          fontSize: "0.938rem",
          fontWeight: "400",
          lineHeight: "1.124rem",
        },
        ...sx,
      }}
    >
      <SelectMUI
        value={selectedValue}
        onChange={handleSelect}
        sx={{
          "&.MuiSelect-root": {
            borderRadius: "10px",
          },
          ".MuiSelect-select": {
            fontSize: "0.938rem",
            fontWeight: 400,
            lineHeight: "24px",
            color: Colors.white,
          },
          ".MuiSelect-icon": {
            color: Colors.white,
          },
          "&.MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
          ".MuiOutlinedInput-notchedOutline": {
            border: "0px !important",
          },
        }}
        inputProps={{
          "aria-label": "Without label",
        }}
        // IconComponent={KeyboardArrowDownIcon}
      >
        {dataSelect?.map((item, index) => (
          <CustomMenuItem key={item.label} value={item.value}>
            {item.label}
          </CustomMenuItem>
        ))}
      </SelectMUI>
    </InputAdornment>
  );

  return (
    <ThemeProvider theme={theme}>
      <TextField
        className={classNames}
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete}
        // tabIndex={tabIndex}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        variant={variant}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        spellCheck={spellCheck}
        sx={{
          padding: "0px",
          margin: "2.5px 0px",
          width: "100%",
          backgroundColor: Colors.white,
          borderRadius: "10px",
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderRadius: "10px",
              border: `1px solid ${
                !isTransparentBorder ? Colors.primary.hard : "transparent"
              }`,
            },
            "&.Mui-focused fieldset": {
              borderRadius: "10px",
              border: `1px solid ${
                !isTransparentBorder ? Colors.primary.hard : "transparent"
              }`,
            },
            "&.Mui-focused input": {
              "&::placeholder": {
                color: Colors.primary.hard,
              },
            },
          },
          "&.phoneNumber": {
            ".MuiOutlinedInput-root": {
              paddingLeft: "0px",
            },
          },
          "&.currents": {
            ".MuiOutlinedInput-root": {
              paddingLeft: "0px",
            },
          },
          "&.curs": {
            ".MuiOutlinedInput-root": {
              paddingLeft: "0px",
            },
          },
          "&.browse": {
            ".MuiOutlinedInput-root": {
              paddingRight: "0px",
            },
          },
          "&.selectDropDown": {
            ".MuiOutlinedInput-root": {
              paddingLeft: "0px",
            },
          },
          "&.endAndornment": {
            ".MuiOutlinedInput-root": {
              paddingRight: "0px",
            },
          },
          "&.iconLeft": {
            ".MuiInputBase-input": {
              paddingLeft: "8px",
            },
          },
          "&.iconRight": {
            ".MuiInputBase-input": {
              paddingRight: "8px",
            },
          },
          "&.sm": {
            maxHeight: "40px",
            ".MuiOutlinedInput-root": {
              maxHeight: "40px",
            },
            ".inputAdorment": {
              maxHeight: "40px",
            },
          },

          "&.md": {
            maxHeight: "56px",
            ".MuiOutlinedInput-root": {
              maxHeight: "56px",
            },
            ".inputAdorment": {
              maxHeight: "56px",
            },
          },
          "&.lg": {
            minHeight: "82px",
            ".MuiOutlinedInput-root": {
              minHeight: "82px",
              alignItems: !isTextArea ? "center" : "flex-start",
            },
            ".inputAdorment": {
              minHeight: "82px",
            },
          },
          "&.xxl": {
            minHeight: "90px",
            ".MuiOutlinedInput-root": {
              minHeight: "90px",
              alignItems: !isTextArea ? "start" : "start",
            },
            ".inputAdorment": {
              minHeight: "90px",
            },
          },
          "&.smwidth": {
            minWidth: "329px",
            maxHeight: "38px",
            ".MuiOutlinedInput-root": {
              minWidth: "329px",
              alignItems: !isTextArea ? "start" : "start",
            },
            ".inputAdorment": {
              minWidth: "329px",
            },
          },
          "&.lgwidth": {
            minWidth: "400px",
            maxHeight: "40px",
            ".MuiOutlinedInput-root": {
              minWidth: "400px",
              alignItems: !isTextArea ? "start" : "start",
            },
            ".inputAdorment": {
              minWidth: "400px",
            },
          },
          "&.ssml": {
            maxHeight: "40px",
            minWidth: "358px",
            ".MuiOutlinedInput-root": {
              maxHeight: "40px",
            },
            ".inputAdorment": {
              maxHeight: "40px",
            },
          },
          "&.smlg": {
            maxHeight: "40px",
            minWidth: "293px",
            ".MuiOutlinedInput-root": {
              maxHeight: "40px",
            },
            ".inputAdorment": {
              maxHeight: "40px",
            },
          },
          "&.sslg": {
            maxHeight: "40px",
            minWidth: "329px",
            ".MuiOutlinedInput-root": {
              maxHeight: "40px",
            },
            ".inputAdorment": {
              maxHeight: "40px",
            },
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderRadius: "10px",
            border: `1px solid ${
              !isTransparentBorder ? Colors.gray.medium : "transparent"
            }`,
            legend: {
              width: "inherit !important",
              maxWidth: "inherit !important",
            },
          },
          ".MuiInputBase-input": {
            color: !isError ? Colors.dark.hard : Colors.warning.hard,
            fontSize: "0.938rem",
            fontWeight: "400",
            lineHeight: "1.124rem",
            "&::placeholder": {
              color: Colors.gray.medium,
              fontSize: "0.938rem",
              fontWeight: "400",
              lineHeight: "1.124rem",
            },
          },
          ...sx,
        }}
        InputProps={{
          startAdornment:
            iconComponents ||
            (isPhoneNumber && phoneNumber()) ||
            ((isCurrent || isCurs) && currents()) ||
            (isSelectDrodpown && selectDropDown()),
          endAdornment: iconEndComponents || (isBrowse && browse()) || null,
        }}
        {...input}
        inputProps={{
          ...input.inputProps,
          maxLength,
          autocomplete: "off",
        }}
      />
    </ThemeProvider>
  );
};

InputText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  id: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "number",
    "textarea",
    "masking",
  ]),
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoComplete: PropTypes.oneOf(["on", "off"]),
  tabIndex: PropTypes.string,
  weight: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  disabled: PropTypes.bool,
  input: PropTypes.object,
  spellCheck: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  iconComponents: PropTypes.node,
  iconEndComponents: PropTypes.node,
  isPhoneNumber: PropTypes.bool,
  isCurrent: PropTypes.bool,
  isCurs: PropTypes.bool,
  isBrowse: PropTypes.bool,
  isTransparentBorder: PropTypes.bool,
  isError: PropTypes.bool,
  isEndAndornment: PropTypes.bool,
  sx: PropTypes.object,
  isTextArea: PropTypes.bool,
  isSelectDrodpown: PropTypes.bool,
  handleSelect: PropTypes.func,
  dataSelect: PropTypes.array,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  language: PropTypes.string,
  currency: PropTypes.string,
};

InputText.defaultProps = {
  color: "",
  size: "md",
  id: "",
  type: "text",
  name: "",
  value: "",
  placeholder: "",
  maxLength: "",
  autoComplete: "new-password",
  tabIndex: "-1",
  weight: "",
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  input: {},
  disabled: false,
  spellCheck: false,
  className: "",
  variant: "outlined",
  iconComponents: "",
  iconEndComponents: "",
  isPhoneNumber: false,
  isCurrent: false,
  isCurs: false,
  isBrowse: false,
  isTransparentBorder: false,
  isEndAndornment: false,
  isError: false,
  sx: {},
  isTextArea: false,
  isSelectDrodpown: false,
  handleSelect: () => {},
  dataSelect: [
    { label: "Rp", value: 0 },
    { label: "USD", value: 1 },
    { label: "CNY", value: 2 },
    { label: "SGD", value: 3 },
  ],
  selectedValue: 0,
  language: "id",
  currency: "IDR",
};

export default InputText;
