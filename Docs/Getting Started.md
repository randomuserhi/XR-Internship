# Install Visual Studio 2022
Download [Visual Studio](https://visualstudio.microsoft.com/vs/)

In the installer make sure to have the following selected:
![[Pasted image 20220929065202.png]]

# Install Unity
1) Install [Unity Hub](https://unity3d.com/get-unity/download)
2) Navigate to `Installs` on the left panel and click `Install Editor` on the top right:
![[Pasted image 20220929060253.png|800]]
3) Choose version `2020.3.40f1` (or whatever 2020 LTS version is available)
*NOTE:: The reason `2020.3.40f1` is used over `2021.3.10f1` is because it is more stable with the hololens as of when this document was written. Refer to [Microsoft's known issues page](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/unity/known-issues).*
![[Pasted image 20220929060439.png|800]]
4) Make sure you install the following modules:
![[Pasted image 20220929060550.png|800]]

# Download MRTK Feature Tool
Download [MRTK Feature Tool](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/unity/welcome-to-mr-feature-tool) from the download section, this is required to use the majority of tools provided.

# Setup headsets
Different headsets require some additional setup:

## Hololens 2
1) Turn on Developer Mode in windows settings on *both* the hololens and desktop: (Make sure they are paired, click pair on hololens and input code)
![[Pasted image 20220726164900.png]] 

## Oculus Quest 2
1) Create Oculus account.
2) Sign up for developer. - [link](https://developer.oculus.com/)
3) Download the Oculus desktop app. - [link](https://store.facebook.com/gb/en/quest/setup/?utm_source=l.facebook.com&utm_medium=oculusredirect)
![[Pasted image 20220726142106.png|200]]
4) Download the Oculus mobile app.
5) Login to Oculus account on both desktop and mobile app.
6) Connect to Oculus on mobile app using bluetooth.
	- Go to `menu` in the bottom right and select devices
	![[Pasted image 20220726142452.png|200]]
	- Scroll down to `Developer Mode`
	![[Pasted image 20220726142547.png|200]]
	- Enable `Developer Mode`
	![[Pasted image 20220726142643.png]]
7) Install [oculus adb drivers](https://developer.oculus.com/downloads/package/oculus-adb-drivers/)
8) Connect the headset to your PC via link cable (USB-C connection). When you put the headset on it should prompt you to enable `USB Debugging`. Click `Allow`.

# Setup Unity Project
1) In `Unity Hub` click `New Project` in the top right and select a `3D project` and make sure you are using the correct editor version. Set the project name and location to your preference:
![[Pasted image 20220929061946.png|800]]

2) Open up the `package manager`:
![[Pasted image 20220929062259.png]]
3) Select `Unity Registries`:
![[Pasted image 20220929062324.png]]
4) Click the `+` in the top left and click `Add package from git URL...`:
![[Pasted image 20220929062437.png]]
- Insert the following URLs one by one to install them:
	- `com.unity.render-pipelines.core`
	- `com.unity.render-pipelines.universal`
	- `com.unity.xr.openxr` (A popup will occure for turning on the old input system, click `yes`)
		- At the end a window will appear with an error, click `Edit`: ![[Pasted image 20220929062820.png]]
		- Click the plus in the window that appears on the bottom right under `Interaction Profiles` and add `Microsoft Hand Interaction Profile` and `Oculus Touch Controller Profile`: ![[Pasted image 20220929062959.png]]
5) Open [[Getting Started#Download MRTK Feature Tool|MRTK Feature Tool]] and click `Start`. Locate your project and click `open` with an `_` as your file name:
![[Pasted image 20220929063247.png|800]]
6) Click `Discover Features` and select `Mixed Reality Toolkit Extensions` and `Mixed Reality Toolkit Foundation` from `Mixed Reality Toolkit` header and `Mixed Reality OpenXR plugin` from `Platform Support`. Then click `Get Features`, `Import`, `Approve`:
![[Pasted image 20220929064448.png|800]]
![[Pasted image 20220929063419.png|800]]
7) Close MRTK Feature Tool and switch back to Unity (It may take a while for unity to finish importing). Once completed, a popup should appear. Click `Unity OpenXR plugin`:
![[Pasted image 20220929063641.png]]
8) The `MRTK Project Configurator` should now prompt to click `Show settings`, this should navigate you to `Edit > Project Settings`. Select `XR Plug-in Management` and under each build target, tick `OpenXR`:
![[Pasted image 20220929064034.png]]

9) Back in `MRTK Project Configurator` click `Apply Settings` followed by `Next`
![[Pasted image 20220929064637.png]]
10) Click `Apply` then `Next`:
![[Pasted image 20220929064736.png]]
11) Click `Import TMP Essentials`:
![[Pasted image 20220929064816.png]]
12) Click `Done`:
![[Pasted image 20220929064847.png]]

13) Navigate to `Edit > Project Settings`
![[Pasted image 20220929064933.png]]
14) In `XR Plug-in Management` click the little warning symbol:
![[Pasted image 20220929065259.png]]
15) Click `Fix All` in the window that pops up.
![[Pasted image 20220929065404.png]]
16) Repeat steps *14* and *15* for the other 3 build targets and set their `Render Mode` to `Multi-pass` such that they look like so (Android will need you to add the `oculus touch interaction profile`):
![[Pasted image 20220929065618.png]]
![[Pasted image 20220929065635.png]]
![[Pasted image 20220929065833.png]]

17) Import the `MRTK Profile` folder from the github into your unity project:
![[Pasted image 20220929075921.png]]
18) In your scene right click and click `Create Empty`, name the object *Toolkits*: ![[Pasted image 20220929075950.png]]
19) Select the *Toolkits* object and in the `Inspector` window click `Add Component` and find `MixedRealityToolkit`: ![[Pasted image 20220929080103.png]]
20) Change `Active Profile` to `Sparse MRTK`: ![[Pasted image 20220929080137.png]]

*NOTE:: Perform both setups below only if you want your project to be switchable between both devices without having a different project for each device. Otherwise only perform the setup for your chosen device.*
*NOTE:: It is not recommended to prepare a single project for both Hololens and Oculus because it creates large project files with no crossover resulting in large executables.*

## Setup for hololens
1) Navigate to `File > Build Settings` and select `Universal Windows Platform`. Click `Switch platform` on the bottom right and make sure the settings are the same as shown here:
![[Pasted image 20220929070208.png]]
![[Pasted image 20220929070249.png]]

### Play Mode
1) To allow for play mode in unity, download the `Holoremoting app` on the hololens from the microsoft store.
2) In `Project Settings > XR Plug-in Management` under desktop build target, select `holoremoting` and then click the red alert and click `Fix All`.
![[Pasted image 20220929070623.png]]
![[Pasted image 20220929070639.png]]
3) On the last error click `edit`:
![[Pasted image 20220929070705.png]]
4) In the new window that popped up, type the IP address of the hololens provided by the hololens remoting app on the hololens (Boot up the app on the headset and it will give you an IP. If the hololens is not connected to the internet, providing a wired connection will also prompt an IP which can be used):
![[Pasted image 20220929070839.png]]


## Setup for oculus
1) Via the package manager, import the [Oculus Integration](https://assetstore.unity.com/packages/tools/integration/oculus-integration-82022) package and download via git url: `com.unity.xr.oculus`.
*NOTE:: You will need to go the unity asset store and download the asset onto your unity account so that it shows up under `My Assets`*
![[Pasted image 20220929071439.png]]
*NOTE:: If Unity asks what specific files to import, simply select all and click `Import`*
2) When prompted to update `OVR` click `yes`:
![[Pasted image 20220929071833.png]]
3) When prompted to use `OpenXR` click `Use OpenXR`:
![[Pasted image 20220929071855.png]]
4) When prompted to restart Unity click `restart`.
5) When prompted to cleanup assets click `Show Assets`, the click `Clean up`:
![[Pasted image 20220929071947.png]]
![[Pasted image 20220929072019.png]]
6) When prompted to update `Spatializer plugin` click `upgrade`:
![[Pasted image 20220929072049.png]]
7) When prompted to restart unity click `restart`.
8) When prompted to enable Oculus XR click `enable`:
![[Pasted image 20220929072132.png]]
9) If MRKT prompts you to apply `Spatial Awareness layer`, just click `Apply`, `Next` and then `Done`:
![[Pasted image 20220929072305.png]]
10) Plug in your Oculus Quest 2 headset and make sure it is connected via the Oculus Desktop App.
11) Navigate to `File > Build Settings` and select `Android`. Click `Switch platform` on the bottom right and make sure the settings are the same as shown here:
![[Pasted image 20220929070208.png]]

![[Pasted image 20220929072553.png]]
*NOTE:: If your headset does not showup under `Run Device` double check if USB debugging is enabled on the headset and that developer mode was enabled for your oculus account.*

12) Upon switching platform to `Android` you may be prompted by MRTK to apply android settings. If so, click `Apply`, `Next`, `Done`: ![[Pasted image 20220929073953.png]]
13) Navigate to your `Oculus` folder and find `Oculus Project Config (OVR Project Config)` asset.![[Pasted image 20220929074223.png]]
14) After selecting it, in the `inspector` window change the settings to match: ![[Pasted image 20220929074340.png]]
15) Click `Oculus > Tools > Create store-compatible AndroidMainfest.xml`: ![[Pasted image 20220929074447.png]]
16) Locate and open the `AndroidManifest.xml` file in your assets: ![[Pasted image 20220929074526.png]]
17) Add the denoted lines to the file:
```xml
<?xml version="1.0" encoding="utf-8" standalone="no"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" android:installLocation="auto">
  <application android:label="@string/app_name" android:icon="@mipmap/app_icon" android:allowBackup="false">
    <activity android:theme="@android:style/Theme.Black.NoTitleBar.Fullscreen" android:configChanges="locale|fontScale|keyboard|keyboardHidden|mcc|mnc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|touchscreen|uiMode" android:launchMode="singleTask" android:name="com.unity3d.player.UnityPlayerActivity" android:excludeFromRecents="true">
      <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
        <category android:name="com.oculus.intent.category.VR" />
      </intent-filter>
      <meta-data android:name="com.oculus.vr.focusaware" android:value="true" />
    </activity>
    <meta-data android:name="unityplayer.SkipPermissionsDialog" android:value="false" />
    <meta-data android:name="com.samsung.android.vr.application.mode" android:value="vr_only" />
    <meta-data android:name="com.oculus.handtracking.frequency" android:value="HIGH" />
    <meta-data android:name="com.oculus.handtracking.version" android:value="V2.0" />
    <meta-data android:name="com.oculus.supportedDevices" android:value="quest|quest2" />
  </application>
  <uses-feature android:name="android.hardware.vr.headtracking" android:version="1" android:required="true" />
  <uses-feature android:name="oculus.software.handtracking" android:required="true" />
  <uses-permission android:name="com.oculus.permission.HAND_TRACKING" />
  
  <!-- ADD THESE 2 LINES HERE -->
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
  
</manifest>
```

### Play Mode
1) On the oculus headset navigate to `Quest Link` and then simply click play in Unity whenever.
2) In the oculus desktop app go to settings and enable `Unknown sources` and set oculs as active `OpenXR Runtime`:
*NOTE:: If you do not do this, Unity will crash.*
![[Pasted image 20220929083431.png]]

## Switching between hololens and oculus
*NOTE:: only relevant if you performed both setups for hololens and oculus.*

- For builds, simply switch build target (`Android` for oculus and `Universal Windows Platform` for hololens).

- For play mode:
	- Hololens -> Oculus
		1) In project settings disable holographic remoting and enable `OculusXR Feature` ![[Pasted image 20220929073027.png]] ![[Pasted image 20220929073104.png]]
	- Oculus -> Hololens
		1) In project settings enable holographic remoting and disable `OculusXR Feature` ![[Pasted image 20220929073451.png]]![[Pasted image 20220929073414.png]]