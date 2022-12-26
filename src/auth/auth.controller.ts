import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Req() request: Request) {
    console.log(request.body);
    const { email, password } = request.body;
    return this.authService.login(email, password);
  }
}
