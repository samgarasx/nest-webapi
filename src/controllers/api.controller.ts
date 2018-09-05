import { Get, Controller } from '@nestjs/common';

@Controller()
export class ApiController {
  constructor() {}

  @Get("api")
  index(): string {
    return 'Welcome to Nest Web API'
  }
}
