RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Getting Started";
    
    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, div, br, code, link
    }) => {
        p(
            "This page outlines how to get started with setting up an XR environment for use with either the Hololens or Oculus Quest."
        ); 

        h(1, "Setting up Visual Studio 2022");
        p(
            "Download ", link("https://visualstudio.microsoft.com/vs/", "Visual Studio 2022")
        );
        br();
        p(
            "In the installer make sure to have the following selected:"
        );

    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});