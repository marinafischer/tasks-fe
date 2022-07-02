const getStatus = (status) => {
  if(status === 1) return 'criada'
  if(status === 2) return 'iniciada'
  if(status === 3) return 'finalizada'
}

export  default getStatus;