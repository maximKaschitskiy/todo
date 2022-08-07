import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";
import Divider from '@mui/material/Divider';

const appendAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;	
  }
`;

const Page = styled("div", { name: "Page" })({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  overflow: "hidden",
});

const StyledToolbar = styled(Toolbar, { name: "StyledToolbar" })({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
});

const StyledTitle = styled(Typography, { name: "StyledTitle" })({
  marginRight: "10px",
  width: "max-content",
  whiteSpace: "nowrap",
});

const StyledTextField = styled(TextField, { name: "StyledTextField" })({
  marginLeft: "auto",
  marginRight: "5px",
  alignSelf: "center",
  justifySelf: "center",
  width: "100%",
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiOutlinedInput-root": {
    textOverflow: "ellipsis !important",
    color: "white",
  },
});

const MainWrapper = styled(Paper, { name: "MainWrapper" })({
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "70%",
  marginTop: "auto",
  marginBottom: "auto",
  overflow: "hidden"
});

const StyledButton = styled(IconButton, { name: "StyledButton" })({
  alignSelf: "center",
  justifySelf: "center",
  marginLeft: "5px",
});

const ListWrapper = styled(List, { name: "ListWrapper" })({
  overflow: "hidden",
  overflowY: "scroll",
  height: "100%",
  width: "100%",
});

const StyledListItem = styled(ListItem, { name: "StyledListItem" })({
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
  width: "100%",
  animation: `${appendAnimation} 0.5s normal forwards ease-in-out`
});

const StyledItemText = styled(ListItemText, { name: "StyledItemText" })({
  width: "100%",
  marginRight: "10px",
  flexGrow: "1",
});

const StyledStack = styled(Stack, { name: "StyledStack" })({
  marginRight: "10px",
  flexGrow: "1",
});

const StyledLabel = styled(FormControlLabel, { name: "StyledLabel" })({
  marginRight: "10px",
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  "& .MuiTypography-root": {
    textOverflow: "ellipsis !important",
    width: "90%"
  },
});

const StyledSpan = styled(Typography, { name: "StyledSpan" })({
  marginTop: "none",
  padding: "0",
  fontSize: "14px"
});

const StyledSortCheckbox = styled(Stack, { name: "StyledSortCheckbox" })({
  marginTop: "15px",
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "85%",
});

const FormWrapper = styled('form', { name: "FormWrapper" })({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginLeft: "5px",
});

export {
  Page,
  StyledToolbar,
  StyledTextField,
  MainWrapper,
  StyledButton,
  StyledTitle,
  ListWrapper,
  StyledListItem,
  StyledItemText,
  StyledLabel,
  StyledStack,
  StyledSpan,
  StyledSortCheckbox,
  FormWrapper
};
