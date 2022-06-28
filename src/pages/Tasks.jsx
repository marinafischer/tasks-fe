import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import verifyToken from '../helpers/verifyToken';
import getTasks from '../services/getTasks';

const Tasks = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
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
  
  return(
    <>
      <ul>
        {
          tasks.map(task =>(
            <li key={task.id}>{task.content}</li>
          ))
        }
      </ul>
    </>
  )
}
export default Tasks;