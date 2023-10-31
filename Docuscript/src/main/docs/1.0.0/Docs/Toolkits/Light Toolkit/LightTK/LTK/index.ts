RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Toolkits/Light Toolkit/LightTK/LTK";
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

        h(1, "Definition");
        p("Namespace: ", icode([], "LightTK"));
        br();
        p("Provides methods for simulating light rays and managing surfaces.");
        code(["language-csharp"], "public partial class LTK");

        h(1, "Methods");
        twotable([
            {
                path: "Methods/GetIntersection",
                signature: "GetIntersection(Vector3, Vector3, Surface, LightRayHit[], bool, bool)",
                summary: "Some summary",
            }
        ].sort((a, b) => a.signature.localeCompare(b.signature)));
        
    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});