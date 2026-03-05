# Contributing

## Commit strategy (functional commits)

Use one commit per clear functionality. Keep each commit focused and easy to review.

### Recommended format

Use Conventional Commits:

- `feat:` new feature
- `fix:` bug fix
- `refactor:` internal code restructuring
- `style:` visual/CSS-only changes
- `docs:` documentation changes
- `ci:` CI/CD workflow changes

Examples:

- `feat: add language selector and automatic browser locale detection`
- `style: improve product cards spacing and typography`
- `fix: prevent hero banner overflow on small screens`
- `ci: add automatic GitHub Pages deployment`

## How to keep history clean

- Avoid mixing unrelated changes in one commit.
- Commit backend/data, UI, and docs separately when possible.
- Prefer small commits that can be reverted independently.
- Write commit messages in imperative form (what the commit does).

## Pull request checklist

- One main objective per PR.
- PR title aligned with the main commit type.
- No generated folders committed (`dist`, `node_modules`).
