import api from './api';

const putTask = async (task, id) => {
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type' : 'application/json',
    'Authorization': token
  }
  try {
    const {data} = await api.put(`/tasks/${id}`,task, {headers});
    return(data);
  } catch (error) {
    console.log(error.response);
  }
}

export default putTask;