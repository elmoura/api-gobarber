import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';

function errorHandler(
  error: Error | AppError,
  request: Request,
  response: Response,
  _: NextFunction
): Response {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}

export default errorHandler;
