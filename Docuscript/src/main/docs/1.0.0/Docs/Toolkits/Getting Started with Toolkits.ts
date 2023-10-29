RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Toolkits/Getting Started with Toolkits";
    
    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, div, br, code, link
    }) => {
        
    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});