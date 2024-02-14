# Use a imagem oficial do Node.js como base
FROM node:latest

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todos os arquivos do diretório atual para o diretório de trabalho
COPY . .

# Expõe a porta 3000 para acessar a aplicação no navegador
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
