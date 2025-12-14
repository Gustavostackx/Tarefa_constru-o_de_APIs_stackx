import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  price: z.number().positive("O preço deve ser um número positivo")
});
