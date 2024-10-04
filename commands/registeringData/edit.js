const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('edit')
		.setDescription('editar informações de um personagem.')
		.addStringOption(option =>option
   .setName('personagem')
   .setDescription('o nome do personagem.')
   .setRequired(true))
  .addStringOption(option=>option
   .setName('campo')
   .setDescription('o campo que quer editar.')
   .setRequired(true)
  )
  .addStringOption(option=>option
   .setName('valores')
   .setDescription('os valores que serão passados ao campo, em formato JSON.')
   .setRequired(true)
  ),

	async execute(interaction) {
		const e = interaction.options.getString('function')
		const r = 'opa, esse comando não funciona ainda, bobinho! XP'
		console.log(e)
		await interaction.reply({content:r,ephemeral:true});
	},
 async autocomplete(interaction){
  const focusedValue = interaction.options.getString('valores');
  const choices = ['calculate distance between two objects','calculate angle between two objects'];
  const filtered = choices.filter(choice=>choice.toLowerCase().includes(focusedValue.toLowerCase()));
  await interaction.respond(
   filtered.map(choice=>({name:choice,value:choice}))
  )
 },
};