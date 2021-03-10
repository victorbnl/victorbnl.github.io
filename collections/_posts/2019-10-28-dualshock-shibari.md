---
layout: post
title: Dualshock Shibari Guide
author: Victor B
---

This guide will be a guide telling you how to use your DS3/DS4 on a Windows 10 PC

## (optionnal) Setup Bluetooth

- Download BthPS3 Drivers
- Install it, it’s pretty straightforward
- At the end you may see a screen which tells you “Show next steps” and if you click on a link an error page appears, ignore it

## Downloads

Download all these requirements :

- Shibari
- Fireshock
- ViGEm Bus Driver

(always take the latest version of course)

## Install the drivers

- Unpack Fireshock
- Launch dpinst or dpinst64
- Run the ViGEm Bus Driver setup

Start the server

- Extract the Shibari archive
- Run Shibari.Dom.Server.exe

## (optionnal) Make it persistent

- Open an admin command prompt (right click on Win logo + “Windows Powershell (as admin)”)
- cd to the path where Shibari is located (don't change this folder then, or it will not work anymore)
- Shibari.Dom.Server.exe install

## (optionnal) Make it a Dualshock 4

By default, Shibari will emulate a xbox controller, however you can make it a Dualshock 4 one. Please note that it’s not supported by most of the games. It can be useful where it’s required to have a Dualshock, for example for Playstation Now.

```json
"sinks": [
    {
        "fullName": "Shibari.Sub.Sink.ViGEm.DS4.Core.ViGEmSinkDS4",
        "configuration": {
            "isEnabled": false
        }
    },
    {
        "fullName": "Shibari.Sub.Sink.ViGEm.X360.Core.ViGEmSinkX360",
        "configuration": {
            "isEnabled": true,
        }
    }
]
```

## Sources

This guide is based on:

- https://forums.vigem.org/topic/362/playstation-r-3-peripherals-unofficial-bluetooth-drivers-bthps3
- https://forums.vigem.org/topic/357/bthps3-post-setup-instructions