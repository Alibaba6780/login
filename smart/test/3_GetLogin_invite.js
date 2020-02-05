const GetLogin = artifacts.require("./GetLogin.sol");
const willFail = require("./exceptions.js").willFail;
let getLogin;
const inviteAddress = '0x29162b583a872f369FfFda3f5e4705564c19901D';
const invitePrivateKey = 'da15d48dde9893cbbac2818ee57d985b6f68712151fa65cdb69a735456e27332';

contract("GetLogin", async accounts => {
    describe('Invite', async () => {
        before(async () => {
            //getLogin = await GetLogin.deployed();
            /*const usernameHash = web3.utils.keccak256('igor');
            await getLogin.createUser(usernameHash, {from: accounts[1]});*/
        });

        beforeEach(async () => {
            getLogin = await GetLogin.deployed();
        });

        it("Create invite from registered user", async () => {
            // todo fix cumulative balance for inviteAddress
            await getLogin.createInvite(inviteAddress, {from: accounts[0], value: web3.utils.toWei('0.1', "ether")});
            let balance = await web3.eth.getBalance(inviteAddress);
            balance = web3.utils.fromWei(balance, 'ether');
            assert.isAtLeast(Number(balance), Number('0.1'), 'Empty balance');
        });

        it("Create invite from non registered user", async () => {
            await willFail(getLogin.createInvite(inviteAddress, {
                from: accounts[9],
                value: web3.utils.toWei('0.1', "ether")
            }), 'This address already used for invite');
        });

        it("Create invite with used address and registered user", async () => {
            await willFail(getLogin.createInvite(inviteAddress, {
                from: accounts[0],
                value: web3.utils.toWei('0.1', "ether")
            }), 'This address already used for invite');
        });
    });
});