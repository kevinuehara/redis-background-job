# redis-background-job
These project uses Redis, Bull and NodeJS to create an simple queue of jobs. Must create a account in SMTP email testing plataform, in this project I'm using Mailtrap.

# Prerequisites
- NodeJS
- Docker and Docker-Compose

- Create a .env file in project root and declare the environment variables:

<table>
  <tr>
    <th>key</th>
    <th>type</th>
  </tr>
  <tr>
    <td>MAIL_HOST</td>
    <td>String</td>
  </tr>
  <tr>
    <td>MAIL_PORT</td>
    <td>Integer</td>
  </tr>
  <tr>
    <td>MAIL_USER</td>
    <td>String</td>
  </tr>
  <tr>
    <td>MAIL_PASS</td>
    <td>String</td>
  </tr>
  <tr>
    <td>REDIS_HOST</td>
    <td>String</td>
  </tr>
  <tr>
    <td>REDIS_PORT</td>
    <td>Integer</td>
  </tr>
</table>

# How to run?
```
npm install
docker-compose up -d
npm run:dev
```
