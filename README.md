[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

# Steel-Docs

This is a simple repository for showcasing what we imagine a future documentation site for [SteelMC](https://github.com/Steel-Foundation/SteelMC) to look like, utilizing [Astro Starlight](https://starlight.astro.build/).

---

## 📖 Table of Contents

- [How to contribute](#contribute)
  - [Identify](#identify)
  - [Fork](#fork)
  - [Commit](#commit)
  - [Internationalization](#internationalization)
- [How to use](#how-to-use)
  - [Commands](#commands)
- [Project structure](#project-structure)

---

## Contribute

> [!NOTE]
> All the following steps require you to have a version of [git](https://git-scm.com/) and [npm](https://www.npmjs.com/) running on your system.

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.
Images can be added to `src/assets/` and embedded in Markdown with a relative link.
Static assets, like favicons, can be placed in the `public/` directory.

## Identify

... a feature you'd like to add or an issue to work on. You should always create an issue or a draft-pr describing what you want, before considering adding a major feature.

## Fork

... the `main` branch of this repository, so you can prepare your changes on there locally. Clone it to your system by running the command

```gitattributes
git clone https://github.com/{your-name}/steel-docs
```

in your directory of choice. And don't forget to set this repository as it's upstream by running the following command

```gitattributes
git remote add upstream https://github.com/tn-lorenz/steel-docs.git
```

in said directory. To test if it has succeeded, type

```gitattributes
git remote -v
```

which should yield the following.

```gitattributes
origin   https://github.com/{your-name}/steel-docs.git (fetch)
origin   https://github.com/{your-name}/steel-docs.git (push)
upstream https://github.com/tn-lorenz/steel-docs.git (fetch)
upstream https://github.com/tn-lorenz/steel-docs.git (push)
```

Now set-up a new feature branch by running

```gitattributes
git checkout -b feat-{feature-name}
```

from the `main` branch.

## Commit

... your changes to your fork and use the following commands in its directory:

```gitattributes
git add .
git commit -m "{your-message}"
git push origin {your-branch}
```

Then you may open a pull-request by comparing on the github website.

> [!NOTE]
> This project strictly enforces the use of the [conventional commits standard](https://www.conventionalcommits.org/en/v1.0.0/) in the commit messages.
> Also please remember to stricktly use **relative paths**!

## Internationalization

Starlight uses a particular folder structure to automatically fetch and correctly link translated markdown files.
For this reason, if you want to add a new language, you should create a new folder
with the correct international prefix into to `docs` folder, where both the german and spanish translations already reside. The english originals are also stored in the `docs` folder, but don't require another wrapper folder,
such that it can be used as fallback. Otherwise, the only thing you should look out for are:

Articles are written in `.md` (markdown) files and contain a front-matter like this:

```
---
title: Feature Flags
description: Complete reference of all compile-time feature flags in SteelMC
sidebar:
  order: 1
---
```

Here, useful information about the article is stored.

Furthermore side-bar slugs are translated by adding an entry to the `translations` array inside the `sidebar` object, which can be found at `astro.config.mjs`, like this:

```mjs
label: 'Getting started',
translations: {
    es: 'Primeros pasos',
    de: 'Erste Schritte'
},
```

## How to use

Inside the project folder run `npm run dev` for hosting it locally. Keep in mind that this will sometimes mask errors, which will only be present when hosted somewhere like gh pages (fuck js).
The rest should be handled by the `main` workflow.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Project Structure

```
steel-docs
├─ astro.config.mjs
├─ bun.lock
├─ package-lock.json
├─ package.json
|
├─ public
│  └─ favicon.svg
|
├─ README.md
|
├─ src
│  ├─ assets/
│  ├─ content
│  │  └─ docs
│  │     ├─ de
│  │     │  ├─ guides
│  │     │  │  ├─ configuration
│  │     │  │  │  ├─ overview.md
│  │     │  │  │  ├─ server-configuration.md
│  │     │  │  │  └─ server-links.md
|  |     |  |  |
│  │     │  │  ├─ development
│  │     │  │  │  ├─ blocks
│  │     │  │  │  │  ├─ blocks.md
│  │     │  │  │  │  └─ starting-blocks.md
│  │     │  │  │  ├─ decompile-minecraft.md
│  │     │  │  │  └─ network
│  │     │  │  │     ├─ minecraft-wireguard.md
│  │     │  │  │     └─ network.md
|  |     |  |  |
│  │     │  │  └─ getting-started
│  │     │  │     ├─ for-devs.md
│  │     │  │     ├─ for-users.md
│  │     │  │     └─ set-up.mdx
|  |     |  |
│  │     │  ├─ index.mdx
│  │     │  └─ reference
│  │     │     └─ feature-flags.md
|  |     |
│  │     ├─ es
│  │     │  ├─ guides
│  │     │  │  ├─ configuration
│  │     │  │  │  ├─ overview.md
│  │     │  │  │  ├─ server-configuration.md
│  │     │  │  │  └─ server-links.md
|  |     |  |  |
│  │     │  │  ├─ development
│  │     │  │  │  ├─ blocks
│  │     │  │  │  │  ├─ blocks.md
│  │     │  │  │  │  └─ starting-blocks.md
│  │     │  │  │  ├─ decompile-minecraft.md
│  │     │  │  │  └─ network
│  │     │  │  │     ├─ minecraft-wireguard.md
│  │     │  │  │     └─ network.md
|  |     |  |  |
│  │     │  │  └─ getting-started
│  │     │  │     ├─ for-devs.md
│  │     │  │     ├─ for-users.md
│  │     │  │     └─ set-up.mdx
|  |     |  |
│  │     │  ├─ index.mdx
│  │     │  └─ reference
│  │     │     └─ feature-flags.md
|  |     |
│  │     ├─ guides
│  │     │  ├─ configuration
│  │     │  │  ├─ overview.md
│  │     │  │  ├─ server-configuration.md
│  │     │  │  └─ server-links.md
|  |     |  |
│  │     │  ├─ development
│  │     │  │  ├─ blocks
│  │     │  │  │  ├─ blocks.md
│  │     │  │  │  └─ starting-blocks.md
│  │     │  │  ├─ decompile-minecraft.md
│  │     │  │  └─ network
│  │     │  │     ├─ minecraft-wireguard.md
│  │     │  │     └─ network.md
|  |     |  |
│  │     │  └─ getting-started
│  │     │     ├─ for-devs.md
│  │     │     ├─ for-users.md
│  │     │     └─ set-up.mdx
|  |     |
│  │     ├─ index.mdx
│  │     └─ reference
│  │        └─ feature-flags.md
|  |
│  ├─ content.config.ts
│  ├─ layouts
│  │  └─ Layout.astro
│  └─ styles
│     └─ global.css
└─ tsconfig.json
```
