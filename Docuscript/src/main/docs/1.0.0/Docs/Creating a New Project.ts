RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Creating a New Project";
    const snippets = `_snippets/${path}`;

    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, img, br, frag, link, ol, ul, icode, code, i, pl
    }) => {
        p(
            "This page outlines how to create a unity project for either the hololens or oculus quest or both."
        ); 
        br();
        ol(
            frag(
                p(
                    "In ", icode([], "Unity Hub"), " click ", icode([], "New Project"), " in the top right and select ", icode([], "3D Project"),
                    " and make sure you are using the correct editor version. Set the project name and location to your preference:",
                ),
                img(`${snippets}/unity_setup0.png`)
            ),
            frag(
                p("Open the ", icode([], "Project Manager"), ":",),
                img(`${snippets}/unity_setup1.png`)
            ),
            frag(
                p("Select ", icode([], "Unity Registries"), ":",),
                img(`${snippets}/unity_setup2.png`)
            ),
            frag(
                p("Click, the ", icode([], "+"), " in the top left and click ", icode([], "Add package from git URL..."), ":",),
                img(`${snippets}/unity_setup3.png`),
                p("Insert the following URLs one by one to install them:",),
                ul(
                    icode([], "com.unity.render-pipelines.core"),
                    icode([], "com.unity.render-pipelines.universal"),
                    frag(
                        icode([], "com.unity.xr.openxr"),
                        ul(
                            p("A popup will occure for turning on the old input system, click ", icode([], "yes")),
                            frag(
                                p("At the end a window will appear with an error, click ", icode([], "edit")),
                                img(`${snippets}/unity_setup4.png`),
                            ),
                            frag(
                                p(
                                    "Click the ", icode([], "+"), " button in the window that appears on the bottom right under ",
                                    icode([], "Interaction Profiles"), " and add ", icode([], "Microsoft Hand Interaction Profile"), " and ",
                                    icode([], "Oculus Touch Controller Profile"), ":"
                                ),
                                img(`${snippets}/unity_setup5.png`),
                            )
                        )
                    )
                )
            ),
            frag(
                p(
                    "Open ", pl(["Docs/Getting Started", 2], "MRTK Feature Tool"), " and click ", icode([], "Start"), ". Locate your project and click ",
                    icode([], "open"), " with a ", icode([], "_"), " as your file name:",
                ),
                img(`${snippets}/unity_setup6.png`),
            ),
            frag(
                p("Click ", icode([], "Discover Features"), " and select the following features:"),
                ul(
                    frag(
                        p("From the ", icode([], "Mixed Reality Toolkit"), " header:"),
                        ul(
                            icode([], "Mixed Reality Toolkit Extensions"),
                            icode([], "Mixed Reality Toolkit Foundation")
                        ),
                        img(`${snippets}/unity_setup8.png`),
                    ),
                    frag(
                        p("From the ", icode([], "Platform Support"), " header:"),
                        ul(
                            icode([], "Mixed Reality OpenXR plugin"),
                        ),
                        img(`${snippets}/unity_setup7.png`),
                    )
                )
            ),
            frag(
                p("Close MRTK Feature Tool and switch back to Unity (It might take a while for unity to finish importing the new assets)."),
                p("Once completed, a popup should appear. Click ", icode([], "Unity OpenXR plugin"), ":"),
                img(`${snippets}/unity_setup9.png`),
            ),
            frag(
                p(
                    "The", icode([], "MRTK Project Configurator"), " should now prompt to click ", icode([], "Show settings"), ", this should navigate ",
                    "you to ", icode([], "Edit > Project Settings"), ". Select ", icode([], "XR Plug-in Management"), " and under each build target, tick",
                    icode([], "OpenXR"), ":"
                ),
                img(`${snippets}/unity_setup10.png`),
            ),
            frag(
                p("Back in ", icode([], "MRKT Project Configurator"), " click ", icode([], "Apply Settings"), " followed by ", icode([], "Next"), ":"),
                img(`${snippets}/unity_setup11.png`),
            ),
            frag(
                p("Click ", icode([], "Apply"), " then ", icode([], "Next"), ":"),
                img(`${snippets}/unity_setup12.png`),
            ),
            frag(
                p("Click ", icode([], "Import TMP Essentials"), ":"),
                img(`${snippets}/unity_setup13.png`),
            ),
            frag(
                p("Click ", icode([], "Done"), ":"),
                img(`${snippets}/unity_setup14.png`),
            ),
            frag(
                p("Navigate to ", icode([], "Edit > Project Settings"), ":"),
                img(`${snippets}/unity_setup15.png`),
            ),
            frag(
                p("In ", icode([], "XR Plug-in Management"), " click the little warning symbol:"),
                img(`${snippets}/unity_setup16.png`),
            ),
            frag(
                p("Click ", icode([], "Fix All"), " in the window that pops up:"),
                img(`${snippets}/unity_setup17.png`),
            ),
            frag(
                p(
                    "Repeat steps ", i("14"), " and ", i("15"), " for the other 3 build targets and set their ", icode([], "Render Mode"), " to ", icode([], "Multi-pass"),
                    " such that they look like so (Android will need you to add ", icode([], "oculus touch interaction profile"), "):"
                ),
                img(`${snippets}/unity_setup18.png`),
                img(`${snippets}/unity_setup19.png`),
                img(`${snippets}/unity_setup20.png`)
            ),
            frag(
                p("Import the ", icode([], "MRTK Profile"), " folder from the ", link("https://github.com/randomuserhi/XR-Internship", "github repo"), " into your unity project:"),
                img(`${snippets}/unity_setup21.png`),
            ),
            frag(
                p("In your Unity Scene, right click and click ", icode([], "Create Empty"), " name the object ", i("Toolkits"), ":"),
                img(`${snippets}/unity_setup22.png`),
            ),
            frag(
                p("Select the ", i("Toolkits"), " object and in the ", icode([], "Inspector"), " window click ", icode([], "Add Component"), " and find ", icode([], "MixedRealityToolkit"), ":"),
                img(`${snippets}/unity_setup23.png`),
            ),
            frag(
                p("Change the ", icode([], "Active Profile"), " to ", icode([], "SparseMRTK"), " from the imported profiles in step ", i("17"), ":"),
                img(`${snippets}/unity_setup21.png`),
            ),
        );

        h(1, "Setting up Headsets");
        p(
            i("NOTE:: Perform both setups below only if you want your project to be switchable between both devices without having a different project for each device. Otherwise only perform the setup for your chosen device.")
        );
        br();
        p(
            i("NOTE:: It is not recommended to prepare a single project for both Hololens and Oculus because it creates large project files with no crossover resulting in large executables.")
        );

        h(2, "Setup for Hololens");
        ol(
            frag(
                p(
                    "Navigate to ", icode([], "File > Build Settings"), " and select ", icode([], "Universal Windows Platform"), ". Click ", icode([], "Switch platform"),
                    " on the bottom right and make sure the settings are the same as shown here:"
                ),
                img(`${snippets}/unity_setup_hololens0.png`),
                img(`${snippets}/unity_setup_hololens1.png`),
            )
        );
        h(3, "Play Mode");
        ol(
            p("To allow for play mode in unity, download the ", icode([], "Holoremoting app"), " on the hololens from the ", icode([], "Microsoft Store", ".")),
            frag(
                p(
                    "In ", icode([], "Project Settings > XR Plug-in Management"), " under ", icode([], "desktop build target"), ", select ", icode([], "holoremoting"),
                    " and then click the red alert and click ", icode([], "Fix All"), ":"
                ),
                img(`${snippets}/unity_setup_hololens2.png`),
                img(`${snippets}/unity_setup_hololens3.png`),
            ),
            frag(
                p("On the last error click ", icode([], "Edit"), ":"),
                img(`${snippets}/unity_setup_hololens4.png`),
            ),
            frag(
                p(
                    "In the new window that popped up, type the ", i("IP Address"), " of the hololens provided by the ", icode([], "hololens remoting app"), 
                    " on the hololens (Boot up the app on the headset and it will give you the IP. If the hololens is not connected to the internet, providing ",
                    "a wired connection will also prompt an IP which can be used). For this IP to be valid, both the hololens and your PC must be on the same network."
                ),
                img(`${snippets}/unity_setup_hololens5.png`),
            ),
        );
        
        h(2, "Setup for Oculus");
        ol(
            frag(
                p(
                    "Via the package manager download Oculus XR Plugin via git url: ", icode([], "com.unity.xr.oculus"), "."
                ),
                ol(
                    frag(
                        p("When prompted to update ", icode([], "OVR"), " click ", icode([], "yes"), ":"),
                        img(`${snippets}/unity_setup_oculus1.png`),
                    ),
                    frag(
                        p("When prompted to use ", icode([], "OpenXR"), " click ", icode([], "Use OpenXR"), ":"),
                        img(`${snippets}/unity_setup_oculus2.png`),
                    ),
                    frag(
                        p("When prompted to restart Unity click ", icode([], "restart"), ":"),
                        img(`${snippets}/unity_setup_oculus3.png`),
                    ),
                    frag(
                        p("When prompted to clean up assets click ", icode([], "Show Assets"), ", then click ", icode([], "Clean up"), ":"),
                        img(`${snippets}/unity_setup_oculus4.png`),
                        img(`${snippets}/unity_setup_oculus5.png`),
                    ),
                    frag(
                        p("When prompted to update ", icode([], "Spatializer plugin"), ", click ", icode([], "Upgrade"), ":"),
                        img(`${snippets}/unity_setup_oculus6.png`),
                    ),
                    frag(
                        p("When prompted to restart Unity, click ", icode([], "restart"), ":"),
                    ),
                    frag(
                        p("When prompted to enable ", icode([], "OpenXR"), ", click ", icode([], "Enable"), ":"),
                        img(`${snippets}/unity_setup_oculus7.png`),
                    ),
                    frag(
                        p("If MRTK prompts you to apply ", icode([], "Spatial Awareness Layer"), ", click ", icode([], "Apply"), ", ", icode([], "Next"), " and then ", icode([], "Done"), ":"),
                        img(`${snippets}/unity_setup_oculus8.png`),
                    ),
                )
            ),
            frag(
                p(
                    "Copy and paste the ", icode([], "Oculus") ," folder from ", icode([], "Oculus Integration v43"), ", located in the ", 
                    link("https://github.com/randomuserhi/XR-Internship", "github repo"), ", to your assets folder."
                ),
                p(i("NOTE:: We use an older version of Oculus Integration since for some reason, hand tracking does not work on android builds for the newest version.")),
                p(i("TODO:: INCLUDE IMAGE HERE"))
            ),
            p(
                "Plug in your Oculus Quest 2 headset and make sure it is connected via the ", link("https://www.meta.com/gb/en/quest/setup/?utm_source=l.facebook.com&utm_medium=oculusredirect", "Oculus Desktop App"),
                "."
            ),
            frag(
                p(
                    "Navigate to ", icode([], "File > Build Settings"), " and select ", icode([], "Android"), ". Click ", icode([], "Switch Platform"), " on the bottom right and ",
                    "make sure the settings are the same as shown here:"
                ),
                img(`${snippets}/unity_setup_oculus9.png`),
                p(i("NOTE:: If your headset does not showup under `Run Device` double check if USB debugging is enabled on the headset and that developer mode was enabled for your oculus account."))
            ),
            frag(
                p(
                    "Upon switching platform to ", icode([], "Android"), " you may be prompted by MRTK to apply android settings. If so, click ", icode([], "Apply"), ", ", icode([], "Next"), 
                    " and then ", icode([], "Done"), ":"
                ),
                img(`${snippets}/unity_setup_oculus10.png`),
            ),
            frag(
                p("Navigate to your ", icode([], "Oculus"), " folder and find ", icode([], "Oculus Project Config (OVR Project Config)"), " asset:"),
                img(`${snippets}/unity_setup_oculus11.png`),
            ),
            frag(
                p("After selecting it, goto the ", icode([], "Inspector"), " window and change the settings to match:"),
                img(`${snippets}/unity_setup_oculus12.png`),
            ),
            frag(
                p("Click ", icode([], "Oculus > Tools > Create store-compatible AndroidManifest.xml"), ":"),
                img(`${snippets}/unity_setup_oculus13.png`),
            ),
            frag(
                p("Locate and open the ", icode([], "AndroidManifest.xml"), " file from your assets:"),
                img(`${snippets}/unity_setup_oculus14.png`),
            ),
            frag(
                p("Add the following lines to the file:"),
                code(["language-xml"],
                `<uses-permission android:name="android.permission.INTERNET" />`,
                `<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>`
                ),
                p("Such that the file looks similar to:"),
                code(["language-xml"],
`<?xml version="1.0" encoding="utf-8" standalone="no"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" android:installLocation="auto">
  <application android:label="@string/app_name" android:icon="@mipmap/app_icon" android:allowBackup="false">
    <activity android:theme="@android:style/Theme.Black.NoTitleBar.Fullscreen" android:configChanges="locale|fontScale|keyboard|keyboardHidden|mcc|mnc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|touchscreen|uiMode" android:launchMode="singleTask" android:name="com.unity3d.player.UnityPlayerActivity" android:excludeFromRecents="true">
      <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
        <category android:name="com.oculus.intent.category.VR" />
      </intent-filter>
      <meta-data android:name="com.oculus.vr.focusaware" android:value="true" />
    </activity>
    <meta-data android:name="unityplayer.SkipPermissionsDialog" android:value="false" />
    <meta-data android:name="com.samsung.android.vr.application.mode" android:value="vr_only" />
    <meta-data android:name="com.oculus.handtracking.frequency" android:value="HIGH" />
    <meta-data android:name="com.oculus.handtracking.version" android:value="V2.0" />
    <meta-data android:name="com.oculus.supportedDevices" android:value="quest|quest2" />
  </application>
  <uses-feature android:name="android.hardware.vr.headtracking" android:version="1" android:required="true" />
  <uses-feature android:name="oculus.software.handtracking" android:required="true" />
  <uses-permission android:name="com.oculus.permission.HAND_TRACKING" />
  
  <!-- NEWLY ADDED LINES -->
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
  
</manifest>`
                ),
            )
        );

        h(3, "Play Mode");
        ol(
            frag(
                p("In the oculus desktop app go to settings and enable ", icode([], "Unknown sources"), " and set oculus as active ", icode([], "OpenXR Runtime"), ":"),
                p(i("NOTE:: If you do not do this, Unity will crash.")),
                img(`${snippets}/unity_setup_oculus15.png`)
            ),
            p("On the oculus headset, navigate to ", icode([], "Quest Link"), "and then simply click play in Unity. It should automatically boot into your unity scene from there."),
        )

        h(1, "Switching between Headsets");
        p(i("NOTE:: only relevant if you performed both setups for hololens and oculus."));

        h(2, "Play Mode");
        h(3, "Hololens to Oculus");
        p("In ", icode([], "Edit > Project Settings"), " disable ", icode([], "holographic remoting"), " and enable ", icode([], "OculusXR Feature"), ":"),
        img(`${snippets}/hololens_to_oculus0.png`),
        img(`${snippets}/hololens_to_oculus1.png`)

        h(3, "Oculus to Hololens");
        p("In ", icode([], "Edit > Project Settings"), " disable ", icode([], "OculusXR Feature"), " and enable ", icode([], "holographic remoting"), ":"),
        img(`${snippets}/oculus_to_hololens0.png`)

        h(2, "Builds");
        p("For builds, simply switching build target is enough. (", icode([], "Android"), " for Oculus and ", icode([], "Universal Windows Platform (UWP)"), " for hololens).");

        h(1, "What next?")
        p("Now that you have setup your VR ready project:");
        ul(
            pl(["Docs/Toolkits/Getting Started with Toolkits"], "Setup your project with an XR Rig and the basic tookits!"),
            pl(["Docs/Building and Deploying"], "Building and Deploying")
        );
    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});