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

Then install [fish-nvm](https://github.com/jorgebucaran/fish-nvm):

```bash
fisher add jorgebucaran/fish-nvm
```

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

```js
module.exports = {
  shell: '/usr/local/bin/fish',
};
```
