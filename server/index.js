import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { config } from 'dotenv';
import { logger } from './utils/logger.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import consultationRoutes from './routes/consultations.js';
import resourceRoutes from './routes/resources.js';
import reviewRoutes from './routes/reviews.js';
import { errorHandler } from './middleware/errorHandler.js';

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/reviews', reviewRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});