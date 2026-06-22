# Issue tracker: GitHub

Issues and PRDs for this repository live as GitHub issues. Use the `gh` CLI for all operations.

## Conventions

- Create issues with `gh issue create`.
- Read issues and comments with `gh issue view <number> --comments`.
- List issues with `gh issue list`, requesting JSON fields when structured filtering is useful.
- Comment with `gh issue comment <number>`.
- Apply or remove labels with `gh issue edit <number>`.
- Close issues with `gh issue close <number>`.

Infer the repository from the configured Git remote when commands run inside this clone.

## Skill terminology

- "Publish to the issue tracker" means create a GitHub issue.
- "Fetch the relevant ticket" means read the GitHub issue and its comments.
