import DevelopmentConfig from "./dev";
import ProductionConfig from "./prod";

export function getEnvironment(_env) {
  if (_env) {
    return _env;
  }

  return "development";
}

const env = process.env.NODE_ENV;

const config = {
  production: {
    ...ProductionConfig,
  },
  development: {
    ...DevelopmentConfig,
  },
};

export default config[getEnvironment(env)];
