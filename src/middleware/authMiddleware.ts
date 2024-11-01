import { Request, Response, NextFunction } from 'express';

export const requireLogin = (req: Request, res: Response, next: NextFunction) => {
    // Middleware untuk autentikasi sesi atau cookie
    if (req.session && req.session.userId) {
        return next();
    }
    return res.status(401).json({ message: 'Unauthorized' });
};
