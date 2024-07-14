import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize } = format;

// Custom log formats
const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const errorFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message} - ERROR OCCURRED!`;
});

const warnFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message} - WARNING!`;
});

// Logger instance
const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format((info) => {
      if (info.level === 'error') {
        return errorFormat.transform(info);
      }
      if (info.level === 'warn') {
        return warnFormat.transform(info);
      }
      return customFormat.transform(info);
    })(),
  ),
  transports: [
    new transports.Console({ format: colorize() }),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/warn.log', level: 'warn' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

export default logger;
