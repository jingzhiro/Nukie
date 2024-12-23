const { SlashCommandBuilder, MessageFlags, EmbedBuilder  } = require("discord.js");
const { gpttoken } = require("../../config.json");
const OpenAI = require("openai");
const { getRandomCat } = require('../../catPack.js');

const openai = new OpenAI({
    apiKey: `${gpttoken}`
});

module.exports = {
    data: new SlashCommandBuilder()
        .setName('catgpt')
        .setDescription('Ask CatGPT a question!')
        .addStringOption(option =>
            option
                .setName('prompt')
                .setDescription('The prompt for CatGPT')
                .setRequired(true)
        ),
    async execute(interaction) {
        await interaction.reply({ content: 'Nukie is consulting their two brain cells...', flags: MessageFlags.Ephemeral });

        const prompt = interaction.options.getString('prompt');

        try {
            const res = await openai.chat.completions.create({
                messages: [
                    { role: "developer", content: "You are CatGPT, feel free to meow randomly in your answers" },
                    { role: "user", content: `${prompt}`}
                ],
                model: "gpt-4o",
                temperature: 1.25,
              });

            const embed = new EmbedBuilder()
                .setColor('Green')
                .setDescription(`${res.choices[0].message.content} ` + getRandomCat())

            await interaction.followUp({ embeds: [embed] });
        } catch(e) {
            console.log(e);
            return interaction.followUp({ 
                content: `Request failed with the status code: ${e.response.status}`,
                flags: MessageFlags.Ephemeral 
            })
        }
    }
};