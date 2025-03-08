import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your-secret-key', // app.module.ts와 auth.module.ts에서 사용한 것과 동일한 시크릿 키
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
} 