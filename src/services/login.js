import api from '../services/api';

const postUser = async (data) => {
  const headers = {
    'Content-Type' : 'application/json',
  }
  try {
    const apiPost = await api.post('/user', data, {headers});
    return apiPost.data
  } catch (error) {
    throw new Error({message:'Usuário ou Senha inválido'})
  }
}

export default postUser;

