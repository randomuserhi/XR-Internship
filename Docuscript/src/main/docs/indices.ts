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
            const stack: string[] = [];
            const dir = (dir: string, func: (path: string) => void) => {
                stack.push(dir);
                func(stack.join("/"));
                stack.pop();
            };

            docs.set("Durham VR Physics Project", "Durham VR Physics Project.js", 0);
            docs.set(`Docs`, undefined, 1);
            dir("Docs", (p) => {
                docs.set(`${p}/Getting Started`, `${p}/Getting Started.js`, 0);
                docs.set(`${p}/Creating a New Project`, `${p}/Creating a New project.js`, 1);
                docs.set(`${p}/Building and Deploying`, `${p}/Building and Deploying.js`, 2);
                docs.set(`${p}/Toolkits`, `${p}/Toolkits/index.js`, 3);
                dir("Toolkits", (p) => {
                    docs.set(`${p}/Getting Started with Toolkits`, `${p}/Getting Started with Toolkits.js`, 0);
                    docs.set(`${p}/Virtual Reality Toolkit`, `${p}/Virtual Reality Toolkit/index.js`);
                    docs.set(`${p}/Interaction Toolkit`, `${p}/Interaction Toolkit/index.js`);
                    docs.set(`${p}/Networking Toolkit`, `${p}/Networking Toolkit/index.js`);
                    docs.set(`${p}/Menu Toolkit`, `${p}/Menu Toolkit/index.js`);
                    docs.set(`${p}/Fields Toolkit`, `${p}/Fields Toolkit/index.js`);
                    docs.set(`${p}/Light Toolkit`, `${p}/Light Toolkit/index.js`);
                    dir("Light Toolkit", (p) => {
                        dir("LightTK", (p) => {
                            docs.set(`${p}/LTK`, `${p}/LTK/index.js`);
                            dir("LTK", (p) => {
                                docs.set(`${p}/GetIntersection`, `${p}/GetIntersection.js`);
                            });
                            docs.set(`${p}/Surface`, `${p}/Surface/index.js`);
                            docs.set(`${p}/Equation`, `${p}/Equation/index.js`);
                        });
                    });
                });
            });
        })(docs.create("1.0.0", "Durham VR Physics Project"));

        return {
            DOCUSCRIPT_ROOT
        };
    });
})();