RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Toolkits/Getting Started with Toolkits";
    const snippets = `_snippets/${path}`;
    
    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, img, br, frag, link, ol, ul, icode, code, i, pl
    }) => {
        p("For more information about Toolkits, refer to the ", pl(["Docs/Toolkits"], "main doc page"), ".");

        h(1, "Setup Project");
        p("This builds upon the initial setup in ", pl(["Docs/Getting Started"], "Getting Started"), ".");
        br();
        p(
            "In ", icode([], "Project Settings > Player"), " for each build target (", icode([], "Android"), " for oculus and ", icode([], "Universal Windows Platform (UWP)"), "for hololens)",
            " go to ", icode([], "Other Settings"), " and tick ", icode([], "Allow unsafe code"), ":"
        );
        img(`${snippets}/toolkits0.png`);

        h(1, "Importing Toolkits");
        p("Simply copy the toolkit files you want to include from the ", link("https://github.com/randomuserhi/XR-Internship", "github repo"), " into your Unity Assets.");
        img(`${snippets}/toolkits1.png`);
        p("For the minimum setup to create a usable XR Rig, import the following toolkits:")
        ul(
            pl(["Docs/Toolkits/Virtual Reality Toolkit"], "Virtual Reality Toolkit"),
            pl(["Docs/Toolkits/Networking Toolkit"], "Networking Toolkit"),
            pl(["Docs/Toolkits/Interaction Toolkit"], "Interaction Toolkit"),
            pl(["Docs/Toolkits/Menu Toolkit"], "Menu Toolkit")
        )
        p("These are all mandatory for the basic project to work as toolkits may dependend on others to work, so make sure you include all toolkits necessary. Their dependencies can be found on their respective doc pages.");
        br();
        ol(
            frag(
                p("Delete the main camera and rig from your unity scene:"),
                img(`${snippets}/toolkits3.png`)
            ),
            frag(
                p("Drag the ", icode([], "XR Rig"), " prefab from ", icode([], "Interaction Toolkit > Samples"), " into your scene:"),
                img(`${snippets}/toolkits4.png`)
            ),
            frag(
                p("Right click on the scene and create an empty gameobject called ", icode([], "Custom Toolkits"), ":"),
                img(`${snippets}/toolkits5.png`)
            ),
            frag(
                p("Select this gameobject and in the ", icode([], "Inspector"), " window add the following components:"),
                ul(
                    pl(["Docs/Toolkits/Virtual Reality Toolkit"], "Virtual Reality Toolkit"),
                    pl(["Docs/Toolkits/Networking Toolkit"], "Networking Toolkit"),
                ),
                img(`${snippets}/toolkits6.png`)
            ),
            frag(
                p(
                    "Drag your ", icode([], "XR Rig"), " object from the scene into the ", icode([], "Master"), " slot of the ", icode([], "Virtual Reality Toolkit"), " component and set ",
                    icode([], "Device"), "to your target device:"
                ),
                img(`${snippets}/toolkits7.png`)
            ),
            frag(
                p("At the top of the object in the ", icode([], "Inspector"), " window click on ", icode([], "Layer > Add Layer"), ":"),
                img(`${snippets}/toolkits8.png`)
            ),
            frag(
                p("Add the missing layers:"),
                img(`${snippets}/toolkits9.png`)
            ),
            frag(
                p("Go to ", icode([], "Edit > Project Settings"), " and click on the ", icode([], "Physics"), " tab and change the settings to match below:"),
                img(`${snippets}/toolkits10.png`)
            ),
        );

        br();
        p("Thats all! You now have a basic VR environment.")

    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});