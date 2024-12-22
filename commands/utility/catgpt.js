const { SlashCommandBuilder } = require("discord.js");
const { getRandomCat } = require('../../catPack.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('catgpt')
        .setDescription('WIP'),
    async execute(interaction) {
        await interaction.reply('WIP');
    }
};