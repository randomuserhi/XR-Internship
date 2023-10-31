RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Building and Deploying";
    const snippets = `_snippets/${path}`;
    
    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, img, br, frag, link, ol, ul, icode, code, i, pl
    }) => {
        h(1, "Hololens");
        ol(
            p("In ", icode([], "Build Settings"), " make sure ", icode([], "Universal Windows Platform"), " is selected, if not click on it and click ", icode([], "switch platform"), "."),
            frag(
                p("Click ", icode([], "Build"), " and when it finishes, Unity should create a new Visual Studio solution which you can open:"),
                p(i("The contents will look something like this:")),
                img(`${snippets}/hololens0.png`)
            ),
            frag(
                p("Open the project and change the build to ", icode([], "Release"), ", ", icode([], "ARM64"), " and ", icode([], "Remote Machine"), ":"),
                img(`${snippets}/hololens1.png`),
            ),
            frag(
                p("Open ", icode([], "Package.appxmanifest"), ":"),
                img(`${snippets}/hololens2.png`),
            ),
            frag(
                p("Click on ", icode([], "Capabilities"), " and make sure the following are selected:"),
                img(`${snippets}/hololens3.png`),
            ),
            frag(
                p("Click on ", icode([], "Packaging"), " and change the name so that the build doesn't overwrite other builds:"),
                img(`${snippets}/hololens4.png`),
            ),
            frag(
                p("Right click the solution and click ", icode([], "Properties"), ":"),
                img(`${snippets}/hololens5.png`),
            ),
            frag(
                p("In ", icode([], "Debugging"), " set the ", icode([], "machine name"), " property to the ", i("IP Address"), " of your hololens as provided by the ",
                icode([], "holoremoting app"), " on the headset:"),
                p(i("NOTE:: Make sure you apply to ", icode([], "All Configurations"), " and ", icode([], "All Platforms"), ".")),
                p(i("NOTE:: The headset and pc must be on the same network.")),
                img(`${snippets}/hololens6.png`),
            ),
            frag(
                p("Click ", icode([], "OK"), " then click ", icode([], "Remote Machine"), " to build to the hololens:"),
                img(`${snippets}/hololens7.png`),
                br(),
                p(i("NOTE:: You can stream with the hololens by connecting to its IP via browser and logging in before going to recording and clicking view live.")),
                img(`${snippets}/hololens8.png`),
            )
        );

        h(1, "Oculus");
        ol(
            p("In ", icode([], "Build Settings"), " make sure ", icode([], "Android"), " is selected, if not click on it and click ", icode([], "switch platform"), "."),
            frag(
                p("Click ", icode([], "Oculus > OVR Build > OVR Build APK and Run"), ":"),
                img(`${snippets}/oculus0.png`),
                p(i("NOTE:: The APK is deployed to the Oculus and can be found under `Unknown Sources` when looking in library. If the APK fails to deploy you may need to uninstall it from here first and then try again.")),
            ),
        );
    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});