# Masterforms

A 3D formation editor for dance teams. Build formations on a stage, step through them slide by slide and play them back.

## Quickstart

You need [Git](https://git-scm.com), [Docker](https://docs.docker.com/get-docker/) and [mise](https://mise.jdx.dev).

```sh
git clone https://github.com/svrrs/masterforms.git && cd masterforms
mise trust && mise install   # Bun, gitleaks and Lefthook at pinned versions
mise setup                   # dependencies, git hooks, .env
mise dev                     # Postgres + API + web on http://localhost:5173
```

See [CONTRIBUTING.md](CONTRIBUTING.md) to get involved.

## License

[MIT](LICENSE)
