# Gunakan Node.js sebagai base image
FROM node:16

# Set direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json ke container
COPY package*.json ./

# Instal dependencies
RUN npm install

# Salin seluruh kode aplikasi ke container
COPY . .

# Kompilasi TypeScript
RUN npm run build

# Ekspose port yang akan digunakan
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "dist/index.js"]
