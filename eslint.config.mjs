import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
	// Global ignores
	{
		ignores: [`build/**`, `public/**`, `node_modules/**`],
	},

	// Base JS recommended rules
	js.configs.recommended,

	// TypeScript recommended rules
	...tseslint.configs.recommended,

	// React recommended (flat config)
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat[`jsx-runtime`],

	// JSX accessibility
	jsxA11yPlugin.flatConfigs.recommended,

	// React Hooks
	{
		plugins: {
			'react-hooks': reactHooksPlugin,
		},
		rules: {
			'react-hooks/rules-of-hooks': `error`,
			'react-hooks/exhaustive-deps': `warn`,
		},
	},

	// Project-wide settings
	{
		files: [`src/**/*.{ts,tsx,js,jsx}`],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: `module`,
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		settings: {
			react: {
				version: `detect`,
			},
		},
		rules: {
			indent: [`warn`, `tab`],
			quotes: [`warn`, `backtick`],
			semi: [`error`, `always`],
			'no-implied-eval': `error`,
			'no-invalid-this': `error`,
			'no-shadow': `error`,
			'no-console': `warn`,
			yoda: `warn`,
		},
	},
);
