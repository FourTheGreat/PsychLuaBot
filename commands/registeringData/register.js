const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('register')
		.setDescription('registrar um personagem.')
		.addStringOption(option =>option
   .setName('personagem')
   .setDescription('o nome do personagem.')
   .setRequired(true))
  .addStringOption(option=>option
   .setName('dados')
   .setDescription('os dados do personagem, em formato JSON.')
   .setRequired(true)
  ),

	async execute(interaction) {
		const e = interaction.options.getString('function')
		const r = 'opa, esse comando não funciona ainda, bobinho! XP'
		console.log(e)
		await interaction.reply({content:r,ephemeral:true});
	},
};