import express, { Request, Response, NextFunction } from "express";
import { routes } from "./route";
import { AppError } from "./utils/AppError";
import { ZodError } from "zod";

const PORT = 3333;
const app = express();

app.use(express.json());
app.use(routes);

app.use((error: any, request: Request, response: Response, _: NextFunction): any => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    return response.status(400).json({ message: "Validation error!", issues: error.format() });
  }

  return response.status(500).json({
    message: "Internal Server Error",
    error: error.message,
   
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
