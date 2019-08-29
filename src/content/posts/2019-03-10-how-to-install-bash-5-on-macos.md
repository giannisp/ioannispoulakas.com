---
template: 'post'
path: '/2019/03/10/how-to-install-bash-5-on-macos/'
title: 'How to install Bash 5.0 on macOS'
date: '2019-03-10'
---

### Introduction

Bash 5.0 has been released during the first week of January 2019.  
It builds upon Bash 4.4.x, fixes bugs, and introduces new features and improvements.  
You can find extended info at the official [release notes](http://lists.gnu.org/archive/html/bug-bash/2019-01/msg00063.html).  
Although macOS is bundling Bash, it is using the older 3.x version most probably due to the Bash licensing changes. Since the Bash 4.x release, license has been changed from GPLv2 to GPLv3.

### How to install Bash 5.0 (or latest bash) on macOS

As usual, `brew` comes to the rescue, so installation is quite simple:  
`brew install bash`

There are two more steps to activate Bash 5.0.

Add newly installed bash on /etc/shells:  
`sudo vi /etc/shells`  
and add a new entry/line with the path:  
`/usr/local/bin/bash`

Make Bash 5.0 default on macOS:  
`chsh -s /usr/local/bin/bash`

Check `bash --version` to verify that the new version is successfully activated.

### Bonus: install bash-completion

Various CLI apps support improved autocomplete via bash-completion scripts.

Install bash-completion on macOS:  
`brew install bash-completion@2`

Initialize bash-completion@2 on `~/.bash_profile` with backwards compatibility:

```
export BASH_COMPLETION_COMPAT_DIR="/usr/local/etc/bash_completion.d"
[[ -r "/usr/local/etc/profile.d/bash_completion.sh" ]] && . "/usr/local/etc/profile.d/bash_completion.sh"
```
