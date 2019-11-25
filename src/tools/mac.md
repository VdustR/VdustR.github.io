# Mac

## Fix Xcode

```sh
sudo rm -rf $(xcode-select -print-path) # Enter root password. No output is normal.
xcode-select --install
```

reference: <https://github.com/nodejs/node-gyp/issues/1927#issuecomment-546479900>
