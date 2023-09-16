// simple nodejs react app using graphql

steps to install:-

cd /home/user/.. to docroot

git@github.com:jaimbh/gql.git

cd server

npm init -y

npm i express nodemon @apollo/server graphql cors body-parser axios @types/axios

cd ..

rename client dir in other location for now

npx create-react-app client

cd client

npm i @babel/plugin-proposal-private-property-in-object @babel/plugin-transform-private-property-in-object @apollo/client graphql

replace public and src dir with the ones in the renamed client dir

change uri ip in src/index.js

cd ..

npm init -y

npm i concurrently

to change port of react, edit to "start": "PORT=[portnumber] react-scripts start" to client/package.json scripts

add "start": "nodemon index.js" to server/package.json scripts (use nodemon bin path if needed)

add "client": "cd client && npm start",
    "server": "cd server && npm start",
    "dev": "concurrently \"npm run client\" \"npm run server\""
	to /package.json scripts

npm run dev
