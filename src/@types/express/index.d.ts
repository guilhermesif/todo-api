declare namespace Express {
  interface Request {
    user?: {
      sub: string;
      email: string;
      iat: number;
      exp: number;
    };
  }
}
