RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Toolkits";
    const snippets = `_snippets/${path}`;
    
    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, img, br, frag, link, ol, ul, icode, code, i, pl
    }) => {
        p("Toolkits are essentially Unity Assets that were designed to make developing for this project easier.");
        br();

        h(1, "Mandatory");
        p("As per ", pl(["Docs/Toolkits/Getting Started with Toolkits"], "Getting Started with Toolkits"), ", the following are mandatory and required for a given project.");
        ul(
            pl(["Docs/Toolkits/Virtual Reality Toolkit"], "Virtual Reality Toolkit"),
            pl(["Docs/Toolkits/Networking Toolkit"], "Networking Toolkit"),
            pl(["Docs/Toolkits/Interaction Toolkit"], "Interaction Toolkit"),
            pl(["Docs/Toolkits/Menu Toolkit"], "Menu Toolkit"),
        );

        h(1, "Optional")
        ul(
            pl(["Docs/Toolkits/Light Toolkit"], "Light Toolkit"),
            pl(["Docs/Toolkits/Fields Toolkit"], "Fields Toolkit"),
        );
    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});