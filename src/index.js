import express from "express";
import productRoutes from "./routes/products.routes.js";

const app = express();

app.use(express.json());
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
