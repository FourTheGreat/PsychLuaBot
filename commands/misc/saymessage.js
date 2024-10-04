const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('saymessage')
		.setDescription('falar uma menságem.')
		.addStringOption(option =>option
   .setName('mensagem')
   .setDescription('a mensagem.')
   .setRequired(true)),

	async execute(interaction) {
		await interaction.reply({content:interaction.options.getString('mensagem')});
	},
};