const { SlashCommandBuilder } = require("discord.js");
const { getRandomCat } = require('../../catPack.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meow')
        .setDescription('Replies with Meow!'),
    async execute(interaction) {
        await interaction.reply(`mrreow! ${getRandomCat()}`);
    }
};