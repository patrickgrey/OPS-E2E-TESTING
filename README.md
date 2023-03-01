# Introduction

This project is designed to test web content developed by the OPS team. It does not aim at full coverage, rather it picks low hanging fruit to remove repetative UI workflow click through's from the developers workload.

# Getting Started

1. Install: `npm i`
2. Run a test: `npx playwright test`
3. Show report: `npx playwright show-report`

For a full reference, see https://playwright.dev/docs/intro

a .env is used to store and keep usernames and passwords secret. You will need to create a .env file and provide a user login details in the following format (replacing 'myUserName' and 'myPassword'):

```sh
LZLOGIN=myUserName
LZPASSWORD=myPassword
```

.env files are not pushed to the repo.
