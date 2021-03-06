![license](https://img.shields.io/github/license/webb-tools/webb-dapp)

# Webb Dapp

Webb web app with mixer features.

# Overview

- [apps](https://github.com/webb-tools/webb-dapp/tree/master/packages/apps): the endpoint of the dapp
- [page-governance](https://github.com/webb-tools/webb-dapp/tree/master/packages/page-governance): the page for
  governance
- [page-mixer](https://github.com/webb-tools/webb-dapp/tree/master/packages/page-mixer): the page for mixer
  deposit/withdrawals
- [page-wallet](https://github.com/webb-tools/webb-dapp/tree/master/packages/page-wallet): the page for an basic wallet

# Development

1. Clone this repo

   ```base
   git clone git@github.com:webb-tools/webb-dapp.git && cd webb-dapp
   ```

2. Install dependencies by `yarn`

   ```base
   yarn install
   ```

3. Launch the UI
   ```base
   yarn run start:dapp
   ```

## Running local webb-tools

```json
{
  "resolutions": {
    "@webb-tools/type-definitions": "file:../webb.js/packages/type-definitions/build",
    "@webb-tools/api": "file:../webb.js/packages/api/build",
    "@webb-tools/types": "file:../webb.js/packages/types/build",
    "@webb-tools/app-util": "file:../webb.js/packages/app-util/build",
    "@webb-tools/sdk-core": "file:../webb.js/packages/sdk-core/build",
    "@webb-tools/sdk-mixer": "file:../webb.js/packages/sdk-mixer/build",
    "@webb-tools/mixer-client": "^0.0.12"
  }
}
```

```bash
# run this to update the packages
yarn install --check-files
```
