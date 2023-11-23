const got = require('got')
const {
	secondsToHms,
	updateNow,
	bot,
	// genButtonMessage,
} = require('../lib/')
const Config = require("../config")
command(
	{
		pattern: 'update$',
		fromMe: true,
		desc: 'Check new updates.',
		type: 'user',
	},
	async (message, match) => {
		const update = await git.log([Config.BRANCH + "..origin/" + Config.BRANCH]);
		if (!update.length) return await message.send('*Bot is up-to-date.*')
		await message.send(
			`${update.length} updates\n\n${update.join('\n').trim()}`
		)
		// return await message.send(
		// 	await genButtonMessage(
		// 		[{ id: 'update now', text: 'UPDATE NOW' }],
		// 		`*Updates*\n${update.join('\n').trim()}`,
		// 		`${update.length} updates`
		// 	),
		// 	{},
		// 	'button'
		// )
	}
)

command(
	{
		pattern: 'update now$',
		fromMe: true,
		desc: 'Bot To Update.',
		type: 'user',
	},
	async (message, match) => {
		const isupdate = await git.log([Config.BRANCH + "..origin/" + Config.BRANCH]);
		if (!isupdate.length)
			return await message.send('*Bot is up-to-date.*\n*Nothing to Update.*')
		await message.send('_Updating..._')
		const e = await updateNow()
		if (e) return await message.send(e)
		return await message.send('_Updated_')
	}
)
