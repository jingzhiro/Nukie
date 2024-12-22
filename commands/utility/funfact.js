const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const math = require("mathjs");

const { getRandomCat } = require('../../catPack.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('funfact')
        .setDescription('Replies with a fun fact'),
    async execute(interaction) {
        const funEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Nukie\'s Fun Fact!')
            .setDescription(`${funfacts[math.randomInt(0, funfacts.length)]} ${getRandomCat()}`)
            
        interaction.channel.send({ embeds: [funEmbed] });
    }
};

const funfacts = [
    "A house cat's genome is 95.6% tiger, sharing many behaviours with their jungle ancestors",
    "Cats are nearsighted, but their peripheral vision and night vision are much better than humans",
    "Cats generally have 18 toes (5 on each front paw, 4 on each back paw)",
    "Cats can jump up to six times their length",
    "Cats actually do have nine lives (according to me)",
    "Cats make very little noise when walking around as they have thick, soft pads on their paws",
    "Cats use their long tails to balance themselves when they're jumping or walking along narrow ledges",
    "Cats use their whiskers to “feel” the world around them in an effort to determine which small spaces they can fit into",
    "Cats move both of their right paws first, then move both of their left paws",
    "Though cats can notice the fast movements of their prey, it often seems to them that slow-moving objects are actually stagnant",
    "Some cats are ambidextrous, but 40 percent are either left- or right-pawed",
    "Some cats can swim",
    "Cats typically sleep for 12 to 16 hours a day",
    "Cats are crepuscular, which means that they’re most active at dawn and dusk",
    "Cats can spend up to a third of their waking hours grooming",
    "Cats live longer when they stay indoors",
    "Cats’ purring may be a self-soothing behavior, since they make this noise when they’re ill or distressed, as well as when they’re happy",
    "Cats will refuse an unpalatable food to the point of starvation",
    "Many cats are actually lactose intolerant (like PJ)",
    "A cat with a question-mark-shaped tail is asking, “Want to play?”",
    "A slow blink is a “kitty kiss.” This movement shows contentment and trust",
    "Cats have a unique “vocabulary” with their owner — each cat has a different set of vocalizations, purrs and behaviors",
    "Cats have up to 100 different vocalizations — dogs only have 10",
    "If your cat approaches you with a straight, almost vibrating tail, this means that she is extremely happy to see you",
    "Kneading or making biscuits is a sign of contentment and happiness",
    "Meowing is a behavior that cats developed exclusively to communicate with people",
    "When a cat flops over, they are relaxed and showing trust",
    "When cats hit you with retracted claws, they’re playing, not attacking",
    "When your cat sticks their butt in your face, they are doing so as a gesture of friendship",
    "Your cat drapes its tail over another cat, your dog, or you as a symbol of friendship",
    "Cats are very fussy about their water bowls",
    "Cats like to sleep on things that smell like their humans",
    "Cats love to sleep in laundry baskets for their peep holes",
    "Cats often attack your ankles when bored",
    "Thieving behaviour is not uncommon among cats",
    "A group of kittens is called a kindle",
    "Cat breeders are called \"catteries\"",
    "Cats can drink sea water to survive",
    "Cats can dream",
    "White cats with blue eyes are prone to deafness",
    "White cats with blue eyes are limitless"
]