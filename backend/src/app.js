import express from "express";
import morgan from "morgan";
import taskRouter from "./routes/taskRoutes.js";
import userRouter from "./routes/userRoutes.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import notFound from "./middlewares/notFound.js";
import cors from "cors"; 
import authRouter from "./routes/authRoutes.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

app.use("/tasks", taskRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.use(notFound);
app.use(globalErrorHandler);

export default app;
