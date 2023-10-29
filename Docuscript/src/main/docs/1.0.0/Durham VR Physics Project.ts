RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Durham VR Physics Project";
    
    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        p, frag, br, link
    }) => {
        frag(
            p(
                "This is the Docuscript document for the VR Physics project directed by Professor Pippa Petts. The Github rep can be found ",
                link("https://github.com/randomuserhi/XR-Internship", "here"), "."
            ),
            br(),
            "This project was made a long time ago, and heavily needs a refactor :)"
        );
    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});