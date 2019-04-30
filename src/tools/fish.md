# Fish Shell

Official site: <https://fishshell.com/>

## Install

Mac:

```bash
brew install fish
```

Make sure where fish is:

```bash
$ which fish
/usr/local/bin/fish
```

Check if fish is a system shell now:

```bash
cat /etc/shells
```

If there is no fish shell, add it into `/etc/shells`:

```diff
  /bin/bash
  /bin/csh
  /bin/ksh
  /bin/sh
  /bin/tcsh
  /bin/zsh
+ /usr/local/bin/fish
```

You can set it as default shell:

Set it as default shell:

```bash
chsh -s /usr/local/bin/fish
```

## Fisher

[Fisher](https://github.com/jorgebucaran/fisher) is a package manager for the fish shell.

Install:

```bash
curl https://git.io/fisher --create-dirs -sLo ~/.config/fish/functions/fisher.fish
```

If you can't use `fisher` command, try re-login the shell.

### Spacefish

[Spacefish](https://github.com/matchai/spacefish) is a minimalistic, powerful and extremely customizable Fish Shell prompt. It combines everything you may need for convenient work, without unnecessary complications, like a real spacefish.

```bash
fisher add matchai/spacefish
```

### Other commands

List packages:

```bash
fisher ls

fisher ls <regexp>
fisher ls "^gitlab|fish-.*"
```

Update packages:

```bash
fisher
```

Update fisher:

```bash
fisher self-update
```

Remove package:

```bash
fisher rm <packageName>
fisher rm rafaelrinaldi/pure
```

Remove all packages:

```bash
fisher ls | fisher rm
```

Uninstall fisher:

```bash
fisher self-uninstall
```

### Fixing Perl Warning: Setting locale failed on Mac OS

You might see this while you execute `fisher`:

```sh
perl: warning: Setting locale failed.
perl: warning: Please check that your locale settings:
        LC_ALL = (unset),
        LANG = "en_TW.UTF-8"
    are supported and installed on your system.
```

Edit fish config:

```sh
vi ~/.config/fish/config.fish
```

Add locale environment variables:

```diff
+ export LC_CTYPE=en_US.UTF-8
+ export LC_ALL=en_US.UTF-8
```

Reference: [Fixing Perl Warning: Setting locale failed on Mac OS X Mavericks](https://blogs.agilefaqs.com/2014/01/12/fixing-perl-warning-setting-locale-failed-on-mac-osx/)

## Integrate with nvm

[Node Version Manager](https://github.com/creationix/nvm) - Simple **bash** script to manage multiple active node.js versions

To install or update nvm, you can use the install script using cURL:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

or Wget:

```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

Then install [fish-nvm](https://github.com/FabioAntunes/fish-nvm):

```bash
fisher add FabioAntunes/fish-nvm edc/bass
```

If node is not loaded at start, create a init script:

```bash
vi ~/.config/fish/conf.d/nvm.fish
```

and enter:

```bash
nvm install node
```

then try another session.

## Integrate with Docker

Migrate with [docker(_archived_)](https://github.com/barnybug-archive/docker-fish-completion):

```bash
fisher add barnybug/docker-fish-completion
```

Migrate with [docker-compose](https://github.com/brgmnn/fish-docker-compose):

```bash
fisher add  brgmnn/fish-docker-compose
```

## Integrate with [Vistual Studio Code](/tools/vscode)

Edit [settings.json](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations):

```json
{
  "terminal.integrated.shell.osx": "/usr/local/bin/fish"
}
```

## Integrate with [Hyper.js](/tools/hyper)

Edit `~/.hyper.js`:

```js
module.exports = {
  shell: '/usr/local/bin/fish',
};
```

## Windows alternative

[Cmder](https://cmder.net/) is a software package created out of pure frustration over the absence of nice console emulators on Windows. It is based on amazing software, and spiced up with the Monokai color scheme and a custom prompt layout, looking sexy from the start.

🔗[Seamless VS Code Integration](https://github.com/cmderdev/cmder/wiki/Seamless-VS-Code-Integration)  
🔗[Seamless Hyper integration](https://github.com/cmderdev/cmder/wiki/Seamless-Hyper-integration)
