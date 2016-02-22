Before we begin, find the closest classmate who is in the HTML/CSS class and group in three. (You should have at least one HTML/CSS person per group.)

## Get your account, text editor, and shell straight

- Register a [GitHub account](https://github.com).
- Download [Sublime Text](http://www.sublimetext.com/).
- Download [iTerm2](http://iterm2.com/).

## Life, streamlined

1. Launch `terminal`. (Use spotlight on your mac: `command` + `space`)
2. copy and paste two commands:

- `curl --remote-name https://raw.githubusercontent.com/jueyang/laptop/master/macminimal`
- `bash macminimal 2>&1 | tee ~/laptop.log && source ~/.rvm/scripts/rvm`

**Notes** 

1. Enter your password when asked. It's the password you use for your laptop login. The password wouldn't show in terminal, which is okay. Press `return` when you've entered your password.
2. If prompted to download `xcode`, say yes and agree to the license.

## On to `git`

Now your computer should be setup with:

- `homebrew`
- `git` (with an extention called `hub`)

To continue:

Follow instrcutions from [configure git](https://github.com/jueyang/know-your-tools/blob/master/0-setup.md#configure-git).