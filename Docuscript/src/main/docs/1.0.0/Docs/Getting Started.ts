RHU.require(new Error(), { 
    docs: "docs", rhuDocuscript: "docuscript",
}, function({
    docs, rhuDocuscript,
}) {
    const version = "1.0.0";
    const path = "Docs/Getting Started";
    
    const page = docuscript<RHUDocuscript.Language, RHUDocuscript.FuncMap>(({
        h, p, div, br, code, link
    }) => {
        code("language-cs",
`using Gear;
using HarmonyLib;
using Player;
using UnityEngine;

[HarmonyPatch]
internal class FirePatches
{
    private static BulletWeapon? weapon;

    [HarmonyPatch(typeof(Weapon), nameof(Weapon.CastWeaponRay), new Type[]
    {
        typeof(Transform),
        typeof(Weapon.WeaponHitData),
        typeof(Vector3),
        typeof(int)
    }, new ArgumentType[]
    {
        ArgumentType.Normal,
        ArgumentType.Ref,
        ArgumentType.Normal,
        ArgumentType.Normal
    })]
    [HarmonyPrefix]
    private static void CastWeaponRay(ref Transform alignTransform, ref Weapon.WeaponHitData weaponRayData, ref Vector3 originPos, int altRayCastMask)
    {
        Debug.Log("WE REACHED HERE 1");

        if (weapon == null) return;

        Vector3 position = weapon.MuzzleAlign.position;
        if (weapon.Owner.FPSCamera.CameraRayDist < 1)
        {
            position = weapon.Owner.FPSCamera.Position;
        }

        alignTransform = weapon.MuzzleAlign;
        weaponRayData.fireDir = (weapon.Owner.FPSCamera.CameraRayPos - position).normalized;
        originPos = position;

        Debug.Log("WE REACHED HERE 2");
    }
    [HarmonyPatch(typeof(BulletWeapon), nameof(BulletWeapon.Fire))]
    [HarmonyPrefix]
    private static void Pre_Fire(BulletWeapon __instance)
    {
        weapon = __instance;
    }
    [HarmonyPatch(typeof(BulletWeapon), nameof(BulletWeapon.Fire))]
    [HarmonyPostfix]
    private static void Post_Fire(BulletWeapon __instance)
    {
        weapon = null;
    }
    [HarmonyPatch(typeof(Shotgun), nameof(Shotgun.Fire))]
    [HarmonyPrefix]
    private static void Pre_Shotgun_Fire(Shotgun __instance)
    {
        weapon = __instance;
    }
    [HarmonyPatch(typeof(Shotgun), nameof(Shotgun.Fire))]
    [HarmonyPostfix]
    private static void Post_Shotgun_Fire(Shotgun __instance)
    {
        weapon = null;
    }
}`
        );
    }, rhuDocuscript);
    docs.get(version)!.setCache(path, page);
    return page;
});