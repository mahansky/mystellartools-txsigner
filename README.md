
# MyStellar.Tools Transaction Signer

## How to use

- Generate transaction envelope XDR
- Open up the app and insert the generated XDR
- Check your transaction in the Explainer
- Select the network you want to sign it for (MAIN is global public network)
- Add your signature (secret key or using Ledger)
- Copy the result and submit it to the network

---

> How can I generate transaction evelope XDR?

[MyStellar.Tools](https://mystellar.tools) - enter using your public key, try to execute any action that requires signing (like sending XLM) and it will show you the XDR

[Stellar Laboratory](https://www.stellar.org/laboratory/#txbuilder?network=public) (Advanced) - use Transaction Builder to create your transaction and the XDR will be at the bottom of the page

> How do I submit the signed transaction to the network?

[MyStellar.Tools](https://mystellar.tools) - enter using your public key, choose "Submit transaction" in the left menu, paste your transaction into the form and hit Submit

[Stellar Laboratory](https://www.stellar.org/laboratory/#explorer?resource=transactions&endpoint=create&network=public) - paste your transaction into the form and hit Submit

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:9080
yarn run dev

# build electron application for production
yarn run build

# run end-to-end tests
yarn test

```

## Known issues

- Signing with Ledger makes the app unresponsive for a while on Windows
- Signing with Ledger works only with single operation transactions

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[1c165f7](https://github.com/SimulatedGREG/electron-vue/tree/1c165f7c5e56edaf48be0fbb70838a1af26bb015) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
