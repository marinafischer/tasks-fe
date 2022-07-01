import api from './api';

const postTask = async (task) => {
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type' : 'application/json',
    'Authorization': token
  }
  try {
    const {data} = await api.post(`/tasks`,task, {headers});
    return(data);
  } catch (error) {
    console.log(error.response);
  }
}

export default postTask;