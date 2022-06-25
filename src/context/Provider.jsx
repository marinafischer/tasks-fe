import {useState} from 'react';
import TasksContext from './TasksContext';
import {initialTasksStates} from '../helpers/constants'; 

const Provider = ({children}) => {
  const [tasks, setTasks] = useState(initialTasksStates);
  const [token, setToken] = useState('');

  const context = {tasks, setTasks, token, setToken}

  return (
    <TasksContext.Provider value={context}>
      {children}
    </TasksContext.Provider>
  )
};

export default Provider;