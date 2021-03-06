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

Migrations can be added to `/server/db/migrations` as numericly prepended `.sql` files containing raw sql. Files that haven't been run yet will be executed in alphabetical order, and logged as having been run. Migrations are run with a command in the server container: `docker-compose run server sh yarn run migrate`

# todo


- shared prettier spec

- docker-compose prod (start not watch server)
- deploy/re-deploy bash script
