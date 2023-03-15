# REST API Products

A simple repository with a REST API for products and product categories. Just for the purpose of practice.


## Stack
- NodeJS >= v16.16.0
- Express  
- Javascript  
- Postgresql  
- Sequelize
- Docker  
- Unit Tests with Jest


## Documentation

To access Swagger Documentation in your browser: `http://localhost:3000/api/v1/docs/`


## Running locally

To run this project locally, follow the steps:
1. Have Docker installed and your service started;
2. Have Node.js installed;
3. Run the command `cp .env.default .env` for env variables;
4. After cloning the project, run the command `npm install` to install the dependencies;
5. To up Docker and database, run the command `docker-compose up`.

In another tab, follow the steps:
6. Run all migrations to create all tables and associations with the command `npx sequelize-cli db:migrate`;
7. Run all seeders to populate the database with the command `npx sequelize-cli db:seed:all`;
8. Run the command `npm run dev`.

Then, you can open in your browser the documentation with this URL `http://localhost:3000/api/v1/docs/`.

Also, in root directory, we have the file `.postman_collection.json`. You can use it and import in your Postman to tests all endpoints.