module.exports = {
	tokens: {
		license_year: {
			title: 'License Year',
			defaultValue: 2020,
		},
		prettier: {
			message: 'Do you want to use Prettier?',
			defaultValue: false,
		},
		author: {},
		name: {},
		email: {},
	},
	files: [
		'LICENSE',
		'package.json',
		{
			onlyWhen: { prettier: true },
			filename: 'prettier.config.js',
		},
	],
};
