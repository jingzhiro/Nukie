const { SlashCommandBuilder } = require("discord.js");
const math = require("mathjs");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Responds with a random number on a standard die or an integer between the given bounds')
        .addIntegerOption(option => 
            option
                .setName('min')
                .setDescription('Lower limit (default: 1)'))
        .addIntegerOption(option => 
            option
                .setName('max')
                .setDescription('Upper limit')),
    async execute(interaction) {
        const min = interaction.options.getInteger('min');
        const max = interaction.options.getInteger('max');

        let randomInt;
        if (min !== null && max === null) {
            randomInt = math.randomInt(1, min);
        } else if (min === null && max !== null) {
            randomInt = math.randomInt(1, max);
        } else if (min !== null && max !== null) {
            randomInt = math.randomInt(min, max);
        } else {
            randomInt = math.randomInt(1, 6).toString();
        }

        await interaction.reply(randomInt.toString());
    }
};
