const { SlashCommandBuilder } = require('discord.js');
const replies = {
	"setProperty":[
		'`setProperty`:',
		'modifies a property in the game\'s current gameplay state.',
		'can be used to modify a property in the game, or in an object.',
		'parameters:',
		'`setProperty( property:Text, value:Any )`',
		'example usage:',
		'```lua',
		'function onCreatePost()',
		' setProperty("health", 2)--sets property "health" to 2.',
		' setProperty("boyfriend.x", 100)--sets boyfriend\'s "x" property to 100.',
		'end',
		'```observations:',
		'a `Text` value can be used on any property. (for instance, using `setProperty(\'health\', \'2\')` will still set `health` to `2`, even though the value is a Text, not a Number.)'
	],
	"getProperty":[
		'`getProperty`:',
		'retrieves a property in the game\'s current gameplay state.',
		'can be used to grab a property in the game, or in an object.',
		'parameters:',
		'`getProperty( Property:Text )`',
		'example usage:',
		'```lua',
		'h = getProperty("health")--retrieves the "health" property\'s current value, and saves it onto the "h" variable.',
		'debugPrint(h)--prints the "h" variable\'s value to the top-left corner of the screen.',
		'```observations:',
		'if the given property does not exist, it will return the '
	]
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
		.setName('luahelp')
		.setDescription('provides documentation for functions.')
		.addStringOption(option =>
			option
				.setName('function')
				.setDescription('The function you need help with.')
				.setRequired(true)
				.addChoices(
					{name:'setProperty',value:'setProperty'},
					{name:'getProperty',value:'getProperty'}
				)),
	async execute(interaction) {
		const e = interaction.options.getString('function')
		const r = getText(e)
		console.log(r)
		await interaction.reply(r);
	},
};