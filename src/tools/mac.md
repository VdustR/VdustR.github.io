# Mac

## Change Dock Size From Terminal

```sh
defaults write com.apple.dock tilesize -int 32; killall Dock
```

- reference: <https://gist.github.com/oguzolmez/0e7120ec5de938e600b48b799b1d5c1d>

## Fix Xcode

```sh
sudo rm -rf $(xcode-select -print-path) # Enter root password. No output is normal.
xcode-select --install
```

reference: <https://github.com/nodejs/node-gyp/issues/1927#issuecomment-546479900>
