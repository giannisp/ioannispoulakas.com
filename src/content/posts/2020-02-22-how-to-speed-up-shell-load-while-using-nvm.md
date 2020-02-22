---
template: 'post'
path: '/2020/02/22/how-to-speed-up-shell-load-while-using-nvm/'
title: 'How to speed up shell load while using NVM'
date: '2020-02-22'
---

If you are developing any application that depends on NodeJS, using [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) is highly recommended.

### Issue

The only downside of NVM is that it significantly slows down shell prompt initialization while using the default settings.

Here is how it is configured by default for bash:

```
# Load NVM
export NVM_DIR=~/.nvm
[[ -s "$NVM_DIR/nvm.sh" ]] && source "$NVM_DIR/nvm.sh"
```

And here is how bad it performs:

```
$ time source ~/.bash_profile

real 0m0.478s
user 0m0.291s
sys  0m0.198s
```

### First solution, lazy load NVM

There are simple bash scripts that can lazy load NVM during the first invoke of the `nvm` command. Of course catching `nvm` is not enough, script should also be checking for `npm`, `node`, `npx`, and any other global package that is installed. Also that very first load will be equally slow to the timings shown above.

Here is how a minimal bash script would look like for capturing the `node` command and lazy loading NVM:

```
lazy_load_nvm() {
  unset -f node
  export NVM_DIR=~/.nvm
  [[ -s "$NVM_DIR/nvm.sh" ]] && source "$NVM_DIR/nvm.sh"
}

node() {
  lazy_load_nvm
  node $@
}
```

The `node` function above can be replicated for capturing the other executables of choice, just remember that they should be included on the unset command as well.

### Second solution, load NVM in a much faster way

NVM while loading up is checking which node version to auto-use based on `.nvmrc` or a similar configuration file. And this exact check is the one that takes most of the time to complete.  
Good news is that there is a flag for skipping this check.  
However without an autoloaded node version, there should still exist a fallback to a preferred version for fast access.

Putting those two together on the bash init is as simple as:

```
# Add default node to path
export PATH=~/.nvm/versions/node/v12.16.1/bin:$PATH

# Load NVM
export NVM_DIR=~/.nvm
[[ -s "$NVM_DIR/nvm.sh" ]] && source "$NVM_DIR/nvm.sh" --no-use
```

Let's measure the startup time:

```
$ time source ~/.bash_profile

real 0m0.051s
user 0m0.031s
sys	 0m0.018s
```

Boom, almost half a second faster!

If a project is using a different node version than the one declared on the bash init, then it's just a matter of remember running `nvm use` before issuing any other node related commands.  
Updating the default version via NVM, would also require updating manually the version on bash init.

### Conclusion

I personally prefer the second solution, as I am usually working with the latest LTS node version on active projects. Thus I rarely have to invoke `nvm use` manually. Time saved overall from spawning shell instances definitely worths it.
