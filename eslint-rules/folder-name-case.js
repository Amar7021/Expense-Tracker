import path from "path"

export const folderNameCaseRule = {
    meta: {
        type: "suggestion",
        docs: {
            description: "enforce kebab-case for folder names",
            category: "Stylistic Issues",
            recommended: true,
        },
        schema: [],
        messages: {
            invalidFolder: "Folder name '{{name}}' must be kebab-case.",
        },
    },
    create(context) {
        const filePath = context.getFilename()

        // Only lint files in src/
        if (!filePath.includes(`${path.sep}src${path.sep}`)) return {}

        const folders = filePath
            .split(path.sep)
            .slice(filePath.split(path.sep).indexOf("src") + 1, -1)

        folders.forEach(folder => {
            if (!/^[a-z0-9-]+$/.test(folder)) {
                context.report({
                    loc: { line: 1, column: 0 },
                    messageId: "invalidFolder",
                    data: { name: folder },
                })
            }
        })

        return {}
    },
}
