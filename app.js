import express from "express";
import openapi from "openapi-comment-parser";
import swaggerUiExpress from "swagger-ui-express";

const spec = openapi();
const app = express();

import productRoutes from "./routes/productRoutes.js";

app.use('/v2/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(spec));
app.use(express.json());

app.use("/product", productRoutes);

export default app;
