import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';
import './TodoList.scss';
import React, { useCallback } from 'react';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRender = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <List
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={68.5}
      rowRenderer={rowRender}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};
export default React.memo(TodoList);
