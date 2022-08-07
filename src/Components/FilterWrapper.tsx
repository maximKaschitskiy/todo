import React from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';

import { TodoListType } from '../Types/types';

import { StyledSortCheckbox, StyledSpan } from '../Styles/muiStyles';

type Props = {
    todoList: TodoListType[];
    setFilter: (value: boolean) => void;
    filterSwitch: boolean;
}

const FilterWrapper: React.FC<Props> = ({ todoList, setFilter, filterSwitch }: Props) => {

  return (
    <>
    {todoList.length ? (
        <StyledSortCheckbox
          direction="row"
          spacing={1}
          divider={
            <Divider orientation="vertical" flexItem />
          }
        >
          <StyledSpan>
          {todoList.length} total, {todoList.filter((todo: TodoListType) => !todo.completed).length} uncompleted
          </StyledSpan>
          <FormControlLabel
            control={
              <Switch 
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setFilter(e.target.checked)}}
                checked={filterSwitch} />
            }
            label="Show uncompleted"
          />
        </StyledSortCheckbox>
      ) : null}
    </>
  );
}

export default FilterWrapper;