# fullstack-typescript-starter

- dockerised server and client containers
- React TS client
	- redux
	- sagas
	- graphql apollo. 
- Koa server
	- graphql
	- mysql with migrations
- Testing
- CI
- lint/prettier
- shared type declarations between each container, along with per container types.

## set up

- install dependencies for each container: `docker-compose run client yarn && docker-compose run server yarn`
- `docker-compose up`, you can now browse to `http://localhost:3000`


## work on

Shared typescript declarations can go in the `/shared/declarations.ts` file.

# todo


- mysql with migrations
- shared declarations
- shared prettier spec

- readme install setup instructions
- docker-compose prod (start not watch server)
- deploy/re-deploy bash script
