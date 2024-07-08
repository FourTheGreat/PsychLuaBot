const { SlashCommandBuilder } = require('discord.js');
const replies = {
 "debugPrint":[
  '`debugPrint`:',
  'prints a value to the top-left corner of the screen.',
  'used for testing, to visualize variables in the code as it runs.',
  'parameters:',
  'debugPrint( text:Any, color:String )',
  'example usage:',
  '```lua',
  'debugPrint(10)--displays the number 10 on the screen',
  'debugPrint("blehh")--displays the text "blehh" on screen',
  'local test = 100',
  'debugPrint(test)--displays the value of test (100) on screen',
  'debugPrint("this is red","FF0000")--displays the text "this is red" on screen, with the color red.',
  'debugPrint({1,2,10,5})--displays the table on screen.',
  '```',
  'observations:',
  'tables cannot be concatenated, so they can only be printed on their own.',
  'likewise, booleans need to be converted using `tostring` if being concatenated. (debugPrint(text..tostring(boolean)))',
  'functions CANNOT be printed.'
 ],
	"setProperty":[
		'`setProperty`:',
		'modifies a property in the game\'s current gameplay state.',
		'can be used to modify a property in the game, or in an object.',
		'parameters:',
		'`setProperty( property:String, value:Any )`',
		'example usage:',
		'```lua',
		'function onCreatePost()',
  ' --example 1',
		' setProperty("health", 2)--sets property "health" to 2.',
  ' --example 2',
		' setProperty("boyfriend.x", 100)--sets boyfriend\'s "x" property to 100.',
		'end',
		'```observations:',
		'a `String` value can be used on any property. (for instance, using `setProperty(\'health\', \'2\')` will still set `health` to `2`, even though the value is a String, not a Number.)'
	],
	"getProperty":[
		'`getProperty`:',
		'retrieves a property in the game\'s current gameplay state.',
		'can be used to grab a property in the game, or in an object.',
		'parameters:',
		'`getProperty( Property:String )`',
		'example usage:',
		'```lua',
		'h = getProperty("health")--retrieves the "health" property\'s current value, and saves it onto the "h" variable.',
		'debugPrint(h)--prints the "h" variable\'s value to the top-left corner of the screen.',
		'```observations:',
		'if the property does not exist, it will return the given `Property` parameter.'
	],
 "makeLuaSprite":[
  '`makeLuaSprite`',
  'creates a image or graphic to be viewed in the game.',
  'paremeters:',
  '`makeLuaSprite( tag:String, image:String, x:Number, y:Number )`',
  'example usage:',
  '```lua',
  'makeLuaSprite("sprite","num0",100,100)--makes a sprite named "sprite", loading the image "num0", at the position x:100,y:100.',
  'addLuaSprite("sprite")--makes the sprite visible onscreen.',
  '```observations:',
  'a sprite is not immediately visible upon creation. you must use `addLuaSprite` to make the sprite visible to the player.',
  'when searching for the specified image, psych looks for `mods/currentModName/images/(image).png`, `mods/images/(image).png`, and then `assets/shared/images/(image).png`, in that order.'
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
		.setName('functionhelp')
		.setDescription('provides help documentation for functions.')
		.addStringOption(option =>
			option
				.setName('function')
				.setDescription('The function you need help with.')
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
  const choices = ['debugPrint','getProperty','setProperty','makeLuaSprite'];
  const filtered = choices.filter(choice=>choice.startsWith(focusedValue));
  await interaction.respond(
   filtered.map(choice=>({name:choice,value:choice}))
  )
 },
};