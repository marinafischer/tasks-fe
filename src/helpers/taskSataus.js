const getStatus = (status) => {
  if(status === 1) return 'status: criada'
  if(status === 2) return 'status: iniciada'
  if(status === 3) return 'status: finalizada'
}

export  default getStatus;