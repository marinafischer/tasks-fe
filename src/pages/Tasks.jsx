import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RiDeleteBin2Fill, RiEditBoxFill } from 'react-icons/ri';
import '../styles/Tasks.css'
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
    if(type === 'post') {
      setType('put')
      setId(data.id);
      setTask(data.content);
      setStatus(data.status);
    } else {
      setType('post')
      setId();
      setTask('');
      setStatus(1);
    }
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
      <form className="Task_Form">
        <input
            className="Task_Input" 
            type="text"
            name ="task"
            placeholder="digite sua tarefa"
            onChange={(e)=>setTask(e.target.value)}
            value={task}
        />
        <select 
          className="Status_Select"
          onChange={(e)=> setStatus(e.target.value)}
        >
          <option value="1" className="Status_Option">Criada</option>
          <option value="2">Iniciada</option>
          <option value="3">Finalizada</option>
        </select>
        <button 
          className={`Create_Button ${type}`}
          type="button"
          disabled={ disabled }
          value={type}
          onClick={ handleClick }
        >
          {type === 'post' ? 'CRIAR':'EDITAR'}
        </button>
      </form>
      {
        tasks.length === 0 ? 
        <div className="No_Contet"> 
          Você não possui tarefas no momento 
        </div> :
        <ul className="Tasks_List">
        <li className="Task_Item">
          <div className="Task_container content">
            <h4 className="Task_Content Title">
              TAREFA
            </h4>
          </div>
          <div className="Task_container">
            <h4 className="Task_Content Title">
              STATUS
            </h4> 
          </div>
          <div className="Task_container">
            <h4 className="Task_Content Title">
              AÇÕES
            </h4> 
          </div>
        </li>
        {
          tasks.map(task =>(
            <li key={task.id} className="Task_Item">
              <div className="Task_container content">
                <h4 className="Task_Content">
                  {task.content}
                </h4>
              </div>
              <div className="Task_container">
                <h4 className="Task_Content">
                {tasksStatus(task.status)}
                </h4>
              </div>
              <div className="Task_container">
                <button 
                  className="Action_button Edit"
                  onClick={()=> editTask(task)}
                >
                  <RiEditBoxFill />
                </button>
                <button 
                  className="Action_button Delete"
                  onClick={()=> delTask(task.id)}
                >
                  <RiDeleteBin2Fill />
                </button>
              </div>
            </li>
          ))
        }
      </ul>
      }
    </>
  )
}
export default Tasks;