import api from './api';

const getTasks = async () => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type' : 'application/json',
    'Authorization': token
  }
  try {
    const { data } = await api.get('/tasks', {headers});
    return data;
  } catch (error) {
    console.log(error.response);
    return([]);
  }
}

export default getTasks;