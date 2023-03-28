

// Literale Typen


// Definition des literalen Typen
type Align = "left" | "right" | "center"

const alignText = (s: string, alignment: Align): string => {
    if (alignment === "left") {
        return s + "...."
    }
    if (alignment === "right") {
        return "...." + s
    }
    else {
        return ".." + s + ".."
    }

}

alignText("ananas", "center")


type OnlyTrue = true;

const aBoolean = (): OnlyTrue => {
    return true
}


export { }