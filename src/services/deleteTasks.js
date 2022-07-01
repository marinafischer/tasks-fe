import api from './api';

const deleteTask = async (id) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type' : 'application/json',
    'Authorization': token
  }
  try {
    const {data} = await api.delete(`/tasks/${id}`, {headers});
    return(data);
  } catch (error) {
    console.log(error.response);
  }
}

export default deleteTask;