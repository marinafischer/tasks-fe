import jwt_decode from 'jwt-decode';

const verifyToken = {
  expire: ()=>{
    try {
      const token = localStorage.getItem('token');
      const decode = jwt_decode(token);
      if (decode.exp*1000 <= Date.now()) {
        alert('faça login para continuar');
        localStorage.setItem('token', '');
        return false;
      }
      return true
    } catch(e) {
      localStorage.setItem('token', '');
      return false;
    }
  },
  empty: () => {
    const token = localStorage.getItem('token');
    if (!token || token === '') {
      alert('faça login para continuar');
      return false;
    }
    return true
  }
}

export default verifyToken;