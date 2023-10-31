RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Toolkits/Light Toolkit/LightTK/Surface";
    const snippets = `_snippets/${path}`;
    
    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, img, br, frag, link, ol, ul, icode, code, i, pl, table, tr, td
    }) => {
        const twotable = (data: {path: string, signature: string, summary: string | RHUDocuscript.Node}[]) => {
            const rows: RHUDocuscript.Node<"tr">[] = [];
            for (const d of data) {
                rows.push(tr(
                    td(
                        pl([`${path}/${d.path}`], 
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
        br();
        p("Provides methods for simulating light rays and managing surfaces.");
        code(["language-csharp"], 
`[Serializable]
public struct Surface
{
    public SurfaceSettings settings;

    public Vector3 position;
    public Quaternion rotation;

    public Vector3 minimum;
    public Vector3 maximum;
    public float radial;

    public Equation equation;
}`
        );

        h(1, "Properties");
        params([
            {
                type: "SurfaceSettings",
                name: "settings",
                summary: "Some summary",
            }
        ]);
        
    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});