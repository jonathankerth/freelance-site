module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	extends: [
		"plugin:vue/vue3-essential", // or 'plugin:vue/vue3-strongly-recommended' or 'plugin:vue/vue3-recommended' for stricter rules
		"eslint:recommended",
	],
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
		"vue/no-unused-vars": "warn",
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"variants",
					"responsive",
					"screen",
				],
			},
		],
	},
};
``;
