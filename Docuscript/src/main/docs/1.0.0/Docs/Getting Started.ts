RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Getting Started";
    const snippets = `_snippets/${path}`;

    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, img, br, frag, link, ol, icode, i
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
        img(`${snippets}/visualstudio_setup.png`);

        h(1, "Setting up Unity");
        ol(
            p(
                "Install ", link("https://unity3d.com/get-unity/download", "Unity Hub")
            ),
            frag(
                p(
                    "Navigate to ", icode(undefined, "Installs"), " on the left panel and click ", icode(undefined, "Install Editor"), " on the top right:"
                ),
                img(`${snippets}/unityhub_setup0.png`)
            ),
            frag(
                p(
                    "Choose version ", link("https://unity.com/releases/editor/whats-new/2020.3.40", icode(undefined, "Unity 2020.3.40.f1")), 
                    " (or whatever 2020 LTS version is available)"
                ),
                i(
                    "NOTE:: The reason why ", icode(undefined, "2020.3.40f1"), " is used over the current LTS is because it is more stable with the hololens as of when this document was written. ",
                    "Refer to ", link("https://learn.microsoft.com/en-us/windows/mixed-reality/develop/unity/known-issues", "Microsoft's known issues page")    
                ),
                img(`${snippets}/unityhub_setup1.png`)
            ),
            frag(
                p(
                    "Make sure you install the following modules:"
                ),
                img(`${snippets}/unityhub_setup2.png`)
            ),
        );

        h(1, "Install MRTK Feature Tool");
        p(
            "Download ", link("https://learn.microsoft.com/en-us/windows/mixed-reality/develop/unity/welcome-to-mr-feature-tool", "MRTK Feature Tool"),
            " from the download section, this is required to use the majority of tools provided."
        );

        h(1, "Setup Headsets");

        h(2, "Hololens 2");

        h(2, "Oculus Quest");
    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});