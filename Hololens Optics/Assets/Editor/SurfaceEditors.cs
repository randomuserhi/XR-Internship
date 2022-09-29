using UnityEditor;
using UnityEngine.UIElements;
using UnityEditor.UIElements;
using LightTK;
using UnityEngine;

//[CustomPropertyDrawer(typeof(Curve))]
//public class SurfaceEditor : PropertyDrawer
//{
//    public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
//    {

//    }
//}

[CustomEditor(typeof(AbstractSurface), true)]
public class SurfaceEditor : Editor
{
    AbstractSurface s;

    SerializedProperty surfaceType;


    private void OnEnable()
    {
        surfaceType = serializedObject.FindProperty("surfaceType");
        s = (AbstractSurface)target;
        EditorUtility.SetDirty(s);
    }

    public override void OnInspectorGUI()
    {
        serializedObject.Update();

        EditorGUILayout.LabelField("Surface Settings");
        EditorGUILayout.PropertyField(surfaceType);
        s.surface.settings.type = s.surfaceType;

        EditorGUILayout.LabelField("Transform");
        EditorGUILayout.Space();
        s.position = EditorGUILayout.Vector3Field("Position", s.position);
        //Vector4 v4 = new Vector4(s.rotation.x, s.rotation.y, s.rotation.z, s.rotation.w);
        //v4 = EditorGUILayout.Vector4Field("Rotation", v4);
        //s.rotation = new Quaternion(v4.x, v4.y, v4.z, v4.w);
        s.eulerAngles = EditorGUILayout.Vector3Field("Rotation", s.eulerAngles);
        s.rotation = Quaternion.Euler(s.eulerAngles);
        Quaternion temp = s.rotation;
        s.rotation = temp;
        EditorGUILayout.LabelField(s.rotation.x.ToString() + ", " + s.rotation.y.ToString() + ", " + s.rotation.z.ToString() + ", " + s.rotation.w.ToString());
        EditorGUILayout.Space();

        EditorGUILayout.LabelField("Curve");
        EditorGUILayout.Space();
        s.surface.minimum = EditorGUILayout.Vector3Field("Minimum", s.surface.minimum);
        s.surface.maximum = EditorGUILayout.Vector3Field("Maximum", s.surface.maximum);
        s.surface.radial = EditorGUILayout.FloatField("Radius", s.surface.radial);
        EditorGUILayout.Space();
        Vector3 translation = new Vector3(s.surface.surface.g, s.surface.surface.h, s.surface.surface.i);
        translation = EditorGUILayout.Vector3Field("Translation", translation);
        s.surface.surface.g = translation.x;
        s.surface.surface.h = translation.y;
        s.surface.surface.i = translation.z;

        Vector3 linearScale = new Vector3(s.surface.surface.m, s.surface.surface.n, s.surface.surface.o);
        linearScale = EditorGUILayout.Vector3Field("Linear Scale", linearScale);
        s.surface.surface.m = linearScale.x;
        s.surface.surface.n = linearScale.y;
        s.surface.surface.o = linearScale.z;

        Vector3 polynomialScale = new Vector3(s.surface.surface.j, s.surface.surface.k, s.surface.surface.l);
        polynomialScale = EditorGUILayout.Vector3Field("Polynomial Scale", polynomialScale);
        s.surface.surface.j = polynomialScale.x;
        s.surface.surface.k = polynomialScale.y;
        s.surface.surface.l = polynomialScale.z;

        serializedObject.ApplyModifiedProperties();
    }
}