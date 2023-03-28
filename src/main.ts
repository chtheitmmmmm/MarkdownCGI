import {program} from "commander";
import {MarkdownEngine} from "@shd101wyy/mume";

const engine = new MarkdownEngine({
    filePath: ".",
    projectDirectoryPath: "."
})


engine.htmlExport({
    offline: false
})
.then(value => {

})
.catch(reason => {

})