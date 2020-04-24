# Joe mama discord bot

Don't ask me who Joe is.

## Setup

1. Create a `.env` file in the project root with the `DISCORD_TOKEN` containing your Discord bot token.
2. Run `npm i`
3. Run `npm run dev` or `npm start`
    - `npm run dev` autoreloads on file changes

## Docker

The joe mama discord bot can also be ran with Docker. If you want to run a development container, you should just use `docker-compose up`. For production, use `docker-compose -f $BASE/docker-compose.prod.yml up -d`. These commands will respectively run `npm run dev` and `npm start` in your Docker container. The development container mounts your local volume. The production version looks for a `.env` file, so make sure you have one.
 
## Adding to Discord

A client is running on my server, you can add this to your discord server using this URL:
https://discordapp.com/api/oauth2/authorize?client_id=698580605318725712&scope=bot&permissions=2048
