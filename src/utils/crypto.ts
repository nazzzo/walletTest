const bip39 = require("bip39");
const hdkey = require("hdkey");
const crypto = require("crypto");


export const generateMnemonic = () => {
  const mnemonic = bip39.generateMnemonic(128); 
  return mnemonic;
}

export const createPrivateKey = (mnemonic: string) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const hdWallet = hdkey.fromMasterSeed(seed);
  const rootNode = hdWallet.derive("m/44'/60'/0'/0")
  const childNode = rootNode.derive("0");
  const privateKey = childNode.privateKey.toString("hex")

  return privateKey;
}