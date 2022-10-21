# Hololens
1) In `Build Settings` make sure `Universal Windows Platform` is selected, if not click on it and click `Switch Platform`.
2) Click Build and when it finishes, Unity should create a new Visual Studio solution which you can open.
*It will look something like this:*
![[Pasted image 20220929074838.png]]
3) Open the project and change the build to `Release`, `ARM64`, `Remote Machine`:
![[Pasted image 20220929075008.png]]
4) Open `Package.appxmanifest`:
![[Pasted image 20220929075041.png]]
5) Click on `Capabilities` and make sure the following are selected:
![[Pasted image 20220929075126.png]]
6) Click on `Packaging` and change the name so that the build doesn't override other builds:
![[Pasted image 20220929075213.png]]
7) Right click the solution on the right and click `properties`:
![[Pasted image 20220929075244.png]]
8) In `Debugging` set the `machine name` to the IP of the hololens provided by the `holoremoting app` on the headset: ![[Pasted image 20220929075352.png]]
9) Click `OK` then click `Remote Machine` to build to the hololens: ![[Pasted image 20220929075421.png]]
*NOTE:: You can stream with the hololens by connecting to its IP via browser and logging in before going to recording and clicking view live*
![[Pasted image 20220929085015.png]]

# Oculus
1) In `Build Settings` make sure `Android` is selected, if not click on it and click `Switch Platform`.
2) Click `Oculus > OVR Build > OVR Build APK and Run` ![[Pasted image 20220929074015.png]]
*NOTE:: The APK is deployed to the Oculus and can be found under `Unknown Sources` when looking in library. If the APK fails to deploy you may need to uninstall it from here first and then try again.*
