const HOST = process.env.REACT_APP_HOST;
const PORT = process.env.REACT_APP_PORT;

export const ROUTES_DEVELOPMENT = {
  baseUrl: `${HOST}:${PORT}`
};

export const ROUTES_PRODUCTION = {
  baseUrl: ''
};

export const ENVIRONMENT = {
  development: ROUTES_DEVELOPMENT.baseUrl,
  production: ROUTES_PRODUCTION.baseUrl
};
