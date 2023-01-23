import React from 'react';
import uniqid from 'uniqid';

import tasksMock from "./const/tasks.json";

import Title from './Components/Title';
import AddTask from './Components/AddTask';
import TodosMap from './Components/TodosMap';
import FilterWrapper from './Components/FilterWrapper';

import { Page, MainWrapper } from './Styles/muiStyles';

import { TodoListType } from './Types/types';

import './App.css';

const App: React.FC = () => {

  const [inputValue, setInputValue] = React.useState<TodoListType['task']>('');
  const [todoList, setTodoList] = React.useState<TodoListType[]>([]);
  const [filteredList, setFiltered] = React.useState<TodoListType[]>([]);
  const [filterSwitch, setFilter] = React.useState<boolean>(false);
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [editedTodo, setEditedTodo] = React.useState<TodoListType['id']>('');

  const initTaskList: TodoListType[] = tasksMock.tasks;

  React.useEffect(() => {
    setTodoList(initTaskList);
  }, []);

  React.useEffect(() => {
    const uncomplete = todoList.filter((todo) => !todo.completed);
    setFiltered(uncomplete);
  }, [todoList]);

  React.useMemo(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todoApp.todos') || '[]');
    if (storedTodos) {
      setTodoList(storedTodos);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('todoApp.todos', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (inputValue === '') {
      return;
    }
    setTodoList([...todoList, { id: uniqid(), task: inputValue, completed: false }]);
    setInputValue('');
  };

  const handleDel = (id: TodoListType["id"]) => {
    const newTodos = todoList.filter((item: TodoListType) => item.id !== id);
    setTodoList(newTodos);
  };

  const btnEditTodo = (item: TodoListType) => {
    setIsEdit(true);
    setEditedTodo(item.id);
    setInputValue(item.task);
  };

  const editTodo = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (inputValue === '') {
      return;
    }
    const newTodos = todoList.map((item: TodoListType) =>
      item.id === editedTodo ? { id: uniqid(), task: inputValue, completed: false } : item
    );
    setTodoList(newTodos);
    setIsEdit(false);
    setEditedTodo('');
    setInputValue('');
  };

  const handleCheck = (id: TodoListType['id'], completed: TodoListType['completed'], todo: TodoListType['task']) => {
    const newTodos = todoList.map((item: TodoListType) =>
      item.id === id ? { id: uniqid(), task: todo, completed } : item
    );
    setTodoList(newTodos);
  };

  return (
    <Page>
      <Title title='DailyDoings'/>
      <MainWrapper>
        <AddTask
          add={addTodo}
          todo={inputValue}
          input={setInputValue}
          isEdit={isEdit}
          setBtnToEdit={editTodo}
        />

        <FilterWrapper
          todoList={todoList}
          setFilter={setFilter}
          filterSwitch={filterSwitch}
        />

        <TodosMap
          todoList={filterSwitch ? filteredList : todoList}
          editBtn={btnEditTodo}
          deleteItem={handleDel}
          check={handleCheck}
        />
      </MainWrapper>
    </Page>
  );
};

export default App;