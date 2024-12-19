const { SlashCommandBuilder } = require("discord.js");
const math = require("mathjs");
const { getRandomCat } = require('../../catPack.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('rps')
        .setDescription('Play Rock, Paper, Scissors')
        .addStringOption(option => 
            option
                .setName('move')
                .setDescription('Choose rock, paper, or scissors!')
                .setRequired(true)
                .addChoices(
                    { name: 'Rock', value: 'Rock' },
                    { name: 'Paper', value: 'Paper' },
                    { name: 'Scissors', value: 'Scissors' }
                )),
    async execute(interaction) {
        const choices = ['Rock', 'Paper', 'Scissors'];

        const userChoice = interaction.options.getString('move');
        const botChoice = choices[math.randomInt(0, 2)];

        let result;
        if (userChoice == botChoice) {
            result = 'we drew!';
        } else if (
            (userChoice == 'Rock' && botChoice == 'Scissors') ||
            (userChoice == 'Paper' && botChoice == 'Rock') ||
            (userChoice == 'Scissors' && botChoice == 'Paper')
        ) {
            result = 'you win!';
        } else {
            result = 'I win!';
        }

        await interaction.reply(`You choose ${userChoice} and I choose ${botChoice}, so ${result} ${getRandomCat()}`);
    }
};
