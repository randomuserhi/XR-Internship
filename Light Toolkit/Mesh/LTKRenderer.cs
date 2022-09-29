using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using LightTK;
using static LightTK.LTK;

[RequireComponent(typeof(MeshFilter), typeof(MeshRenderer))]
public class LTKRenderer : MonoBehaviour
{
    public AbstractSurface[] surfaces;

    private Mesh m;

    private List<Vector3> vertices = new List<Vector3>();
    private List<Vector3> normals = new List<Vector3>();
    private List<Vector2> uvs = new List<Vector2>();

    private List<int>[] triangles;

    public float step = 0.002f;
    public int gridSize = 50;

    private int currentIndex = 0;

    public void GenerateMesh(params AbstractSurface[] surfaces)
    {
        vertices.Clear();
        normals.Clear();
        uvs.Clear();

        m = new Mesh();
        m.subMeshCount = surfaces.Length;

        triangles = new List<int>[m.subMeshCount];
        currentIndex = 0;

        for (int i = 0; i < m.subMeshCount; i++)
        {
            GenerateSubMesh(surfaces[i], i);
        }

        m.SetVertices(vertices);
        m.SetNormals(normals);
        m.SetUVs(0, uvs);

        for (int i = 0; i < m.subMeshCount; i++)
        {
            m.SetTriangles(triangles[i], i);
        }

        GetComponent<MeshFilter>().mesh = m;
    }

    public void GenerateSubMesh(AbstractSurface c, int subMesh)
    {
        triangles[subMesh] = new List<int>();

        //((Hyperboloid)c).squash = -1f / 25f;
        //((Hyperboloid)c).seperation = -1f / 25f;

        LightRayHit[] hits = new LightRayHit[2];

        for (int j = gridSize / 2 - gridSize; j <= gridSize / 2; j++)
        {
            for (int i = gridSize / 2 - gridSize; i <= gridSize / 2; i++)
            {
                float x = i * step;
                float y = j * step;
                Vector3 sample = new Vector3(x + c.position.x, y + c.position.y, 0);
                if (c.surface.radial != 0)
                    sample = sample.normalized * Mathf.Min(sample.magnitude, c.surface.radial);
                else
                {
                    sample.x = Mathf.Max(sample.x, c.surface.minimum.x);
                    sample.y = Mathf.Max(sample.y, c.surface.minimum.y);
                    sample.z = Mathf.Max(sample.z, c.surface.minimum.z);
                    sample.x = Mathf.Min(sample.x, c.surface.maximum.x);
                    sample.y = Mathf.Min(sample.y, c.surface.maximum.y);
                    sample.z = Mathf.Min(sample.z, c.surface.maximum.z);
                }
                int hitCount = GetIntersection(sample, Vector3.forward, c, hits, bounded: false);
                LightRayHit hit;
                switch (hitCount)
                {
                    case 0:
                        Debug.LogWarning("No Hits - Unable to sample surface at asymptote.");
                        return;
                    case 1:
                        hit = hits[0];
                        break;
                    case 2:
                        hit = hits[0].point.sqrMagnitude < hits[1].point.sqrMagnitude ? hits[0] : hits[1];
                        break;
                    default:
                        Debug.LogWarning("Too many hits - This should not happen :)");
                        return;
                }
                vertices.Add(hit.point);
                normals.Add(hit.normal);
                uvs.Add(new Vector2((i + gridSize - gridSize / 2) / gridSize, j + gridSize - gridSize / 2) / gridSize);
            }
        }

        //int countPerMesh = vertices.Count / (subMesh + 1);
        //int offset = countPerMesh / (gridSize * gridSize);

        int actualGridSize = Mathf.CeilToInt(Mathf.Sqrt(vertices.Count / (subMesh + 1)));

        for (int i = 0; i < actualGridSize * (actualGridSize - 1) - 1; i++)
        {
            if ((i + 1) % actualGridSize == 0) continue;

            triangles[subMesh].AddRange(new List<int>() {
                currentIndex + i, currentIndex + i + actualGridSize, currentIndex + i + 1 + actualGridSize,
                currentIndex + i + 1 + actualGridSize, currentIndex + i + 1,  currentIndex + i
            });

            triangles[subMesh].AddRange(new List<int>() {
                currentIndex + i + 1 + actualGridSize, currentIndex + i + actualGridSize, currentIndex + i,
                currentIndex + i, currentIndex + i + 1, currentIndex + i + 1 + actualGridSize
            });

            //triangles[subMesh].AddRange(
            //    (subMesh % 2 == 0) ? new List<int>() { currentIndex + i, currentIndex + i + actualGridSize, currentIndex + i + 1 + actualGridSize,
            //        currentIndex + i + 1 + actualGridSize, currentIndex + i + 1,  currentIndex + i
            //    } : new List<int>() { currentIndex + i + 1 + actualGridSize, currentIndex + i + actualGridSize, currentIndex + i,
            //        currentIndex + i, currentIndex + i + 1, currentIndex + i + 1 + actualGridSize }
            //);
        }
        currentIndex = vertices.Count;
    }

    //private void OnDrawGizmos()
    //{
    //    if (vertices == null) return;

    //    for (int i = 0; i < vertices.Count; i++)
    //    {
    //        Gizmos.DrawSphere(vertices[i], 0.02f);
    //    }
    //}
}