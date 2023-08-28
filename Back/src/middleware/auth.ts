import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"

interface AuthRequest extends Request {
  auth?: {
    userId: string
  }
}

export const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.headers.authorization && process.env.TOKEN) {
    try {
      const token = req.headers.authorization.split(" ")[1]
      const decodedToken = jwt.verify(token, process.env.TOKEN) as JwtPayload
      const userId = decodedToken.userId as string
      req.auth = {
        userId: userId,
      }
      next()
    } catch (error) {
      res.status(401).json({ error })
    }
  }
}
