const { SlashCommandBuilder } = require("discord.js");
const { getRandomCat } = require('../../catPack.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Replies with a list of all commands'),
    async execute(interaction) {
        await interaction.reply(`mrreow! WIP ${getRandomCat()}`);
    }
};