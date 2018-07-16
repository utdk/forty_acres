### Pre-commit hooks
You now have a `pre-commit` file in your `.github/` directory. It is pre-configured to check PHP code syntax (using [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer)).

For the `pre-commit` hooks, a little setup is involved.

1. Allow your custom pre-commit hook to be executable:
```
chmod +x .github/pre-commit
```
2. Tell your repository to look in `.github/` for hooks:
```
git config core.hooksPath .github/
```
3. Add application-specific configuration:
```
cp .github/example.config.sh .github/config.sh
```

For PHP projects, follow the instructions for installing [PHP Codesniffer](https://github.com/squizlabs/PHP_CodeSniffer#installation).

If you want to use one/some of the checks, or add your own, add or remove them in the [pre-commit](https://github.com/markfullmer/git_pre_commit_tools/blob/master/.github/pre-commit) file.

## Usage
Easy-peasy. Run `git commit` commands as you would normally. The pre-commit check will execute automatically, and you'll get output along the lines of:

```bash
git commit -m "Update pre-commit checks" -a

Running pre-commit checks...
To bypass this check, add '--no-verify' to your commit command

Sniffing staged files via PHP Code Sniffer...

```