import path from "path"

export const jsxExtensionRule = {
    meta: {
        type: "problem",
        docs: {
            description: "enforce .jsx extension for files containing JSX",
        },
        schema: [],
        messages: {
            shouldBeJsx: "File contains JSX but is not using .jsx extension.",
            shouldNotBeJsx:
                "File does not contain JSX but uses .jsx extension.",
        },
    },

    create(context) {
        const filename = context.getFilename()
        const ext = path.extname(filename)

        let hasJSX = false

        return {
            JSXElement() {
                hasJSX = true
            },
            JSXFragment() {
                hasJSX = true
            },

            "Program:exit"() {
                if (filename.includes("node_modules")) return

                if (hasJSX && ext !== ".jsx") {
                    context.report({
                        loc: { line: 1, column: 0 },
                        messageId: "shouldBeJsx",
                    })
                }

                if (!hasJSX && ext === ".jsx") {
                    context.report({
                        loc: { line: 1, column: 0 },
                        messageId: "shouldNotBeJsx",
                    })
                }
            },
        }
    },
}
