// definicao da urn/recurso base
const pathRecurso = '/path_do_recurso';

interface TypeParamEndpoint {
  parametro: string;
}

export const endpoints = {
  recursoComParametro: ({ parametro }: TypeParamEndpoint) => {
    return {
      acao: `${pathRecurso}`,
      acaoComParametro: `${pathRecurso}/${parametro}`
    };
  },
  recursoSemParametro: () => {
    return {
      acao: `${pathRecurso}`
    };
  }
};
