module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/recommended",
        "plugin:vue/strongly-recommended",
        "plugin:vue/essential",
        "eslint:recommended"
    ],
    "parserOptions": {
        "parser": "@babel/eslint-parser"
    },
    rules: {
        'no-implicit-coercion': 'error',
        'require-await': 'error',
        // js rules
        'linebreak-style': 'off', // for windows
        'no-nested-ternary': 'off',
        'consistent-return': 'off',
        'no-use-before-define': ['warn', { functions: true, classes: true, variables: true }],
        yoda: 'error',
        indent: 'off',
        /*  TAKE A NOTICE: indent turned off because eslint fall with warning message
            Module Warning (from ./node_modules/eslint-loader/dist/cjs.js):                                                                                                               friendly-errors 17:23:27
            Cannot read property 'range' of null
        */
        'template-curly-spacing': 'off',
        'max-len': ['off'],
        'no-console': [
            'warn',
            {
                allow: [
                    'warn',
                    'error'
                ]
            }
        ],
        'no-debugger': 'warn',
        camelcase: 'off',
        'no-shadow': ['error', { builtinGlobals: false, allow: ['state'] }],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxEOF: 1
            }
        ],
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off',
        'no-prototype-builtins': 'off',
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true
            }
        ],
        'prefer-const': ['error', {
            destructuring: 'any',
            ignoreReadBeforeAssign: false
        }],
        semi: ['error', 'always'],
        curly: 'off',
        'import/order': 'off',
        'arrow-parens': 'off',
        'unicorn/prefer-includes': 'off',
        'unicorn/escape-case': 'off',
        'import/no-mutable-exports': 'off', // to fix
        'no-useless-call': 'off', // to fix
        'object-shorthand': 'off', // to fix
        'operator-linebreak': 'off', // to fix
        // 'space-before-function-paren': ['error', 'never'],
        'space-before-function-paren': 'off', // remove in future
        // vue rules
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                closeBracket: 0,
                ignores: []
            }
        ],
        'vue/max-attributes-per-line': ["error", {
            "singleline": {
                "max": 1
            },
            "multiline": {
                "max": 1
            }
        }],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always'
            }
        ],
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/no-v-html': 'off',
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 0,
                switchCase: 0,
                ignores: []
            }
        ],
        'vue/match-component-file-name': [
            'error',
            {
                extensions: ['jsx'],
                shouldMatchCase: false
            }
        ],
        'vue/no-unused-components': ['error', {
            ignoreWhenBindingPresent: true
        }],
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                registeredComponentsOnly: true
            }
        ]
    }
};
