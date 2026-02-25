import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let mantas = [
  { id: 1, modelo: "Manta Luxo", fornecedor: "Fornecedor A", preco: 120 },
  { id: 2, modelo: "Manta Premium", fornecedor: "Fornecedor B", preco: 95 },
  { id: 3, modelo: "Manta Econômica", fornecedor: "Fornecedor C", preco: 80 },
];

app.get("/", (req, res) => {
  res.json({ mensagem: "API Mantas rodando com sucesso 🚀" });
});

app.get("/mantas", (req, res) => {
  res.json(mantas);
});

app.get("/mantas/:id", (req, res) => {
  const manta = mantas.find(m => m.id == req.params.id);
  if (!manta) return res.status(404).json({ erro: "Manta não encontrada" });
  res.json(manta);
});

app.post("/mantas", (req, res) => {
  const novaManta = {
    id: mantas.length + 1,
    modelo: req.body.modelo,
    fornecedor: req.body.fornecedor,
    preco: req.body.preco,
  };
  mantas.push(novaManta);
  res.status(201).json(novaManta);
});

app.get("/buscar-precos", (req, res) => {
  const modelo = req.query.modelo;
  const resultado = mantas.filter(m =>
    m.modelo.toLowerCase().includes(modelo.toLowerCase())
  );
  res.json(resultado);
});

app.get("/melhor-preco", (req, res) => {
  const menor = mantas.reduce((prev, current) =>
    prev.preco < current.preco ? prev : current
  );
  res.json(menor);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
