using System.Collections;
using System.Collections.Generic;
using UnityEngine;
#if UNITY_EDITOR
using UnityEditor;
#endif

namespace LightTK
{
    [System.Serializable]
    [CreateAssetMenu(fileName = "Cylinder", menuName = "LTK/Create Cylinder", order = 1)]
    public class Cylinder : AbstractSurface
    {
        public float minimum
        {
            get { return surface.minimum.z; }
            set { surface.minimum.z = value; }
        }

        public float maximum
        {
            get { return surface.maximum.z; }
            set { surface.maximum.z = value; }
        }

        public float radius
        {
            get { return Mathf.Sqrt(-surface.equation.p); }
            set { surface.equation.p = -(value * value); }
        }

        public Cylinder(float minimum = float.NegativeInfinity, float maximum = float.PositiveInfinity)
        {
            surface = new Surface()
            {
                equation = Equation.Cylinder,
                minimum = Vector3.negativeInfinity,
                maximum = Vector3.positiveInfinity,
                settings = RefractionEquation.crownGlass
            };
            this.minimum = minimum;
            this.maximum = maximum;
        }

#if UNITY_EDITOR
        public override void OnInspectorGUI()
        {
            EditorGUILayout.LabelField("Cylinder Settings", EditorStyles.boldLabel);
            EditorGUILayout.Space();

            EditorGUILayout.LabelField("Bounds", EditorStyles.boldLabel);
            minimum = EditorGUILayout.FloatField("Minimum", minimum);
            maximum = EditorGUILayout.FloatField("Maximum", maximum);
            EditorGUILayout.Space();

            EditorGUILayout.LabelField("Properties", EditorStyles.boldLabel);
            radius = EditorGUILayout.FloatField("Radius", radius);
        }
#endif
    }
}