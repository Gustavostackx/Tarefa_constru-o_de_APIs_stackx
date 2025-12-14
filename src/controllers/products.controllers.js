import { readJSON, writeJSON } from "../utils/file.js";

export async function createProduct(req, res) {
  try {
    const { name, price } = req.body;

    const products = await readJSON();

    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name,
      price
    };

    products.push(newProduct);
    await writeJSON(products);

    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getAllProducts(req, res) {
  try {
    const products = await readJSON();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getProductById(req, res) {
  try {
    const products = await readJSON();
    const product = products.find(p => p.id === Number(req.params.id));

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    return res.json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function updateProduct(req, res) {
  try {
    const products = await readJSON();
    const index = products.findIndex(p => p.id === Number(req.params.id));

    if (index === -1) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    products[index] = {
      ...products[index],
      ...req.body
    };

    await writeJSON(products);
    return res.json(products[index]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function deleteProduct(req, res) {
  try {
    const products = await readJSON();
    const filtered = products.filter(p => p.id !== Number(req.params.id));

    if (filtered.length === products.length) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    await writeJSON(filtered);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
