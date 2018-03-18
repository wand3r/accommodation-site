import { join } from "path"
import { readdirSync, statSync } from "fs"
import isImage from "is-image"
import sizeOf from "image-size"

const dictionaryPath = "/home/mlody/Pictures/temp"
const outputDir = "photos/after-renovation"

const result =
    readdirSync(dictionaryPath)
    .filter((fileName) => isImage(fileName) && fileName.includes("x0.15"))
    .map((fileName) => {
        const { width, height } = sizeOf(join(dictionaryPath, fileName))
        return {
            src: join(outputDir, fileName),
            width, height,
        }
    });

console.log(result);