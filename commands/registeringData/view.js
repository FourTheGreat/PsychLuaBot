const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('view')
		.setDescription('dá informações sobre um personagem registrado.')
		.addStringOption(option =>option
   .setName('personagem')
   .setDescription('o nome do personagem.')
   .setRequired(true)),

	async execute(interaction) {
		const e = interaction.options.getString('function')
		const r = 'opa, esse comando não funciona ainda, bobinho!'
		console.log(e)
		await interaction.reply({content:r,ephemeral:true});
	},
};