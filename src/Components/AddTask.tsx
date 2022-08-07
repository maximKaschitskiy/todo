import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import AppBar from '@mui/material/AppBar';
import DoneIcon from '@mui/icons-material/Done';
import BallotIcon from '@mui/icons-material/Ballot';

import { TodoListType } from '../Types/types';

import { StyledToolbar,
         StyledTextField, 
         StyledButton,
         StyledTitle, 
         FormWrapper 
        } from '../Styles/muiStyles';

type Props = {
  add: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  todo: TodoListType['task'];
  input: (e: string) => void;
  isEdit: boolean;
  setBtnToEdit: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const AddTask: React.FC<Props> = ({ add, todo, input, isEdit, setBtnToEdit }: Props) => {

  return (
    <AppBar position="static">
      <StyledToolbar>
        <BallotIcon />
        <StyledTitle>
          Daily Doings
        </StyledTitle>
        <FormWrapper>
          <StyledTextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => input(e.target.value)}
            placeholder="New Task"
            inputProps={{ 'aria-label': 'search' }}
            value={todo}
            sx={{ width: '75%' }}
          />
          <StyledButton
            onClick={isEdit ? setBtnToEdit : add}
            type="submit"
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            {isEdit ? <DoneIcon /> : <AddIcon />}
          </StyledButton>
        </FormWrapper>
      </StyledToolbar>
    </AppBar>
  );
}

export default AddTask;