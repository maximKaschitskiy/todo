import React from 'react';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { TodoListType } from '../Types/types';

import {
         ListWrapper,
         StyledListItem,
         StyledItemText,
         StyledLabel,
         StyledStack,
       } from '../Styles/muiStyles';

type Props = {
    todoList: TodoListType[];
    editBtn: (item: TodoListType) => void;
    deleteItem: (item: TodoListType['id']) => void;
    check: (id: TodoListType['id'], completed: TodoListType['completed'], task: TodoListType['task']) => void;
}

const TodosMap: React.FC<Props> = ({ todoList, editBtn, deleteItem, check }) => {

    return (
        <ListWrapper>
            {todoList.map((item: TodoListType) => (
                <StyledListItem key={item.id}>
                  <StyledLabel
                    control={
                      <Checkbox
                        checked={item.completed ? true : false}
                        onClick={() => check(item.id, !item.completed, item.task)}
                      />
                    }
                      label={
                        <StyledItemText
                          primary={item.task}
                          primaryTypographyProps={{
                            variant: 'subtitle2',
                            style: {
                                textDecorationLine: `${item.completed ? 'line-through' : 'none'}`,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                fontSize: "16px"
                            }
                        }}
                    />} />
                    <StyledStack direction="row" spacing={2}>
                        <Button
                            onClick={() => deleteItem(item.id)}
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                        >
                            Delete
                        </Button>
                        <Button
                            onClick={() => editBtn(item)}
                            variant="contained"
                            startIcon={<EditIcon />}
                        >
                            Edit
                        </Button>
                    </StyledStack>
                </StyledListItem>
            ))}
        </ListWrapper>
    );
}

export default TodosMap;