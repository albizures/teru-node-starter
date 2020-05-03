module.exports = {
	tokens: {
		license_year: {
			title: 'License Year',
			defaultValue: new Date().getFullYear(),
		},
		prettier: {
			type: 'boolean',
			defaultValue: false,
		},
	},
	files: {
		'./prettier.config.js': {
			onlyWhen: {
				prettier: true,
			},
		},
	},
};
