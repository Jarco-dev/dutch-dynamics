import { Config } from "@/types";
import { GatewayIntentBits } from "discord.js";

const config: Config = {
    // Bot colors
    COLORS: {
        DEFAULT: "#F88038"
    },

    // Message type emojis and colors
    MSG_TYPES: {
        SUCCESS: { EMOJI: "✅", COLOR: "#00FF00" },
        INVALID: { EMOJI: "❌", COLOR: "#F88038" },
        ERROR: { EMOJI: "⚠", COLOR: "#FF0000" },
        TIME: { EMOJI: "⏱", COLOR: "#F88038" }
    },

    // Discord client options
    CLIENT_OPTIONS: {
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildModeration,
            GatewayIntentBits.GuildMembers
        ],
    },

    // Bot version (acquired from package.json)
    VERSION: require("../package.json").version
};

export default config;
