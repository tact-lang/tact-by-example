import "@stdlib/deploy";

contract MessageSender with Deployable {

    deployer: Address;
    lastSender: Address;
 
    init() {
        self.deployer = sender(); // sender() of init is who deployed the contract
        self.lastSender = newAddress(0, 0); // zero address
    }

    receive("who") {
        if (sender() == self.deployer) {
            dump("deployer");
        } else {
            dump("not deployer!");
        }
    }
 
    receive("hello") {
        if (sender() != self.lastSender) {
            self.lastSender = sender();
            dump("hello new sender!");
        }
    }
}