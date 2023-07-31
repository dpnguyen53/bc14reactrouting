import DevelopmentConfig from "./dev";
import ProductionConfig from "./prod";

export function getEnvironment(_env) {
  if (_env) {
    return _env;
  }

  return "development";
}

const env = process.env.REACT_APP_STAGE;

const config = {
  production: {
    ...ProductionConfig,
  },
  development: {
    ...DevelopmentConfig,
  },
};

export default config[getEnvironment(env)];
