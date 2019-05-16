const lottery = artifacts.require('Lottery');

contract('Lottery', accounts => {
    let instance;

    beforeEach( async () => {
        instance = await lottery.deployed();
    });

    it('should have as manager the account which deployed', async () => {
        const manager = await instance.manager.call();

        assert.equal(manager, accounts[0]);
    });

    it('should create a player if the player send some ether', async () => {
        const payment = web3.utils.toWei("0.02", "ether");
        await instance.enter.sendTransaction({from: accounts[1], value: payment});
        const numberPlayers = await instance.numberPlayers.call();
        const player = await instance.players(numberPlayers - 1);

        assert.equal(player, accounts[1]);
    })
});
