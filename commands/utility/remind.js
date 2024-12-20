const { SlashCommandBuilder } = require("discord.js");
const { getRandomCat } = require("../../catPack");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remind')
        .setDescription('Reminds you to do something, hopefully')
        .addIntegerOption(option => option
            .setName('minutes')
            .setDescription('Sends a reminder after x minutes')
            .setRequired(true))
        .addStringOption(option => option
            .setName('message')
            .setDescription('Task to be reminded of')
        ),
    async execute(interaction) {
        const minutes = interaction.options.getInteger('minutes');
        if (minutes < 0) {
            await interaction.reply('Please enter a positive number of minutes !');
            return;
        }
        const message = interaction.options.getString('message');

        if (minutes == 1) {
            await interaction.reply(`Got it! I'll remind you in 1 minute ~! ${getRandomCat()}`);
        } else {
            await interaction.reply(`Got it! I'll remind you in ${minutes} minutes ~! ${getRandomCat()}`)
        }

        setTimeout(() => {
            if (message == null) {
                interaction.followUp(`${interaction.user} Reminder reminder! ${getRandomCat()}`);
            } else {
                interaction.followUp(`${interaction.user} Reminder reminder! '${message}' ${getRandomCat()}`);
            }
        }, minutes * 60 * 1000);
    }
};
