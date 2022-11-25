module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint",
        "simple-import-sort"
    ],
    "rules": {
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit",
                "overrides": {
                    "accessors": "explicit",
                    "constructors": "explicit",
                    "methods": "explicit",
                    "properties": "explicit",
                    "parameterProperties": "explicit"
                }
            }
        ],
        "@typescript-eslint/prefer-readonly": ["error"],
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "@typescript-eslint/array-type": ["error"],
        "@typescript-eslint/brace-style": [
            "error",
            "1tbs"
        ],
        "@typescript-eslint/prefer-includes": ["error"],
        "@typescript-eslint/space-before-blocks": ["error"],
        "@typescript-eslint/type-annotation-spacing": [
            "error",
            {
                "before": false,
                "after": true,
                "overrides": {
                    "arrow": {
                        "before": true,
                        "after": true
                    }
                }
            }
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variableLike",
                "format": ["camelCase"]
            },
            {
                "selector": "memberLike",
                "modifiers": ["private"],
                "format": ["camelCase"]
            },
            {
                "selector": "memberLike",
                "modifiers": ["public"],
                "format": ["camelCase"]
            },
            {
                "selector": "property",
                "modifiers": ["private"],
                "format": ["camelCase"],
                "leadingUnderscore": "require"
            },
            {
                "selector": "property",
                "modifiers": ["public"],
                "format": ["camelCase"]
            },
            {
                "selector": "parameter",
                "format": ["camelCase"],
                "leadingUnderscore": "allow"
            },
            {
                "selector": "class",
                "format": ["PascalCase"]
            },
            {
                "selector": "interface",
                "format": ["PascalCase"]
            },
            {
                "selector": "enum",
                "format": ["PascalCase"]
            }
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "comma-spacing": [
            "error"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "indent": [
            "error",
            4
        ],
        "keyword-spacing": [
            "error"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-debugger": "warn",
        "no-trailing-spaces": [
            "error"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": [
            "error"
        ],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "space-before-blocks": [
            "error"
        ],
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "space-in-parens": [
            "error"
        ],
        "space-infix-ops": [
            "error"
        ],
        "space-unary-ops": [
            "error"
        ]
    }
};
