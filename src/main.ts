import {MarkdownEngine} from "@shd101wyy/mume";

process.stdin.resume()

let markdown = ""

const engine = new MarkdownEngine({
    filePath: ".",
    projectDirectoryPath: "."
})

process.cwd()

engine.htmlExport({
    offline: false
})
.then(value => {

})
.catch(reason => {

})