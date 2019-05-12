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

# todo

- payloads or whatever proper convention is for the actions

- mysql with migrations
- ci works on circle
- shared declarations
- shared prettier spec
- swap express for koa

- readme install setup instructions
- docker-compose prod (start not watch server)
- deploy/re-deploy bash script

Note: when changing env vars for the client, the client must be rebuilt, as that is when env vars are built into the clients transpiled code