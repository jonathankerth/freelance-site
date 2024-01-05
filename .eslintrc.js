module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
	parserOptions: {
		parser: "@babel/eslint-parser",
		requireConfigFile: false,
	},
	rules: {
		"vue/no-unused-vars": "warn",
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	},
};
