import jwt, { Secret, SignOptions } from "jsonwebtoken";

export type AuthJwtPayload = {
  id: number;
  email: string;
};

const ACCESS_SECRET: Secret = process.env.JWT_ACCESS_SECRET!;
const REFRESH_SECRET: Secret = process.env.JWT_REFRESH_SECRET!;

const accessOptions: SignOptions = {
  expiresIn: process.env.ACCESS_TOKEN_EXPIRY as SignOptions["expiresIn"],
};

const refreshOptions: SignOptions = {
  expiresIn: process.env.REFRESH_TOKEN_EXPIRY as SignOptions["expiresIn"],
};

export function generateAccessToken(payload: AuthJwtPayload) {
  return jwt.sign(payload, ACCESS_SECRET, accessOptions);
}

export function generateRefreshToken(payload: AuthJwtPayload) {
  return jwt.sign(payload, REFRESH_SECRET, refreshOptions);
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, ACCESS_SECRET);
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, REFRESH_SECRET);
}
