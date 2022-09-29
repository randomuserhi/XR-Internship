# Setup Project
Refer to [[Getting Started]]

- In `Project Settings > Player`, for each build target go to `Other Settings` and tick `Allow unsafe code`:
![[Pasted image 20220929080556.png]]

# Importing Toolkits
Simply copy the toolkit files you want to include from the Github repostry into your Unity Project: ![[Pasted image 20220929080746.png]]
- [[Fields Toolkit]] and [[Light Toolkit]] are optional
- [[Interaction Toolkit]], [[Menu Toolkit]], [[Network Toolkit]] and [[Virtual Reality Toolkit]] are all mandatory and depend on each other.

1) Delete the main camera and rig from your unity scene: ![[Pasted image 20220929080909.png]]
2) Drag the `XRRig` prefab from `Interaction Toolkit > Samples` into your scene: ![[Pasted image 20220929081014.png]]
3) Right click on the scene and create a `Empty Gameobject` called `Custom Toolkits`:
![[Pasted image 20220929081231.png]]
4) Select this gameobject and In the `Inspector` add the following components:
- `Network Toolkit`
- `Virtual Reality Toolkit`
![[Pasted image 20220929081335.png]]
5) Drag your `XRRig` object from the scene into the `Master` slot of the `Virtual Reality Toolkit` component and set `Device` to your target device: ![[Pasted image 20220929081441.png]] and s
6) At the top of the object in the `Inspector` window click on `Layer > Add Layer`: ![[Pasted image 20220929082640.png]]
7) Add the missing layers: ![[Pasted image 20220929082721.png]]
8) Go to `Projec Settings > Physics` and change the settings to match:
*NOTE:: The default material can be found in `Interaction Toolkit > Assets`*
![[Pasted image 20220929082524.png]]