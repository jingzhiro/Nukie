const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { getRandomCat } = require('../../catPack.js');
const { weathertoken } = require('../../config.json');
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Replies with a weather summary of the week')
        .addStringOption(option => 
            option
                .setName('city')
                .setDescription('City to get a weather summary of')
                .setRequired(true))
        .addIntegerOption(option => 
            option
                .setName('days')
                .setDescription('However many days ahead (max: 7)')
        ),
    async execute(interaction) {
        interaction.reply('Fetching weather data...');

        const city = interaction.options.getString('city');
        let days = interaction.options.getInteger('days') ?? 1;
        days = (days > 7) ? 7 : days;

        const weatherUrl = `http://api.weatherapi.com/v1/forecast.json?key=${weathertoken}&q=${city}&days=7&aqi=no&alerts=no`;

        fetch(weatherUrl).then(async result => {
            if (!result.ok) {
                const { status, statusText } = result;
                await interaction.reply(`Error! ${status}: ${statusText} /ᐠ ╥ ˕ ╥マ`);
                return;
            }

            return result.json();
        }).then(result => {
            for(let i = 0; i < days; i++) {
                const { forecastday } = result.forecast;
                const { date, day: { mintemp_c: minTemp, maxtemp_c: maxTemp, avgtemp_c: avgTemp } } = forecastday[i];
                const condition = result.forecast.forecastday[i].day.condition.text;
                
                let conditionDescription = 'Don\'t forget sunscreen ~!';
                if (condition.includes('rain')) {
                    conditionDescription = 'Don\'t forget an umbrella ~!'
                }
                
                const dateObject = new Date(date);
                const dayName = daysOfWeek[dateObject.getDay()];
                
                const weatherEmbed = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setTitle('Nukie\'s Weather')
                    .setDescription(`${conditionDescription} ${getRandomCat()}`)
                    .addFields(
                        { name: `[${city}] ${dayName} ${date}`, value: `${condition}` },
                        { name: 'Min', value: `${minTemp}`, inline: true },
                        { name: 'Avg', value: `${avgTemp}`, inline: true },
                        { name: 'Max', value: `${maxTemp}`, inline: true }
                    )
                    .setTimestamp()
                interaction.channel.send({ embeds: [weatherEmbed] });
            }
        });
    }
};
