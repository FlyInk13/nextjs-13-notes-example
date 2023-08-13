# NextJS Notes example
Example of using:
- NextJS 13 with app routes
- get and post api requests
- fetch api requests
- server and client components

## Commands
- Run dev server:
  - ```npm run dev```
- Run production server:
  - ```npm run build```
  - ```npm run start```
- Build and run docker image:
  - ```docker build . -t flyink13/nextjs-13-notes-example```
  - ```docker run -p 3000:3000 -v "$(pwd)"/data:/data -d flyink13/nextjs-13-notes-example```
- Run last docker image
  - ```docker pull ghcr.io/flyink13/nextjs-13-notes-example:release```
  - ```docker run -p 3000:3000 -v "$(pwd)"/data:/data -d ghcr.io/flyink13/nextjs-13-notes-example:release```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFlyInk13%2Fnextjs-13-notes-example)
