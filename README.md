# Uploadupia

Anonymous file uploader where users can upload files and share them, i used a fake s3 server localy to manage files

First, run the development server:

```bash
npm  npm install
# and
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_CONTENTFUL_SPACE_ID`

`NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`

`NEXT_PUBLIC_BACKEND_SERVER` = (https://file-uploader-api.onrender.com) or deploy https://github.com/mahdi22dev/s3-server or use docker-compose.yml file from https://github.com/mahdi22dev/s3-server/tree/main/api-local to run a backend server with s3 server runs localy

## frontend-Docker

the root folder contains docker-compose.yml to build and run next js app to start the build use:

```bash
docker compose -f "docker-compose.yml" up -d --build
```

## backend_server

i am using s3rver package to mock s3 server to run tests localy
the backend repo https://github.com/mahdi22dev/s3-server have 2 folders api and api-local , because i don't have any lunix server i could't deploy docker compose to run live so i made seperate folder called api-local contains docker-compose that use aws-cli image and localstack image

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://mahdi22dev.vercel.app)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/elmahdi-elidrissi/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/mahdiidris60201)
