 npx sequelize-cli db:migrate --config src/config/database.js

create table using migration
npx sequelize-cli migration:generate --name create-items-table --config src/config/database.js --migrations-path src/migrations

migration
npx sequelize-cli model:generate --name Item --attributes user_id:integer,title:string,description:text --config src/config/database.js --models-path src/models