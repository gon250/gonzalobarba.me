---
title: Macbook (osx) setup
slug: personal-macbook-setup
date: '2020-12-02'
---

# setup-macbook

Personal macbook setup.

## Brew

- xcode-select --install
- Install Brew
  - [https://brew.sh/](https://brew.sh/)
  - iterm2
  - git
  - rectangle
  - alfred
  - google-chrome
  - firefox
  - docker
  - vlc
  - postman
  - notion

## Shell

re-install zsh by brew

- `$ brew install zsh`

Update default shell to be Homebrew’s Zsh

- `$ sudo vim /etc/shells`
- Add `/usr/local/bin/zsh`
- Run `$ chsh -s /usr/local/bin/zsh`
  - Extra:
  - [https://ohmyz.sh/](https://ohmyz.sh/)
  - [https://github.com/romkatv/powerlevel10k](https://github.com/romkatv/powerlevel10k)

Extra config for `.zshrc`

- plugins=(git brew docker docker-compose dotenv npm osx)
- https://github.com/zsh-users/zsh-syntax-highlighting

  - source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

- https://github.com/zsh-users/zsh-autosuggestions
  - source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh

## Node

Install node by `nvm`

- https://github.com/nvm-sh/nvm
  - `$ nvm install node`
  - `$ nvm use node`

# SSH

Configure ssh

`$ mkdir ~/.ssh && touch ~/.ssh/config`

# Extra Apps

- [https://bjango.com/mac/istatmenus/](https://bjango.com/mac/istatmenus/)
- [https://matthewpalmer.net/vanilla/](https://matthewpalmer.net/vanilla/)

_Future updates_
[setup-macbook git repository](https://github.com/gon250/setup-macbook)
