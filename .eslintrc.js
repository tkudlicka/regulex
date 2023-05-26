module.exports = {
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['__tests__/**', 'lib/**'],
    root: true,
    env: {
        node: true,
    },
    rules: {
        'no-param-reassign': [
            2,
            {
                props: false,
            },
        ],
        'class-methods-use-this': 'off',
        'no-unsafe-return': 'off',
        'no-return-await': 'off',
        'import/no-cycle': 'off',
        'no-plusplus': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
};