This is the repository of a book-centered ecommerce web app. This uses NextJS as the full-stack framework. 

## Instructions

Follow the instructions on how to run the development server:

1. Clone this repository via `git clone`
2. Move to the app directory via `cd libro-at-aklat`
3. Install dependencies via `npm i`
4. Add an `.env` file in the app directory and paste the following:

```
DATABASE_URL="mysql://root:hn3mTPRD@localhost:3306/libroataklat"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=d194X0MzPkM1lafjakjkaozioufgisogbg=
```
5. Migrate database via `npx prisma migrate dev`
6. Finally, run the server via `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


