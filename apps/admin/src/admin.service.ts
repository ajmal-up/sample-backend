import { Response } from 'express';
import { AppService } from 'apps/portal/src/app.service';
import {
  Res,
  Post,
  Body,
  HttpCode,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AdminService {
  constructor(private readonly appService: AppService) {}
  getHello(): string {
    return `<h1>Hello from Admin App</h1>`;
  }

  @Post('auth/login')
  @HttpCode(200)
  login(
    @Body() data: { email: string; password: string },
    @Res() res: Response,
  ) {
    const user = this.appService.users.find(
      (user) => user.email === data.email,
    );
    const validPassword = user?.password === data?.password;

    if (!user || !validPassword) {
      throw new UnauthorizedException('Invalid Login Details');
    }

    const token = '1234567890';

    return res.status(200).json({
      token,
      message: 'Login Successful',
      user: {
        id: user.id,
        role: user.role,
        email: user.email,
        lastname: user?.profile?.lastname,
        firstname: user?.profile?.firstname,
      },
    });
  }
}
