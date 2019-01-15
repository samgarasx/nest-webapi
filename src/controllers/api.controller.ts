import { Get, Controller } from '@nestjs/common';

@Controller()
export class ApiController {
  @Get('api')
  index(): string {
    return 'Welcome to Nest Web API!';
  }
}
