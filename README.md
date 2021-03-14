# stagewood-interview

Build a simple Login/Register webpage

**Preview**

![](stagewood.gif)

**Set up**
  *git clone https://github.com/captainflo/stagewood-interview.git
  
  *npm install (Server and Client side)

  - prisma/schema.prisma 
    *datasource db {
    *provider = "postgresql" (change to mysql if using it)
    *url      = env("DATABASE_URL")
    *}
}
  *file .env insert your DATABASE_URL="mysql://xxxx:xxxxx@localhost:8889/xxxxx" 
  *npx prisma migrate dev --name init --preview-feature
  
  - run app
    *npm run dev

**Technologies Used**

**Backend**

- node
- npm
- @prisma/client
- apollo-server
- bcryptjs
- concurrently
- graphql
- jsonwebtoken
- ...

**Front-End**

- react
- redux
- redux-thunk
- redux-form
- react-redux
- react-router-dom
- graphql
- bootstrap
- @apollo/client
- ...

[Live Demo](https://stagewood-inter.herokuapp.com/)
