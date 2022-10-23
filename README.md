# Полноценный backend для CMS систем на NodeJs, express (REST API), mongoDB, 

### Что умеет делать приложение:
- Регистрация и авторизация пользователя с сохранением токена
- Создание и получеие 'заказов'
- Создание, удаление, обновление категорий
- Создание, удаление, обновление позиций
- Вывод аналитики 

## Routes
|| Auth | Order | Category | Position | Analytics |
|:---|:------:|:-----:|:----:|:-----:|:-----:|
| **Path** | /api/login(POST) /api/register(POST) | /api/order(GET) /api/order(POST) | /api/category(GET) /api/category/:id(GET) /api/category/:id(DELETE) /api/category(POST) /api/category/:id (PATCH) | /api/position/:category(GET) /api/position(POST) /api/position/:id(PATCH) /api/position/:id(DELETE) | /api/analytics/overview(GET) /api/analytics/analytics(GET)

## Models
|| Category | Position | User | Order |
|:---|:------:|:-----:|:----:|:-----:|
| **field** | name, imageSrc, user | name, cors, category, user | email, password | date, order, list(name, quantity, cost), user |

___

### Каждая логическая составляющая разделена на ветки:

- **main** - ветка всего проекта

- **entry-point** - Сконфигурирован сервер, база данных, роутеры.
пакеты: (body-parser, cors, express, mongoose, dotenv, morgan, nodemon)

- **auth** - Функционал авторизации и регистрации, middleware: обработчик ошибок, проверка пользователя по токену.
пакеты: (bcryptjs, jsonwebtoken, passport, passport-jwt)

- **api** - Реализован функционал категорий, заказов, позиций и загрузки изображений.
пакеты: (multer moment)


### .env файл

```
PORT=<укажите порт>
LINK_DB=<подключение к базе данных>
JWT_SECRET=<секретный ключ>
```

### Clone projects

```
git clone https://github.com/SilantievMax/CRM.git
cd CRM
npm start
```