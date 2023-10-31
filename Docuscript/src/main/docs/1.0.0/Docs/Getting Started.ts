RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Getting Started";
    const snippets = `_snippets/${path}`;

    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, img, br, frag, link, ol, ul, icode, i, pl
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
                    "Navigate to ", icode([], "Installs"), " on the left panel and click ", icode([], "Install Editor"), " on the top right:"
                ),
                img(`${snippets}/unityhub_setup0.png`)
            ),
            frag(
                p(
                    "Choose version ", link("https://unity.com/releases/editor/whats-new/2020.3.40", icode([], "Unity 2020.3.40.f1")), 
                    " (or whatever 2020 LTS version is available)"
                ),
                i(
                    "NOTE:: The reason why ", icode([], "2020.3.40f1"), " is used over the current LTS is because it is more stable with the hololens as of when this document was written. ",
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
        p(
            "Different headsets require some additional setup:"
        )

        h(2, "Hololens 2");
        ol(
            frag(
                p(
                    "Turn on ", icode([], "Developer Mode"), " in windows settings on ", i("both"), " the hololens and desktop: (Make sure they are paired, click pair on hololens ",
                    "and input code)"
                ),
                img(`${snippets}/hololens_setup0.png`)
            )
        );

        h(2, "Oculus Quest");
        ol(
            p("Create an Oculus account." ),
            p("Sign up for developer ", link("https://developer.oculus.com/", "here"), "."),
            frag(
                p(
                    "Download the ", link("https://store.facebook.com/gb/en/quest/setup/?utm_source=l.facebook.com&utm_medium=oculusredirect", "Oculus Desktop App"), "."
                ),
                img(`${snippets}/oculus_setup0.png`, "60%")
            ),
            p("Download the Oculus mobile app."),
            p("Login with your Oculus account on both desktop and mobile."),
            frag(
                p("Connect to Oculus on mobile app using bluetooth."),
                ol(
                    frag(
                        p("Go to ", icode([], "menu"), " in the bottom right and select devices:"),
                        img(`${snippets}/oculus_setup1.png`, "60%")
                    ),
                    frag(
                        p("Scroll down to ", icode([], "Developer Mode"), "."),
                        img(`${snippets}/oculus_setup2.png`, "60%")
                    ),
                    frag(
                        p("Enable ", icode([], "Developer Mode"), "."),
                        img(`${snippets}/oculus_setup3.png`, "40%")
                    )
                )
            ),
            p("Install the ", link("https://developer.oculus.com/downloads/package/oculus-adb-drivers/", "Oculus adb drivers"), "."),
            p(
                "Connect the headset to your PC via link cable (USB-C connection). When you put the headset on it should prompt you to enable ", icode([], "USB Debugging"), ". Click ",
                icode([], "Allow"), "."
            )
        );

        h(1, "What next?")
        p("Now that you have setup your working environment check out the next steps:");
        ul(
            pl(["Docs/Creating a New Project"], "Creating a New Project"),
            pl(["Docs/Building and Deploying"], "Building and Deploying")
        );
    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});