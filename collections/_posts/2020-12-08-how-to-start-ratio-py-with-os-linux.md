---
layout: post
title: How to start Ratio.py with OS (Linux)
author: Victor B
---

In this article we’re going to tackle how to start Ratio.py with the OS (Linux only) by creating a systemd service

## Create a new user

For security reasons, let’s create a new user that will execute the script

```
$ adduser ratio
```

Then clone the repository https://github.com/MisterDaneel/Ratio.py in the user directory (or whatever directory you want of course) and add the configuration. I assume you already know how to use Ratio.py, if you don’t know, please check the README.

## Install pipenv

First install pip

```
# apt install python3-pip
```

Then go in the ratio account

```
$ su ratio
```

And install pipenv

```
$ pip3 install pipenv
```

Then we’re going to create the systemd service

```ini
[Unit]
Description=Ratio.py service
After=network.target[Service]
Restart=always
RestartSec=1
User=ratio
WorkingDir=/home/ratio/Ratio.py
ExecStart=/home/ratio/.local/bin/pipenv python ratio.py -c config.json
```

## Customize it your way

Of course feel free to do whatever you want, if you don’t want to use pipenv, if you want to change the pathes, the user name…