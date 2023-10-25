using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace VirtualRealityTK
{
    public static partial class VRTKUtils
    {
        public static void InitializeArray<T>(this T[] self) where T : new()
        {
            for (int i = 0; i < self.Length; ++i)
            {
                self[i] = new T();
            }
        }

        public static float SignedDistance(Vector3 from, Vector3 to, Vector3 direction)
        {
            Vector3 dir = to - from;
            return Vector3.Distance(from, to) * Mathf.Sign(Vector3.Dot(dir, direction));
        }

        public static float SignedProjectedDistance(Vector3 from, Vector3 to, Vector3 direction)
        {
            Vector3 dir = to - from;
            return Vector3.Project(dir, direction).magnitude * Mathf.Sign(Vector3.Dot(dir, direction));
        }

        // https://answers.unity.com/questions/660369/how-to-convert-python-in-to-c-maths.html
        //Two non-parallel lines which may or may not touch each other have a point on each line which are closest
        //to each other. This function finds those two points. If the lines are not parallel, the function 
        //outputs true, otherwise false.
        public static bool ClosestPointsOnTwoLines(out Vector3 closestPoint1, out Vector3 closestPoint2, Vector3 p1, Vector3 vec1, Vector3 p2, Vector3 vec2)
        {
            closestPoint1 = Vector3.zero;
            closestPoint2 = Vector3.zero;

            float a = Vector3.Dot(vec1, vec1);
            float b = Vector3.Dot(vec1, vec2);
            float e = Vector3.Dot(vec2, vec2);

            float d = a * e - b * b;

            //lines are not parallel
            if (d != 0.0f)
            {
                Vector3 r = p1 - p2;
                float c = Vector3.Dot(vec1, r);
                float f = Vector3.Dot(vec2, r);

                float s = (b * f - c * e) / d;
                float t = (a * f - c * b) / d;

                closestPoint1 = p1 + vec1 * s;
                closestPoint2 = p2 + vec2 * t;

                return true;
            }
            else return false;
        }

        // See: https://forum.unity.com/threads/shortest-rotation-between-two-quaternions.812346/
        public static Quaternion ShortestRotation(Quaternion a, Quaternion b)
        {
            if (Quaternion.Dot(a, b) < 0)
            {
                return a * Quaternion.Inverse(Multiply(b, -1));
            }
            else return a * Quaternion.Inverse(b);
        }

        public static Quaternion Multiply(Quaternion input, float scalar)
        {
            return new Quaternion(input.x * scalar, input.y * scalar, input.z * scalar, input.w * scalar);
        }

        // See: https://forum.unity.com/threads/average-quaternions.86898/
        public static Quaternion AverageQuaternion(Quaternion[] quats)
        {
            if (quats.Length == 0)
            {
                return Quaternion.identity;
            }

            Vector4 cumulative = new Vector4(0, 0, 0, 0);

            foreach (Quaternion quat in quats)
            {
                AverageQuaternion_Internal(ref cumulative, quat, quats[0]);
            }

            float addDet = 1f / (float)quats.Length;
            float x = cumulative.x * addDet;
            float y = cumulative.y * addDet;
            float z = cumulative.z * addDet;
            float w = cumulative.w * addDet;
            //note: if speed is an issue, you can skip the normalization step
            return NormalizeQuaternion(new Quaternion(x, y, z, w));
        }

        //Get an average (mean) from more then two quaternions (with two, slerp would be used).
        //Note: this only works if all the quaternions are relatively close together.
        //Usage:
        //-Cumulative is an external Vector4 which holds all the added x y z and w components.
        //-newRotation is the next rotation to be added to the average pool
        //-firstRotation is the first quaternion of the array to be averaged
        //-addAmount holds the total amount of quaternions which are currently added
        public static void AverageQuaternion_Internal(ref Vector4 cumulative, Quaternion newRotation, Quaternion firstRotation)
        {
            //Before we add the new rotation to the average (mean), we have to check whether the quaternion has to be inverted. Because
            //q and -q are the same rotation, but cannot be averaged, we have to make sure they are all the same.
            if (!AreQuaternionsClose(newRotation, firstRotation))
            {
                newRotation = InverseSignQuaternion(newRotation);
            }

            //Average the values
            cumulative.w += newRotation.w;
            cumulative.x += newRotation.x;
            cumulative.y += newRotation.y;
            cumulative.z += newRotation.z;
        }

        public static Quaternion NormalizeQuaternion(Quaternion quat)
        {
            float lengthD = 1.0f / Mathf.Sqrt(quat.w * quat.w + quat.x * quat.x + quat.y * quat.y + quat.z * quat.z);
            quat.x *= lengthD;
            quat.y *= lengthD;
            quat.z *= lengthD;
            quat.w *= lengthD;
            return quat;
        }

        //Changes the sign of the quaternion components. This is not the same as the inverse.
        public static Quaternion InverseSignQuaternion(Quaternion q)
        {
            return new Quaternion(-q.x, -q.y, -q.z, -q.w);
        }

        //Returns true if the two input quaternions are close to each other. This can
        //be used to check whether or not one of two quaternions which are supposed to
        //be very similar but has its component signs reversed (q has the same rotation as
        //-q)
        public static bool AreQuaternionsClose(Quaternion q1, Quaternion q2)
        {
            float dot = Quaternion.Dot(q1, q2);

            if (dot < 0.0f)
            {
                return false;
            }

            else
            {
                return true;
            }
        }
    }
}
