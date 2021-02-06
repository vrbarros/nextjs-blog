module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
    'import/resolver': {
      alias: {
        extensions: ['.js'],
        map: [['@', '.']],
      },
    },
  },
  env: {
    jest: true,
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:sonarjs/recommended'],
  parser: 'babel-eslint',
  plugins: [
    'simple-import-sort',
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
    'sonarjs',
    'formatjs',
  ],
  rules: {
    'sonarjs/no-all-duplicated-branches': 1,
    'sonarjs/no-element-overwrite': 1,
    'sonarjs/no-extra-arguments': 1,
    'sonarjs/no-identical-conditions': 1,
    'sonarjs/no-identical-functions': 1,
    'sonarjs/no-identical-expressions': 1,
    'sonarjs/no-one-iteration-loop': 1,
    'sonarjs/no-use-of-empty-return-value': 1,
    'sonarjs/cognitive-complexity': 1,
    'sonarjs/max-switch-cases': 1,
    'sonarjs/no-collapsible-if': 1,
    'sonarjs/no-collection-size-mischeck': 1,
    'sonarjs/no-duplicate-string': 1,
    'sonarjs/no-duplicated-branches': 1,
    'sonarjs/no-inverted-boolean-check': 1,
    'sonarjs/no-redundant-boolean': 1,
    'sonarjs/no-redundant-jump': 1,
    'sonarjs/no-same-line-conditional': 1,
    'sonarjs/no-small-switch': 1,
    'sonarjs/no-unused-collection': 1,
    'sonarjs/no-useless-catch': 1,
    'sonarjs/prefer-immediate-return': 1,
    'sonarjs/prefer-object-literal': 1,
    'sonarjs/prefer-single-boolean-return': 1,
    'sonarjs/prefer-while': 1,
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'always-multiline'],
    'linebreak-style': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/named': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    indent: [2, 2, { SwitchCase: 1 }],
    'jsx-a11y/aria-props': 2,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/destructuring-assignment': 0,
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'require-yield': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'formatjs/no-offset': 2,
    'formatjs/no-id': 2,
    'formatjs/no-multiple-plurals': 2,
    'formatjs/no-multiple-whitespaces': 2,
    'formatjs/enforce-placeholders': 2,
    'formatjs/enforce-description': 2,
    'formatjs/enforce-default-message': 2,
    'formatjs/enforce-plural-rules': [2, { one: true, other: true, zero: false }],
    'no-restricted-imports': [
      'error',
      { patterns: ['@material-ui/*/*/*', '!@material-ui/core/test-utils/*'] },
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
  },
  overrides: [
    {
      files: ['components/**/*.test.*'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
