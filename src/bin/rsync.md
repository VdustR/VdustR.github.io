# rsync

## Push Local Files to Remote

Push files under a directory to a directory:

```sh
# local       remote
# /a/b/c/1    /x/
# /a/b/c/2
# /a/b/c/3
rsync -av -e ssh /a/b/c/ root@172.17.0.2:/x
# local       remote
# /a/b/c/1    /x/1
# /a/b/c/2    /x/2
# /a/b/c/3    /x/3
```

Push a folder to a directory:

```sh
# local       remote
# /a/b/c/1    /x/
# /a/b/c/2
# /a/b/c/3
rsync -av -e ssh /a/b/c root@172.17.0.2:/x
# local       remote
# /a/b/c/1    /x/c/1
# /a/b/c/2    /x/c/2
# /a/b/c/3    /x/c/3
```

Push a file to a directory:

```sh
# local       remote
# /a/b/c/1    /x/
rsync -av -e ssh /a/b/c/1 root@172.17.0.2:/x/2/
# local       remote
# /a/b/c/1    /x/2/1
```

Push a file to a path:

```sh
# local       remote
# /a/b/c/1    /x/
rsync -av -e ssh /a/b/c/1 root@172.17.0.2:/x/2
# local       remote
# /a/b/c/1    /x/2
```

## mkdir -p

`rsync` doesn't create directory tree. Use `--rsync-path`

> --rsync-path=PROGRAM Use this to specify what program is to be run on the remote machine to start-up rsync.

```sh
# local       remote
# /a/b/c/1    /x/
# /a/b/c/2
# /a/b/c/3
$ rsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/y/z/
sending incremental file list
rsync: mkdir "/x/y/z" failed: No such file or directory (2)
rsync error: error in file IO (code 11) at main.c(675) [Receiver=3.1.2]
$ rsync -av -e ssh --rsync-path="mkdir -p /x/y/z && rsync" /a/b/c/ root@172.17.0.2:/x/y/z/
# local       remote
# /a/b/c/1    /x/y/z/1
# /a/b/c/2    /x/y/z/2
# /a/b/c/3    /x/y/z/3
```

- Reference: <https://askubuntu.com/questions/561212/rsync-throwing-mkdir-cannot-create-directory-data-dir-1-dir-2-dir-3-no-suc>

## Delete

```sh
# local       remote
# /a/b/c/1    /x/y/z/1
# /a/b/c/2    /x/y/z/3
# /a/b/c/3
$ rsync -av -e ssh /a/b/c/ root@172.17.0.2:/x/y/z/
# local       remote
# /a/b/c/1    /x/y/z/1
# /a/b/c/2    /x/y/z/3
# /a/b/c/3
rsync -av -e ssh --delete /a/b/c/ root@172.17.0.2:/x/y/z/
# local       remote
# /a/b/c/1    /x/y/z/1
# /a/b/c/3    /x/y/z/3
```
