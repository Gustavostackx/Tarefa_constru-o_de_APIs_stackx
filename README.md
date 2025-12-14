# Tarefa_constru-o_de_APIs_stackx
Este projeto consiste em uma API REST desenvolvida com Node.js e Express, com o objetivo de praticar conceitos fundamentais de APIs, como CRUD, persistência de dados, validação de entradas e documentação
API Products - Documentação 

 

Este documento descreve o funcionamento da API Products desenvolvida em Node.js e Express. 

 

OBJETIVO DO PROJETO 

Criar uma API REST com persistência em arquivo JSON, validação de dados e documentação. 

 

TECNOLOGIAS 

- Node.js 

- Express 

- Zod 

- fs (File System) 

 

COMO EXECUTAR O PROJETO 

1. Instale as dependências: 

npm install 

 

2. Gere o Prisma Client (se necessário): 

npx prisma generate 

 

3. Inicie o servidor: 

npm run dev 

 

Caso apareça o erro abaixo ao executar o códigoo, faça o seguinte; 

Error: @prisma/client did not initialize yet 

 

Execute: 

npx prisma generate 

 

COMO TESTAR A API 

Utilize o Postman ou Insomnia. (utilizei o Postman) 

Base URL: 

http://localhost:3000 

 

ROTAS DE PRODUTOS 

POST /products 

GET /products 

GET /products/:id 

PUT /products/:id 

DELETE /products/:id 

 

EXEMPLO DE BODY (POST /products) 

{ 

  "name": "Produto Exemplo", 

  "price": 100 

} 

 

PERSISTÊNCIA DE DADOS 

Os dados são armazenados no arquivo: 

src/data/products.json 

 

VALIDAÇÃO 

Os dados são validados com Zod garantindo consistência. 

 

CONCLUSÃO 

O projeto atende aos requisitos de persistência, validação e documentação solicitados. 

 

Obrigado! 
