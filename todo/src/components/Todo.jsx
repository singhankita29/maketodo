import React, { useState } from 'react';
import { Box, Button, Center, Input, CloseButton } from '@chakra-ui/react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleClose = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleAdd = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Todo List</h1>
      <Center>
        <Box border="1px solid red" p={4}>
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="enter todo"
            mb={2}
          />
          <Button onClick={handleAdd} colorScheme="blue" mr={2}>
            Add
          </Button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  border="1px solid red"
                  p={2}
                  flex="1"
                  mr={2}
                  borderRadius="md"
                  bg="gray.100"
                >
                  {todo}
                </Box>
                <CloseButton onClick={() => handleClose(index)} />
              </li>
            ))}
          </ul>
        </Box>
      </Center>
    </>
  );
};

export default Todo;
