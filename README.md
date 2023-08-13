# NextJS Notes example
Example of using get and post api requests, fetch, server and client components in NextJS 13

## Commands
- Run dev server:
  - ```npm run dev```
- Run production server:
  - ```npm run build```
  - ```npm run start```
- Build and run docker image:
  - ```docker build . -t flyink13/nextjs-13-notes-example```
  - ```docker run -p 3000:3000 -v "$(pwd)"/data:/data -d flyink13/nextjs-13-notes-example```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
