# Використовуємо базовий образ Node.js
FROM node:20-alpine

# Встановлюємо директорію робочого простору в контейнері
WORKDIR /app

# Копіюємо package.json та package-lock.json для установки залежностей
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо решту файлів проекту в контейнер
COPY . .

# Будуємо проект
RUN npm run build

# Вказуємо порт, на якому буде працювати додаток
EXPOSE 3000

# Запускаємо сервер для додатку React
CMD [ "npm", "start" ]
