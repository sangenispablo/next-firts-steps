This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker

Para crear el dockerfile usar el template que se lo saca del mismo repo de next aqui
https://github.com/vercel/next.js/tree/canary/examples/with-docker

hacer un pequeño cambio en el ```next.config.js```

Crear la imagen de docker con el siguiente comando:
```docker build -t nextjs-first-steps .```

Para levantar la imagen dentro de un container:
```docker container run -p 8080:3000 nextjs-first-steps```