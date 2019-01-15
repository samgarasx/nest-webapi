import { Schema } from 'convict';

export interface ConfigSchema {
  server: {
    host: string;
    port: number;
  };
  database: {
      host: string;
      name: string;
      user: string;
      password: string;
  };
}

export const configSchema: Schema<ConfigSchema> = {
  server: {
    host: {
      doc: 'Server host',
      format: '*',
      default: 'localhost'
    },
    port: {
      doc: 'Server port',
      format: 'port',
      default: 3000
    },
  },
  database: {
    host: {
      doc: 'Database host',
        format: '*',
        default: 'localhost'
    },
    name: {
      doc: 'Database name',
      format: String,
      default: ''
    },
    user: {
      doc: 'Database user',
      format: String,
      default: ''
    },
    password: {
      doc: 'Database password',
      format: String,
      default: '',
      sensitive: true
    }
  }
};
