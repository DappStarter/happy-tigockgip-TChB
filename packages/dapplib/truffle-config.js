require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture struggle cruise oval unaware hidden deputy foster gentle'; 
let testAccounts = [
"0x1cf282b7bbac74753d0e722491f2594959058177bc7c41fcaeff596543e47f4a",
"0xa6262a34d597b61c9094c80d2dba47bfc1446158a3350296050013a31450b045",
"0x3a1605ac3307cb2f1f86af77875ebdfe4c4dcacc8a782c2087d499cbb1ba85fa",
"0x090c599ae25c7144e1e40c2ba05ea5ce35be7574f378e19f2297243d6916e87b",
"0xeeb9a932f6021d30740c0c9194b74cfeae3639580f455953ff5b78436cd1e74d",
"0x1182fc8b6cda7c5f0df79220ff2d0f985f8217e17a4cc4add1836ab8aeee2a3b",
"0x6fe811fbb31e46c8de322d9b6f7368b75b0ef1bc977ae74c3d84b15b9fa1ec76",
"0xfc5da07a6d03173fdeb4e77027982643fe572a1f17e7bf4ed55f35f659e9c583",
"0x82077b2b9a77aa5c21dc48bdadd35120ee1186cf46457cf60c40b856e57ef207",
"0x3b7b7875727fb59310bbe866e6125ac79113f40c6cbefb0e0fd8ef2a05ceb00a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


