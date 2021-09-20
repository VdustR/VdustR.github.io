---
title: Podman in WSL2
author: ViPro
author_title: A web developer just came back to Windows
author_url: https://github.com/VdustR
author_image_url: https://avatars.githubusercontent.com/u/29639463
tags: [podman, podman-compose, container, wsl2, windows, fish]
description: Quick steps to install podman in windows
image: https://i.imgur.com/TccPXfi.png
hide_table_of_contents: false
---

## Install WSL2

👉 [Windows Subsystem for Linux Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

## Install Ubuntu (Optional)

👉 [Get Ubuntu - Microsoft Store](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6)

## Install podman

👉 [How to run Podman on Windows with WSL2](https://www.redhat.com/sysadmin/podman-windows-wsl2)

## Install podman-compose

Install python3 and pip:

```bash
sudo apt-get -y install python3 python3-venv python3-pip
pip3 install podman-compose
```

Notice that you have to add `~/.local/bin` to `PATH`

### Integrate podman-compose and fish

Install the latest fish shell for [`fish_add_path`](https://fishshell.com/docs/current/cmds/fish_add_path.html) if your fish is < `3.3.0`:

```bash
# Check version
$ fish -v
fish, version 3.3.1

$ sudo apt-add-repository ppa:fish-shell/release-3
$ sudo apt-get update
$ sudo apt-get install fish
```

Check the [official document](https://fishshell.com/) if you use another distribution.

Add into `~/.config/fish/config.fish`:

```bash
fish_add_path ~/.local/bin
```

## Reference

- [Windows Subsystem for Linux Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [How to run Podman on Windows with WSL2](https://www.redhat.com/sysadmin/podman-windows-wsl2)
