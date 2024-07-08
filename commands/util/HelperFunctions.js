const { SlashCommandBuilder } = require('discord.js');
const replies = {
 "calculate distance between two objects":[
  '```lua',
  'function distanceBetween(obj,target)',
  ' local dx = getProperty(obj..".x") - getProperty(target..".x")',
  ' local dy = getProperty(obj..".y") - getProperty(target..".y")',
  ' return math.sqrt(dx*dx,dy*dy)',
  'end'
 ],
 "calculate angle between two objects":[
  '```lua',
  'function angleBetween(obj,target)',
  ' local dx = getProperty(target..".x") - getProperty(obj..".x")',
  ' local dy = getProperty(target..".y") - getProperty(obj..".y")',
  ' return math.atan2(dx,dy)',
  'end'
 ],
}
const getText = (v) => {
	const lines = replies[v];
	let str = '';
	for (i of lines){
		str = str + i + '\n'
	}
	return str
}
module.exports = {
	data: new SlashCommandBuilder()
		.setName('searchfunctions')
		.setDescription('provides premade helper functions for your code.')
		.addStringOption(option =>
			option
				.setName('function')
				.setDescription('The function you need.')
				.setRequired(true)
    .setAutocomplete(true)),

	async execute(interaction) {
		const e = interaction.options.getString('function')
		const r = getText(e)
		console.log(e)
		await interaction.reply({content:r,ephemeral:true});
	},
 async autocomplete(interaction){
  const focusedValue = interaction.options.getFocused();
  const choices = ['calculate distance between two objects','calculate angle between two objects'];
  const filtered = choices.filter(choice=>choice.toLowerCase().includes(focusedValue.toLowerCase()));
  await interaction.respond(
   filtered.map(choice=>({name:choice,value:choice}))
  )
 },
};