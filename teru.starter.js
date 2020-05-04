module.exports = {
	tokens: {
		license_year: {
			title: 'License Year',
			defaultValue: 2020,
		},
		prettier: {
			type: 'boolean',
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
