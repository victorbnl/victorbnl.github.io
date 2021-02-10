---
layout: post
title: Network on Dolphin (wiimmfi)
author: Victor B
---

Here you’ll see how to use wiimmfi on Dolphin to play games with your friends. (Windows only)

First download all these requirements :

- [NUSDownloader and extract_certs.exe](https://fr.dolphin-emu.org/docs/guides/wii-network-guide/)
- [MWK Wiimfi Patcher or Wiimmfi Patcher v4(depending if your game is Mario Kart or not)](https://download.wiimm.de/wiimmfi/patcher/)
- [Wiimmfi Unbanner](https://www.dropbox.com/s/pagcu7bfmtjce5z/Wiimmfi%20Unbanner.exe)

## Get the certificates files

Then open *NUSDownloader*, go in *Database… > IOS > […] IOS 13 > Latest version*

In the bottom please make sure to have *Create Decrypted Contents (\*.app)* ticked.

Go in the titles folder, then in its folder, then in its folder and drag & drop *00000011.app* on *extract_certs.exe*.

Some files will be generated in the folder of *00000011.app*. Take them (these are the *.pem* files), and put them in *pathToYourUser/Documents/Dolphin Emulator/Wii* (replace files).

## Patch games

### If Mario Kart

Put the ROM in the *mkw-wiimmfi-patcher-v6/* folder and double click *patch-wiimmfi.bat*, wait for the script to finish and ask you to press a key.

Your game should be patched and in the *wiimmfi-images* folder

### Else

Put the rom in the *wiimmfi-patcher-v4/Windows* folder, *patch-wiimmfi.bat* wait for the program to finish and you should find your patched game in *../wiimmfi-images*

## Wiimmfi Unbanner

You may (and you’ll probably) have problems to connect, it probably means your wii as been banned (because actually all the users that use Dolphin have the same one).

Start Wiimmfi Unbanner.exe, a command prompt should appear, go in your Documents and drag&drop the Dolphin Emulator folder on the command prompt, it’ll fix it and you should be ready to play.

If you still have problems to connect, please visit this page