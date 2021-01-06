(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{223:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"rsync"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rsync"}},[s._v("#")]),s._v(" rsync")]),s._v(" "),n("h2",{attrs:{id:"push-local-files-to-remote"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#push-local-files-to-remote"}},[s._v("#")]),s._v(" Push Local Files to Remote")]),s._v(" "),n("p",[s._v("Push files under a directory to a directory:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av -e "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" /a/b/c/ root@172.17.0.2:/x/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2    /x/2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3    /x/3")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("Push a folder to a directory:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av -e "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" /a/b/c root@172.17.0.2:/x/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/c/1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2    /x/c/2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3    /x/c/3")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("Push a file to a directory:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av -e "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" /a/b/c/1 root@172.17.0.2:/x/2/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/2/1")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("Push a file to a path:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av -e "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" /a/b/c/1 root@172.17.0.2:/x/2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/2")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"mkdir-p"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mkdir-p"}},[s._v("#")]),s._v(" mkdir -p")]),s._v(" "),n("p",[n("code",[s._v("rsync")]),s._v(" doesn't create directory tree. Use "),n("code",[s._v("--rsync-path")])]),s._v(" "),n("blockquote",[n("p",[s._v("--rsync-path=PROGRAM Use this to specify what program is to be run on the remote machine to start-up rsync.")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av -e "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" /a/b/c/ root@172.17.0.2:/x/y/z/\nsending incremental "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" list\nrsync: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/x/y/z"')]),s._v(" failed: No such "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" error: error "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" IO "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" at main.c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("675")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Receiver"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1")]),s._v(".2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av -e "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" --rsync-path"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mkdir -p /x/y/z && rsync"')]),s._v(" /a/b/c/ root@172.17.0.2:/x/y/z/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/y/z/1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2    /x/y/z/2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3    /x/y/z/3")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("Notice that "),n("code",[s._v("mkdir -p")]),s._v(" and "),n("code",[s._v("rsync")]),s._v(" should works on remote.")]),s._v(" "),n("ul",[n("li",[s._v("Reference: "),n("a",{attrs:{href:"https://askubuntu.com/questions/561212/rsync-throwing-mkdir-cannot-create-directory-data-dir-1-dir-2-dir-3-no-suc",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://askubuntu.com/questions/561212/rsync-throwing-mkdir-cannot-create-directory-data-dir-1-dir-2-dir-3-no-suc"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"delete"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[s._v("#")]),s._v(" Delete")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/y/z/1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2    /x/y/z/3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av -e "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" /a/b/c/ root@172.17.0.2:/x/y/z/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/y/z/1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2    /x/y/z/3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av -e "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" --delete /a/b/c/ root@172.17.0.2:/x/y/z/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/y/z/1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3    /x/y/z/3")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h2",{attrs:{id:"exclude"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#exclude"}},[s._v("#")]),s._v(" Exclude")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av -e "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" /a/b/c/ root@172.17.0.2:/x/ --exclude "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2    /x/3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("Multiple:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av -e "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" /a/b/c/ root@172.17.0.2:/x/ --exclude "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" --exclude "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("Wildcard:")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local          remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1       /x/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/4.md")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/5.md")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/6.md")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av -e "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" /a/b/c/ root@172.17.0.2:/x/ --exclude "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.md"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local       remote")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/1    /x/1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /a/b/c/3")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);