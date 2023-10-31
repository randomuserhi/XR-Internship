RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Toolkits/Fields Toolkit";
    const snippets = `_snippets/${path}`;
    
    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, img, br, frag, link, ol, ul, icode, code, i, pl
    }) => {
        p("Work in progress: contact ", icode([], "christopher.e.teo@durham.ac.uk"), ".");
    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});