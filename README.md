# Moderation Discord Bot

## AI Features Powered by OpenModerator.com

[![discord.js](https://img.shields.io/github/package-json/dependency-version/KevinNovak/Discord-Bot-TypeScript-Template/discord.js)](https://discord.js.org/)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
[![Pull Requests](https://img.shields.io/badge/Pull%20Requests-Welcome!-brightgreen)](https://github.com/KevinNovak/Discord-Bot-TypeScript-Template/pulls)

## Introduction

This is the ultimate Discord bot for AI and regular content moderation. It relies on the content-checker npm library and the OpenModerator.com API to provide text and image moderation.

This bot was built on a template created by [Kevin Novak](https://github.com/KevinNovak/Discord-Bot-TypeScript-Template)

## Features

### AI Features:

-   Event listener checks the text of each message for profanity and deletes profane messages.

### Non-AI Features:

-   Basic command structure.
-   Rate limits and command cooldowns.
-   Welcome message when joining a server.
-   Shows server count in bot status.
-   Posts server count to popular bot list websites.
-   Support for multiple languages.

### Developer Friendly:

-   Written with TypeScript.
-   Uses the [discord.js](https://discord.js.org/) framework.
-   Built-in debugging setup for VSCode.
-   Written with [ESM](https://nodejs.org/api/esm.html#introduction) for future compatibility with packages.
-   Support for running with the [PM2](https://pm2.keymetrics.io/) process manager.
-   Support for running with [Docker](https://www.docker.com/).

### Scales as Your Bot Grows:

-   Supports [sharding](https://discordjs.guide/sharding/) which is required when your bot is in 2500+ servers.
-   Supports [clustering](https://github.com/KevinNovak/Discord-Bot-TypeScript-Template-Master-Api) which allows you to run your bot on multiple machines.

## Event Listener

## messageCreate

The `messageCreate` event listener checks the text of each message for profanity and deletes profane messages. In order
to use this feature, you must have an API key from OpenModerator.com and set OPEN_MODERATOR_API_KEY in your .env file. You can sign up for an API key at [OpenModerator.com](https://openmoderator.com).

Note: the bot will not delete server admins' messages unless you grant the bot Administrator permissions in Server Settings -> Roles -> OpenModerator -> Permissions -> Advanced Permissions (this is not default)

## Commands

This bot has a few example commands which can be modified as needed.

### Help Command

A `/help` command to get help on different areas of the bot or to contact support:

![](https://i.imgur.com/UUA4WzL.png)

![](https://i.imgur.com/YtDdmTe.png)

![](https://i.imgur.com/JXMisap.png)

### Info Command

A `/info` command to get information about the bot or links to different resources.

![](https://i.imgur.com/0kKOaWM.png)

### Test Command

A generic command, `/test`, which can be copied to create additional commands.

![](https://i.imgur.com/lqjkNKM.png)

### Dev Command

A `/dev` command which can only be run by the bot developer. Shows developer information, but can be extended to perform developer-only actions.

![](https://i.imgur.com/2o1vEno.png)

### Welcome Message

A welcome message is sent to the server and owner when the bot is added.

![](https://i.imgur.com/QBw8H8v.png)

## Setup

1. Copy example config files.
    - Navigate to the `config` folder of this project.
    - Copy all files ending in `.example.json` and remove the `.example` from the copied file names.
        - Ex: `config.example.json` should be copied and renamed as `config.json`.
2. Obtain a bot token.
    - You'll need to create a new bot in your [Discord Developer Portal](https://discord.com/developers/applications/).
        - See [here](https://www.writebots.com/discord-bot-token/) for detailed instructions.
        - At the end you should have a **bot token**.
3. Modify the config file.
    - Open the `config/config.json` file.
    - You'll need to edit the following values:
        - `client.id` - Your discord bot's [user ID](https://techswift.org/2020/04/22/how-to-find-your-user-id-on-discord/).
        - `client.token` - Your discord bot's token.
4. Install packages.
    - Navigate into the downloaded source files and type `npm install`.
5. Register commands.
    - In order to use slash commands, they first [have to be registered](https://discordjs.guide/creating-your-bot/command-deployment.html).
    - Type `npm run commands:register` to register the bot's commands.
        - Run this script any time you change a command name, structure, or add/remove commands.
        - This is so Discord knows what your commands look like.
        - It may take up to an hour for command changes to appear.

## Start Scripts

You can run the bot in multiple modes:

1. Normal Mode
    - Type `npm start`.
    - Starts a single instance of the bot.
2. Manager Mode
    - Type `npm run start:manager`.
    - Starts a shard manager which will spawn multiple bot shards.
3. PM2 Mode
    - Type `npm run start:pm2`.
    - Similar to Manager Mode but uses [PM2](https://pm2.keymetrics.io/) to manage processes.
