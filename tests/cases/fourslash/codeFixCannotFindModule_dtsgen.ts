/// <reference path='fourslash.ts' />

// @Filename: /node_modules/plus/index.js
////module.exports = function plus(x, y) { return x * y; };

// @Filename: /a.ts
////import plus = require("plus");
////plus(2, 2);

// @Filename: /tsconfig.json
////{
////    "compilerOptions": {}
////}

goTo.file("/a.ts");
verify.codeFix({
    description: "Generate types for 'plus'",
    newFileContent: {
        "/tsconfig.json":
//TODO: make issue for bad closing brace indent
`{
    "compilerOptions": {
        "typeRoots": ["node_modules", "types"]
}
}`,
        "types/plus.d.ts":
`export = plus;

declare function plus(x: any, y: any): any;

`,
    },
});

TODO: fails because of \r inserted by dtsgen. Make it use textChanges!!!
