RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Toolkits/Light Toolkit";
    const snippets = `_snippets/${path}`;
    
    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, img, br, frag, link, ol, ul, icode, code, i, pl
    }) => {
        h(1, "Dependencies");
        p("Light Toolkit is not dependent on other toolkits and can even be used in standalone projects.");

        h(1, "Summary");
        p(
            "Light Toolkit provides a simple way to simulate light rays hitting various surfaces. It is incredibly light weight and so simple that you won't get more complex surfaces than:",
            ul(
                "hyperboloids",
                "paraboloids",
                "ellipsoids",
                "cylinderes",
                "planes"
            )
        );
    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});