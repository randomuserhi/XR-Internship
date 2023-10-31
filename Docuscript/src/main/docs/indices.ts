declare namespace RHU {
    interface Modules {
        "docs/indices": {
            DOCUSCRIPT_ROOT: string;
        };
    }
}

(() => {
    let DOCUSCRIPT_ROOT = "";
    if (document.currentScript) {
        let s = document.currentScript as HTMLScriptElement;
        let r = s.src.match(/(.*)[/\\]/);
        if (r)
            DOCUSCRIPT_ROOT = r[1] || "";
    } else {
        throw new Error("Failed to get document root.");
    }

    RHU.module(new Error(), "docs/indices", { 
        docs: "docs",
    }, function({
        docs,
    }) {
        
        ((docs: Docs) => {
            docs.set("Durham VR Physics Project", "Durham VR Physics Project.js", 0);

            docs.set("Docs", undefined, 1);
                docs.set("Docs/Getting Started", "Docs/Getting Started.js", 0);
                docs.set("Docs/Creating a New Project", "Docs/Creating a New project.js", 1);
                docs.set("Docs/Building and Deploying", "Docs/Building and Deploying.js", 2);
                docs.set("Docs/Toolkits", "Docs/Toolkits/Toolkits.js", 3);
                    docs.set("Docs/Toolkits/Getting Started with Toolkits", "Docs/Toolkits/Getting Started with Toolkits.js", 0);
                    docs.set("Docs/Toolkits/Virtual Reality Toolkit", "Docs/Toolkits/VRTK/index.js");
                    docs.set("Docs/Toolkits/Interaction Toolkit", "Docs/Toolkits/ITK/index.js");
                    docs.set("Docs/Toolkits/Networking Toolkit", "Docs/Toolkits/NTK/index.js");
                    docs.set("Docs/Toolkits/Menu Toolkit", "Docs/Toolkits/MTK/index.js");
                    docs.set("Docs/Toolkits/Fields Toolkit", "Docs/Toolkits/VRTK/index.js");
                    docs.set("Docs/Toolkits/Light Toolkit", "Docs/Toolkits/LTK/index.js");
                        docs.set("Docs/Toolkits/Light Toolkit/LTK", "Docs/Toolkits/LTK/LTK.js");
                            docs.set("Docs/Toolkits/Light Toolkit/LTK/GetIntersection", "Docs/Toolkits/LTK/GetIntersection.js");
        })(docs.create("1.0.0", "Durham VR Physics Project"));

        return {
            DOCUSCRIPT_ROOT
        };
    });
})();