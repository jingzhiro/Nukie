const { SlashCommandBuilder, MessageFlags } = require("discord.js");
const { getRandomCat } = require('../../catPack.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Replies with a list of all commands'),
    async execute(interaction) {
        await interaction.reply({ content: `Currently, I only know how to meow, help, remind, roll, play rock paper scissors (rps), and give information about the server/user ~ ! ${getRandomCat()}`, flags: MessageFlags.Ephemeral });
    }
};