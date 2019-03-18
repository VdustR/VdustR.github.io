workflow "GitHub Page" {
  on = "push"
  resolves = ["Deploy to GitHub Pages"]
}

action "Dev Branch Only" {
  uses = "actions/bin/filter@master"
  args = "branch dev"
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Build" {
  uses = "nuxt/actions-yarn@master"
  args = "build"
  needs = ["Install"]
}

action "Deploy to GitHub Pages" {
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "dist/"
  }
  needs = ["Dev Branch Only", "Build"]
  secrets = ["GH_PAT"]
}
