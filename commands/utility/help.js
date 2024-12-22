const { SlashCommandBuilder, MessageFlags } = require("discord.js");
const { getRandomCat } = require('../../catPack.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Replies with a list of all commands'),
    async execute(interaction) {
        await interaction.reply({ content: `I know how to meow, remind, roll, play rock paper scissors (rps), give fun facts about cats, and see into the future for weather updates ~! ${getRandomCat()}`, flags: MessageFlags.Ephemeral });
    }
};