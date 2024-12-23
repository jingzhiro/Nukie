const { SlashCommandBuilder } = require("discord.js");
const { getRandomCat } = require('../../catPack.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('About me!'),
    async execute(interaction) {
        await interaction.reply(`Meow meow Nukie, meow meow meow cat helper. Meow meow general-purpose meow; meow meow meow. Meow! Meow meow, meow meow /help meow meow - meow. ${getRandomCat()}`);
    }
};