RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Toolkits/Light Toolkit/LightTK/Equation";
    const snippets = `_snippets/${path}`;
    
    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, img, br, frag, link, ol, ul, icode, code, i, pl, table, tr, td, mj, desmos
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
        const params = (data: {root?: string, path?: string, name?: string, type: string, summary: string | RHUDocuscript.Node}[]) => {
            const rows: RHUDocuscript.Node<"tr">[] = [];
            for (const d of data) {
                if (d.name) {
                    rows.push(tr(
                        td(
                            d.root ? pl([d.root], 
                                d.type
                            ) : d.path ? pl([`${path}/${d.path}`], 
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
        p("Describes the shape of a given surface.");
        code(["language-csharp"], 
`[Serializable]
[System.Serializable]
public struct Equation
{
    public float g;
    public float h;
    public float i;
    public float j;
    public float k;
    public float l;
    public float m;
    public float n;
    public float o;
    public float p;
}`
        );

        h(1, "Defining a surface")
        p(
            "Surfaces are defined by the following equation:",
        );
        mj("$$j(x-g)^2+k(y-h)^2+l(z-i)^2+mx+ny+oz+p=0$$");
        br();
        
        //desmos("3d/c79f7539e1");

        h(1, "Example Shapes")

        h(2, "Sphere")
        p("A sphere can be defined as so:");
        mj(`$$x^2+y^2+z^2+p=0$$`);
        p("Where ", mj("$|p|$"), " is the radius-squared of the sphere.");
        br();
        mj(`$$
j = 1f \\\\
k = 1f \\\\
l = 1f \\\\
p = -1f
        $$`);
        desmos("3d/34ed0ae820");

    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});