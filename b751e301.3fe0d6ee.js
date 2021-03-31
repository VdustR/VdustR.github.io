(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{116:function(e,t,a){"use strict";var n=a(122),c=a(0),i=a.n(c),s=a(123);function l(){var e=Object(n.a)(["\n              background-color: #da5961;\n            "]);return l=function(){return e},e}function r(){var e=Object(n.a)(["\n              background-color: #e7c000;\n            "]);return r=function(){return e},e}function b(){var e=Object(n.a)(["\n              background-color: #42b983;\n            "]);return b=function(){return e},e}function o(){var e=Object(n.a)(["\n            vertical-align: top;\n          "]);return o=function(){return e},e}function p(){var e=Object(n.a)(["\n          display: inline-block;\n          font-size: 14px;\n          height: 18px;\n          line-height: 18px;\n          border-radius: 3px;\n          padding: 0 6px;\n          color: #fff;\n          & + & {\n            margin-left: 5px;\n          }\n        "]);return p=function(){return e},e}t.a=Object(c.memo)((function(e){var t=e.text,a=e.type,n=void 0===a?"tip":a,h=e.vertical,u=void 0===h?"top":h,d=Object(c.useMemo)((function(){return Object(s.b)(Object(s.a)(p()),"top"===u&&Object(s.a)(o()),"tip"===n?Object(s.a)(b()):"warning"===n?Object(s.a)(r()):Object(s.a)(l()))}),[]);return i.a.createElement("div",{className:d},t)}))},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),c=a(7),i=(a(0),a(109)),s=a(116),l={titile:"Fish Shell"},r={unversionedId:"sh/fish",id:"sh/fish",isDocsHomePage:!1,title:"fish",description:"Official site:",source:"@site/docs/sh/fish.md",slug:"/sh/fish",permalink:"/docs/sh/fish",editUrl:"https://github.com/vdustr/vdustr.github.io/edit/main/docs/sh/fish.md",version:"current",sidebar:"docs",previous:{title:"Font",permalink:"/docs/design/font"},next:{title:"String",permalink:"/docs/sh/string"}},b=[{value:"Install",id:"install",children:[{value:'Set As Default Shell<Badge text="optional" />',id:"set-as-default-shell",children:[]}]},{value:"Fisher",id:"fisher",children:[{value:"Spacefish",id:"spacefish",children:[]},{value:"Other commands",id:"other-commands",children:[]},{value:"Fixing Perl Warning: Setting locale failed on Mac OS",id:"fixing-perl-warning-setting-locale-failed-on-mac-os",children:[]}]},{value:"Integrate with nvm",id:"integrate-with-nvm",children:[]},{value:"Integrate with Docker",id:"integrate-with-docker",children:[]},{value:"Integrate with Visual Studio Code",id:"integrate-with-visual-studio-code",children:[]},{value:"Integrate with Hyper.js",id:"integrate-with-hyperjs",children:[]},{value:"Windows alternative",id:"windows-alternative",children:[]}],o={toc:b};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Official site: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://fishshell.com/"}),"https://fishshell.com/")),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("p",null,"Mac:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"brew install fish\n")),Object(i.b)("h3",{id:"set-as-default-shell"},"Set As Default Shell",Object(i.b)(s.a,{text:"optional",mdxType:"Badge"})),Object(i.b)("p",null,"Make sure where fish is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ which fish\n/usr/local/bin/fish\n")),Object(i.b)("p",null,"Check if fish is a system shell now:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"cat /etc/shells\n")),Object(i.b)("p",null,"If there is no fish shell, add it into ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/shells"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),"  /bin/bash\n  /bin/csh\n  /bin/ksh\n  /bin/sh\n  /bin/tcsh\n  /bin/zsh\n+ /usr/local/bin/fish\n")),Object(i.b)("p",null,"You can set it as default shell:"),Object(i.b)("p",null,"Set it as default shell:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"chsh -s /usr/local/bin/fish\n")),Object(i.b)("h2",{id:"fisher"},"Fisher"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jorgebucaran/fisher"}),"Fisher")," is a package manager for the fish shell."),Object(i.b)("p",null,"Install:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl https://git.io/fisher --create-dirs -sLo ~/.config/fish/functions/fisher.fish\n")),Object(i.b)("p",null,"If you can't use ",Object(i.b)("inlineCode",{parentName:"p"},"fisher")," command, try re-login the shell."),Object(i.b)("h3",{id:"spacefish"},"Spacefish"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/matchai/spacefish"}),"Spacefish")," is a minimalistic, powerful and extremely customizable Fish Shell prompt. It combines everything you may need for convenient work, without unnecessary complications, like a real spacefish."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"fisher add matchai/spacefish\n")),Object(i.b)("h3",{id:"other-commands"},"Other commands"),Object(i.b)("p",null,"List packages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'fisher ls\n\nfisher ls <regexp>\nfisher ls "^gitlab|fish-.*"\n')),Object(i.b)("p",null,"Update packages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"fisher\n")),Object(i.b)("p",null,"Update fisher:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"fisher self-update\n")),Object(i.b)("p",null,"Remove package:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"fisher rm <packageName>\nfisher rm rafaelrinaldi/pure\n")),Object(i.b)("p",null,"Remove all packages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"fisher ls | fisher rm\n")),Object(i.b)("p",null,"Uninstall fisher:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"fisher self-uninstall\n")),Object(i.b)("h3",{id:"fixing-perl-warning-setting-locale-failed-on-mac-os"},"Fixing Perl Warning: Setting locale failed on Mac OS"),Object(i.b)("p",null,"You might see this while you execute ",Object(i.b)("inlineCode",{parentName:"p"},"fisher"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'perl: warning: Setting locale failed.\nperl: warning: Please check that your locale settings:\n        LC_ALL = (unset),\n        LANG = "en_TW.UTF-8"\n    are supported and installed on your system.\n')),Object(i.b)("p",null,"Edit fish config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"vi ~/.config/fish/config.fish\n")),Object(i.b)("p",null,"Add locale environment variables:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),"+ export LC_CTYPE=en_US.UTF-8\n+ export LC_ALL=en_US.UTF-8\n")),Object(i.b)("p",null,"Reference: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://blogs.agilefaqs.com/2014/01/12/fixing-perl-warning-setting-locale-failed-on-mac-osx/"}),"Fixing Perl Warning: Setting locale failed on Mac OS X Mavericks")),Object(i.b)("h2",{id:"integrate-with-nvm"},"Integrate with nvm"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/creationix/nvm"}),"Node Version Manager")," - Simple ",Object(i.b)("strong",{parentName:"p"},"bash")," script to manage multiple active node.js versions"),Object(i.b)("p",null,"To install or update nvm, you can use the install script using cURL:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash\n")),Object(i.b)("p",null,"or Wget:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash\n")),Object(i.b)("p",null,"Then install ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/FabioAntunes/fish-nvm"}),"fish-nvm"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"fisher add FabioAntunes/fish-nvm edc/bass\n")),Object(i.b)("p",null,"If node is not loaded at start, create a init script:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"vi ~/.config/fish/conf.d/nvm.fish\n")),Object(i.b)("p",null,"and enter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"nvm use node\n")),Object(i.b)("p",null,"If you always want to use the latest version, use the followed scripts instead:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"nvm install node\n# latest npm and yarn\nnpm i -g npm yarn\n")),Object(i.b)("p",null,"then try another session."),Object(i.b)("h2",{id:"integrate-with-docker"},"Integrate with Docker"),Object(i.b)("p",null,"Migrate with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/barnybug-archive/docker-fish-completion"}),"docker(",Object(i.b)("em",{parentName:"a"},"archived"),")"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"fisher add barnybug/docker-fish-completion\n")),Object(i.b)("p",null,"Migrate with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/brgmnn/fish-docker-compose"}),"docker-compose"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"fisher add  brgmnn/fish-docker-compose\n")),Object(i.b)("h2",{id:"integrate-with-visual-studio-code"},"Integrate with ",Object(i.b)("a",Object(n.a)({parentName:"h2"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code")),Object(i.b)("p",null,"Edit ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations"}),"settings.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "terminal.integrated.shell.osx": "/usr/local/bin/fish"\n}\n')),Object(i.b)("h2",{id:"integrate-with-hyperjs"},"Integrate with ",Object(i.b)("a",Object(n.a)({parentName:"h2"},{href:"https://hyper.is/"}),"Hyper.js")),Object(i.b)("p",null,"Edit ",Object(i.b)("inlineCode",{parentName:"p"},"~/.hyper.js"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  shell: '/usr/local/bin/fish',\n};\n")),Object(i.b)("h2",{id:"windows-alternative"},"Windows alternative"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cmder.net/"}),"Cmder")," is a software package created out of pure frustration over the absence of nice console emulators on Windows. It is based on amazing software, and spiced up with the Monokai color scheme and a custom prompt layout, looking sexy from the start."),Object(i.b)("p",null,"\ud83d\udd17",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cmderdev/cmder/wiki/Seamless-VS-Code-Integration"}),"Seamless VS Code Integration"),Object(i.b)("br",{parentName:"p"}),"\n","\ud83d\udd17",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cmderdev/cmder/wiki/Seamless-Hyper-integration"}),"Seamless Hyper integration")))}p.isMDXComponent=!0}}]);