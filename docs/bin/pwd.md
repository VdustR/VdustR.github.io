---
title: pwd
description: Print Working Directory
---

> Print Working Directory

## Nginx Quick Test With Docker

Any unix shells:

```sh
docker run -it --rm -v $PWD:/usr/share/nginx/html:ro -p 5000:80 nginx
```

bash:

```sh
docker run -it --rm -v $(pwd):/usr/share/nginx/html:ro -p 5000:80 nginx
docker run -it --rm -v $(pwd)/build:/usr/share/nginx/html/subfolder:ro -p 5000:80 nginx
```

fish:

```sh
docker run -it --rm -v (pwd):/usr/share/nginx/html:ro -p 5000:80 nginx
docker run -it --rm -v (pwd)/build:/usr/share/nginx/html/subfolder:ro -p 5000:80 nginx
```

cmd:

```sh
docker run -it --rm -v %CD%:/usr/share/nginx/html:ro -p 5000:80 nginx
docker run -it --rm -v %CD%/build:/usr/share/nginx/html/sub-folder:ro -p 5000:80 nginx
```

powershell:

```sh
docker run -it --rm -v "$pwd\:/usr/share/nginx/html\:ro" -p 5000:80 nginx
docker run -it --rm -v "$pwd/build\:/usr/share/nginx/html/sub-folder\:ro" -p 5000:80 nginx
```
