import * as convict from "convict";
import {ConfigSchema, configSchema} from "./config.schema";

export class ConfigService {
  private readonly config: convict.Config<ConfigSchema>;
  
  constructor(filePath: string) {
    this.config = convict(configSchema).loadFile(filePath);
  }
  
  get(key: string): any {
    return this.config.get(key);
  }
}
