var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

if (battery) {
	document.getElementById("bg").style.opacity = battery.level;
}
else {
	batterySupported.innerHTML = "Battery API not supported on your device/computer";
} 

 
function updateBatteryStatus() {
  console.log("Niveau batterie : " + battery.level );
}

battery.addEventListener("bg", updateBatteryStatus);
updateBatteryStatus();

 
