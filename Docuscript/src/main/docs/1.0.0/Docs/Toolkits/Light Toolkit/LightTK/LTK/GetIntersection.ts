RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Toolkits/Light Toolkit/LightTK/LTK/GetIntersection";
    const snippets = `_snippets/${path}`;
    
    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, img, br, frag, link, ol, ul, icode, code, i, pl, table, tr, td
    }) => {
        const twotable = (data: {index: number, signature: string, summary: string | RHUDocuscript.Node}[]) => {
            const rows: RHUDocuscript.Node<"tr">[] = [];
            for (const d of data) {
                rows.push(tr(
                    td(
                        pl([path, d.index], 
                            d.signature
                        )
                    ),
                    td(d.summary)
                ));
            }
            return table(["33%"], ...rows);
        }
        const params = (data: {path?: string, name?: string, type: string, summary: string | RHUDocuscript.Node}[]) => {
            const rows: RHUDocuscript.Node<"tr">[] = [];
            for (const d of data) {
                if (d.name) {
                    rows.push(tr(
                        td(
                            d.path ? pl([`${path}/${d.path}`], 
                                d.type
                            ) : d.type
                        ),
                        td(
                            d.name
                        ),
                        td(d.summary)
                    ));
                } else {
                    rows.push(tr(
                        td(
                            d.path ? pl([`${path}/${d.path}`], 
                                d.type
                            ) : d.type
                        ),
                        td(d.summary)
                    ));
                }
            }
            return table([], ...rows);
        }

        h(1, "Definition");
        p("Namespace: ", icode([], "LightTK"));
        
        h(1, "Overloads");
        twotable([
            {
                index: 2,
                signature: "GetIntersection(Vector3, Vector3, Surface, LightRayHit[], bool, bool)",
                summary: "Gets the intersection points of a 3D line and a 3D surface.",
            }
        ].sort((a, b) => a.signature.localeCompare(b.signature)));

        h(1, "GetIntersection(Vector3, Vector3, Surface, LightRayHit[], bool, bool)");
        p("Gets the intersection points of a 3D line and a 3D surface.");
        code(["language-csharp"], "public static int GetIntersection(Vector3 origin, Vector3 dir, Surface curve, LightRayHit[] points, bool relative = false, bool bounded = true)");
        
        h(2, "Remarks")
        p("Make sure you provide a large enough buffer to receive all the intersections.")

        h(2, "Returns")
        params([
            {
                type: "int",
                summary: "Returns the number of points the line intersects with. Hit information is stored in the buffer you provided to the method.",
            },
        ]);

        h(2, "Parameters")
        params([
            {
                type: "Vector3",
                name: "origin",
                summary: "Defines the origin of ray being cast.",
            },
            {
                type: "Vector3",
                name: "dir",
                summary: "Defines the direction of ray being cast.",
            },
            {
                type: "Surface",
                name: "curve",
                summary: "Defines the surface the ray is checking intersections with.",
            },
            {
                type: "LightRayHit[]",
                name: "points",
                summary: "A buffer of hits to store points the ray intersects with on the surface.",
            },
            {
                type: "bool",
                name: "relative",
                summary: frag(
                    "Determines whether the definition of the ray provided is relative to the surface's transform.",
                    br(),br(), p(i("default: ", icode([], "false")))
                ),
            },
            {
                type: "bool",
                name: "bounded",
                summary: frag(
                    "Determines if the ray uses the bounds provided by the surface or not when calculating intersections.",
                    br(), br(), p(i("default: ", icode([], "true")))
                ),
            },
        ]);
        
    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});