## Запуск проекту у Docker

1. Встановіть Docker на свою систему.
2. Перейдіть до директорії проекту.
3. виконайте команду `cd Backend`, щоб перейти в директорію де знаходиться файл `docker-compose.yml`.
4. Виконайте команду `docker-compose up` для запуску проекту.
5. Перевірте, чи контейнери успішно запущені та працюють.
6. Відкриваємо браузер і переходимо по силці `http://localhost`

## Конфігурація проекту

- `Backend/docker-compose.yml`: Файл конфігурації Docker Compose для запуску проекту.
- `Backend/Dockerfile`: Файл Dockerfile для збирання образу backend.
- `front/Dockerfile`: Файл Dockerfile для збирання образу front.
- `Backend/nginx.conf`: Файл конфігурвції nginx.