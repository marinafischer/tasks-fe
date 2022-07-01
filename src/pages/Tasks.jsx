import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import verifyToken from '../helpers/verifyToken';
import getTasks from '../services/getTasks';
import deleteTask from '../services/deleteTasks';
import tasksStatus from '../helpers/taskSataus';
import postTask from '../services/postTask';
import putTask from '../services/updateTasks';

const Tasks = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [status, setStatus] = useState(1);
  const [type, setType] = useState('post');
  const [id, setId] = useState();

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data)
  }

  useEffect(()=>{
    async function fetchAPI(){
      await fetchTasks()
    };
    fetchAPI()
  }, [])
  

  useEffect(()=>{
    const token = verifyToken.empty(navigate);
    if(!token) navigate('/');
  }, [navigate]);

  useEffect(()=>{
    const token = verifyToken.expire(navigate);
    if(!token) navigate('/');
  }, [navigate]);

  useEffect(() => {
    if (task.length>=3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [task]);

  const editTask = (data) => {
    setType('put')
    setId(data.id)
    setTask(data.content)
    setStatus(data.status)
  }

  const delTask = async (taskId) => {
    const data = await deleteTask(taskId);
    setTasks(data);
  }

  const handleClick = async (e) => {
    if(e.target.value === 'post'){
      const insertData = {content: task, status}
      const data = await postTask(insertData);
      setTasks(data);
    } else {
      const insertData = {content: task, status};
      const data = await putTask(insertData, id);
      setTasks(data);
    }
    setTask('');
    setType('post');
  }
  
  return(
    <>
      <form>
        <input 
            type="text"
            name ="task"
            placeholder="digite sua tarefa"
            onChange={(e)=>setTask(e.target.value)}
            value={task}
        />
        <select onChange={(e)=> setStatus(e.target.value)}>
          <option value="1">Criada</option>
          <option value="2">Iniciada</option>
          <option value="3">Finalizada</option>
        </select>
        <button 
          type="button"
          disabled={ disabled }
          value={type}
          onClick={ handleClick }
        >
          {type === 'post' ? 'CRIAR':'EDITAR'}
        </button>
      </form>
      <ul>
        {
          tasks.map(task =>(
            <li key={task.id}>
              <h4>
                {task.content}
              </h4>
              <h5>
               {tasksStatus(task.status)}
              </h5>
              <button onClick={()=> editTask(task)}>
                editar
              </button>
              <button onClick={()=> delTask(task.id)}>
                deletar
              </button>
            </li>
          ))
        }
      </ul>
    </>
  )
}
export default Tasks;