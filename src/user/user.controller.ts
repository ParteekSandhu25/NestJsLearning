import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGaurd } from 'src/auth/gaurd';

// custom guard which extends AuthGaurd for authentication
@UseGuards(JwtGaurd)
@Controller('users')
export class UserController {
  @Get('me')
  // @GetUser -> is a custom decorator which extract the user from the Request and return it...
  getMe(@GetUser() user: User) {
    return user;
  }
}
