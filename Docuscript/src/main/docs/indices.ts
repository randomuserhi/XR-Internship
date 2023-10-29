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
            docs.set("Durham VR Physics Project", "Durham VR Physics Project.js");
            docs.set("Docs/Getting Started", "Docs/Getting Started.js");
            docs.set("Docs/Building and Deploying", "Docs/Building and Deploying.js");
            docs.set("Docs/Toolkits", "Docs/Toolkits/Toolkits.js");
            docs.set("Docs/Toolkits/Getting Started with Toolkits", "Docs/Toolkits/Getting Started with Toolkits.js");
            docs.set("Docs/Toolkits/Virtual Reality Toolkit", "Docs/Toolkits/VRTK/Virtual Reality Toolkit.js");
        })(docs.create("1.0.0", "~ Durham VR Physics Project"));

        return {
            DOCUSCRIPT_ROOT
        };
    });
})();