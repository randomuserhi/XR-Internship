declare namespace RHU {
    interface Modules {
        "docuscript": RHUDocuscript.Parser;
    }
}

declare namespace RHUDocuscript {
    interface NodeMap {
        img: {
            src: string;
        };
        text: {
            text: string;
        };
        br: {};
        p: {};
        h: {
            heading: number;
            label: string;
            link?: string;
            onclick?: () => void;
        };
        div: {};
        frag: {};
        pl: {
            path: string;
            index?: number;
            link?: string;
            onclick?: () => void;
        };
        link: {
            href: string;
        };
        code: {
            language: string;
        };
    }
    type Language = keyof NodeMap;

    interface FuncMap extends Docuscript.NodeFuncMap<Language> {
        img: (src: string) => Node<"img">;
        text: (text: string) => Node<"text">;
        br: () => Node<"br">;
        p: (...children: (string | Node)[]) => Node<"p">;
        
        h: (heading: number, label: string, ...children: (string | Node)[]) => Node<"h">;
    
        div: (...children: (string | Node)[]) => Node<"div">;
        frag: (...children: (string | Node)[]) => Node<"frag">;

        pl: (path: string, index?: number, ...children: (string | Node)[]) => Node<"pl">;
        link: (href: string, ...children: (string | Node)[]) => Node<"link">;

        code: (language: string, ...content: (string)[]) => Node<"code">;
    }

    type Page = Docuscript.Page<Language, FuncMap>;
    type Parser = Docuscript.Parser<Language, FuncMap>;
    type Context = Docuscript.Context<Language, FuncMap>;
    type Node<T extends Language | undefined = undefined> = Docuscript.NodeDef<NodeMap, T>;
}

RHU.module(new Error(), "docuscript", {
    codeblock: "docuscript/components/molecules/codeblock"
}, function({
    codeblock
}) {
    type context = RHUDocuscript.Context;
    type node<T extends RHUDocuscript.Language | undefined = undefined> = RHUDocuscript.Node<T>;

    const mountChildren = (context: context, node: node, children: (string | node)[], conversion: (text: string) => node) => {
        for (let child of children) {
            let childNode: node;
            if (typeof child === "string") {
                childNode = conversion(child);
            } else {
                childNode = child;
            }
            
            context.remount(childNode, node);
        }
    };
    const mountChildrenText = (context: context, node: node, children: (string | node)[]) => {
        mountChildren(context, node, children, (text) => context.nodes.text(text));
    }
    const mountChildrenP = (context: context, node: node, children: (string | node)[]) => {
        mountChildren(context, node, children, (text) => context.nodes.p(text));
    }

    return {
        link: {
            create: function(this: context, href, ...children) {
                let node: node<"link"> = {
                    __type__: "link",
                    href,
                };

                mountChildrenText(this, node, children);

                return node;
            },
            parse: function(children, node) {
                const dom = document.createElement("a");
                dom.target = "blank";
                dom.href = node.href;
                dom.append(children);
                return dom;
            }
        },
        code: {
            create: function(this: context, language: string, ...children) {
                let node: node<"code"> = {
                    __type__: "code",
                    language,
                };

                mountChildrenText(this, node, children);

                return node;
            },
            parse: function(children, node) {
                const dom = document.createMacro(codeblock);
                dom.append(children);
                dom.setLanguage(node.language);
                return dom;
            },
        },
        pl: {
            create: function(this: context, path, index, ...children) {
                let node: node<"pl"> = {
                    __type__: "pl",
                    path,
                    index,
                };

                mountChildrenText(this, node, children);

                return node;
            },
            parse: function(children, node) {
                const pl = node as node<"pl">;
                const dom = document.createElement(`a`);
                dom.style.textDecoration = "inherit"; // TODO(randomuserhi): style properly with :hover { text-decoration: underline; }
                if (pl.link) {
                    dom.href = pl.link;
                    dom.addEventListener("click", (e) => {  
                        e.preventDefault();
                        if (pl.onclick) {
                            pl.onclick(); 
                        }
                    });
                }
                dom.append(children);
                return dom;
            }
        },
        img: {
            create: function(src) {
                return {
                    __type__: "img",
                    src: src,
                }
            },
            parse: function(_, node) {
                let img = document.createElement("img");
                img.src = node.src;
                return img;
            }
        },
        text: {
            create: function(text) {
                return {
                    __type__: "text",
                    text: text,
                };
            },
            parse: function(_, node) {
                return document.createTextNode(node.text);
            }
        },
        br: {
            create: function() {
                return {
                    __type__: "br",
                };
            },
            parse: function(children) {
                let dom = document.createElement("br");
                dom.append(children);
                return dom;
            }
        },
        p: {
            create: function(this: context, ...children) {
                let node: node<"p"> = {
                    __type__: "p",
                };

                for (let child of children) {
                    let childNode: node;
                    if (typeof child === "string") {
                        childNode = this.nodes.text(child);
                    } else {
                        childNode = child;
                    }
                    
                    this.remount(childNode, node);
                }

                return node;
            },
            parse: function(children) {
                let dom = document.createElement("p");
                dom.append(children);
                return dom;
            }
        },
        h: {
            create: function(this: context, heading, label, ...children) {
                let node: node<"h"> = {
                    __type__: "h",
                    heading,
                    label,
                };

                if (children.length === 0) {
                    this.remount(this.nodes.text(label), node);
                } else {
                    mountChildrenText(this, node, children);
                }

                return node;
            },
            parse: function(children, node) {
                const h = node as node<"h">;
                const dom = document.createElement(`h${h.heading}`);
                dom.style.display = "flex";
                dom.style.gap = "8px";
                dom.style.alignItems = "center";
                if (h.link) {
                    const link = document.createElement("a");
                    link.href = h.link;
                    link.innerHTML = "";
                    link.style.fontFamily = "docons";
                    link.style.fontSize = "1rem";
                    link.style.textDecoration = "inherit";
                    link.style.color = "inherit";
                    link.addEventListener("click", (e) => {  
                        e.preventDefault();
                        if (h.onclick) {
                            h.onclick(); 
                        }
                    });
                    dom.append(link);
                }
                dom.append(children);
                return dom;
            }
        },
        div: {
            create: function(this: context, ...children) {
                let node: node<"div"> = {
                    __type__: "div",
                };
                
                mountChildrenP(this, node, children);

                return node;
            },
            parse: function(children) {
                let dom = document.createElement("div");
                dom.append(children);
                return dom;
            }
        },
        frag: {
            create: function (this: context, ...children) {
                let node: node<"frag"> = {
                    __type__: "frag",
                };
                
                mountChildrenText(this, node, children);

                return node;
            },
            parse: function(children) {
                let dom = new DocumentFragment();
                dom.append(children);
                return dom;
            },
        },
    };
});