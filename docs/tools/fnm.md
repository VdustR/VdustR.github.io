# fnm

🚀 Fast and simple Node.js version manager, built in Rust

<https://github.com/Schniz/fnm>

## Install

```bash
curl -fsSL https://fnm.vercel.app/install | bash
```

Auto switch to the specified version described in `.nvmrc` or `.node-version`:

```diff title="~/.bashrc"
  # fnm
  export PATH=/home/v/.fnm:$PATH
- eval "`fnm env`"
+ eval "$(fnm env --use-on-cd)"
```

Setup completions:

```bash
fnm completions --shell bash >> ~/.bashrc
```

Fish shell:

```bash
# Setup fish:
echo "fish_add_path $HOME/.fnm" >> ~/.config/fish/conf.d/fnm.fish
# Setup auto switch version:
echo "fnm env --use-on-cd | source" >> ~/.config/fish/conf.d/fnm.fish
# Setup completions:
fnm completions --shell fish >> ~/.config/fish/conf.d/fnm.fish
```

Husky([workaround](https://github.com/Schniz/fnm/issues/428#issuecomment-819439988)):

```bash title="~/.huskyrc"
export PATH="$HOME"/.fnm:"$PATH"
eval "$(fnm env --log-level=quiet | sed -e 's/PATH="\(.*\)":\$PATH/PATH="\1:$PATH"/g')"
```
