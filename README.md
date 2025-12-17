Documentação da API – Após revisão solicitada 

1. Visão Geral do Projeto 

Este projeto consiste em uma API REST desenvolvida em Node.js com Express. O objetivo é demonstrar persistênciaa de dados em arquivo JSON, validação de dados e documentação clara da API. 

2. Tecnologias Utilizadas 

- Node.js 
- Express 
- Zod (validação) 
- fs (persistência em JSON) 
- Prisma (dependência instalada, não obrigatória para esta etapa) 

3. Estrutura de Pastas 

src/ 
├─ controllers/ 
├─ routes/ 
├─ utils/ 
├─ validations/ 
└─ data/products.json 

4. Persistência de Dados em JSON 

Os dados são armazenados no arquivo products.json localizado em src/data. 
A API utiliza o módulo nativo fs para leitura e escrita do arquivo sempre que ocorre uma operação de criação, atualização ou exclusão. 

5. Validação de Dados 

A validação é feita com a biblioteca Zod. 
Campos obrigatórios: 
- name: string (mínimo 3 caracteres) 
- price: número positivo 
 
Requisições inválidas retornam status 400. 

6. Rotas da API 

POST /products – Cadastrar produto 
GET /products – Listar todos os produtos 
GET /products/:id – Buscar produto por ID 
PUT /products/:id – Atualizar produto 
DELETE /products/:id – Remover produto 

7. Exemplos de Requisição (Postman) 

POST http://localhost:3000/products 
Body (JSON): 
{ 
  "name": "Mouse Gamer", 
  "price": 199.90 
} 
 
Resposta esperada: status 201 com o produto criado. 

8. Como Executar o Projeto 

1. Instalar dependências: npm install 
2. Iniciar servidor: npm run dev 
3. Acessar: http://localhost:3000 

9. Como Evitar Erro do Prisma 

Caso apareça o erro: 
Error: @prisma/client did not initialize yet 
 
Execute: 
npx prisma generate 

10. Como Testar a API 

Utilize o Postman ou Insomnia. 
Configure o método HTTP, informe a URL e envie o corpo da requisição em JSON. 

11. Considerações Finais 

O projeto atende aos requisitos da tarefa ao demonstrar persistência em JSON, validação de dados e documentação clara da API. 
