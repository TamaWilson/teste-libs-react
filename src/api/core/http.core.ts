export const methods = {
  get: 'get',
  post: 'post',
  update: 'put',
  delete: 'delete'
};

export const statusResponse = {
  200: {
    message: 'Ação realizada com sucesso'
  },
  400: {
    message: 'Alguns parâmetros estão inválidos.'
  },
  401: {
    message: 'Você não tem permissão para acessar o conteúdo.'
  },
  404: {
    message:
      'Existe algum erro no path de sua requisição / Página não encontrada.'
  },
  500: {
    message: 'Houver um erro interno.'
  }
};

export const http = {
  methods: methods,
  statusResponse: statusResponse
};
