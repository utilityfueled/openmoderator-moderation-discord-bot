import { Filter } from 'content-checker';
import { Message } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.OPEN_MODERATOR_API_KEY;

if (!apiKey) {
    console.error('API key not found. Please add it to the .env file.');
}

const aiFilter = new Filter({ openModeratorAPIKey: apiKey });

export async function checkMessageForProfanity(message: Message): Promise<boolean> {
    const config = {
        // checkManualProfanityList is optional and defaults to false; it checks for the words in lang.ts (if under 50 words) before hitting the AI model. Note that this affects performance.
        checkManualProfanityList: true,
        // provider defaults to "google-perspective-api" (Google's Perspective API); it can also be "openai" (OpenAI Moderation API) or "google-natural-language-api" (Google's Natural Language API)
        provider: 'google-perspective-api',
    };

    try {
        const response = await aiFilter.isProfaneAI(message.content, config);
        return response.profane;
    } catch (error) {
        console.error('Error checking message:', error);
        return false;
    }
}
