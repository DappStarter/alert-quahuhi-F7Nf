require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe strike rival mad attitude half end army giant'; 
let testAccounts = [
"0x9e93ef77341f655ace6b14c1d9b4fc3d113dea18fc442bcdd18767729bcc0818",
"0x1f7132493b13f6eaaeb31646b9c6df12ff5f1b5dc482703552df9a78db2be002",
"0xbb602200326ae4a363a774218ab88df503f1d717508ece67e603cb50d0015a26",
"0x4bde8c9b97b23fce66fa7d28252b3c554622b987caf830025c8e7b3d5eebe947",
"0x4fefd342176590df8000d876937533756121fbf78b5088021e77c84f53e0edd3",
"0xc8aa8fc1004d042c01cba6de2dbfc581716757468f46b410c9077ed42e7a79a4",
"0xbbb82a5e8ac72aa5cf61de747047b5b93851d38ca78f9e593fdfc523f5336954",
"0x4061f53cd5617c3e7104593769911993ba1ce2147e61e7add6fb6dddbffe3d78",
"0x68885f5d03c0043ed8908fedce66f4b4652fda0ef1e01a82c0465be540bb8073",
"0x04b39813eae9ae69a08532cca0313884812b1e089dc426712f5de9948b5952f7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

