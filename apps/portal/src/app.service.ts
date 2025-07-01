import {
  Res,
  Body,
  Post,
  HttpCode,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AppService {
  readonly users = [
    {
      id: 1,
      role: 'developer',
      password: 'Developer@123',
      email: 'developer@developer.com',
      profile: {
        lastname: 'Developer',
        firstname: 'Developer',
      },
    },

    {
      id: 2,
      role: 'admin',
      password: 'Admin@123',
      email: 'admin@admin.com',
      profile: {
        lastname: 'Admin',
        firstname: 'Admin',
      },
    },
  ];

  getHello(): string {
    return `<h1>Hello from Portal App</h1>`;
  }

  @Post('auth/login')
  @HttpCode(200)
  login(
    @Body() data: { email: string; password: string },
    @Res() res: Response,
  ) {
    const user = this.users.find((user) => user.email === data.email);
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
