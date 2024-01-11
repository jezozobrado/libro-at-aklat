This is the repository of a book-centered ecommerce web app. This is deployed in Vercel at [https://libro-at-aklat-test.vercel.app](https://libro-at-aklat-test.vercel.app/)

## To open the app in development:

1. Clone this repository via `git clone`
2. Move to the app directory via `cd libro-at-aklat`
3. Install dependencies via `npm i`
4. Add an `.env` file in the app directory and paste the following:

```
DATABASE_URL=mysql://199qt5lg83zvuabbw162:pscale_pw_smFuNgUJ8soiC5KvLyWq4I1UPk5JPtMOsKoCbB1q6Vg@gcp.connect.psdb.cloud/libro-at-aklat?sslaccept=strict
SHADOW_DATABASE_URL=mysql://root:hn3mTPRD@localhost:3306/libroataklat
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=d194X0MzPkM1lafjakjkaozioufgisogbg=
```
5. Migrate database via `npx prisma migrate dev`
6. Finally, run the server via `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


