import "@stdlib/deploy";
 
message Add {
    amount: Int as uint32;
}
 
contract Counter with Deployable {
 
    owner: Address;
    counter: Int as uint32;
 
    init(owner: Address) {
        self.owner = owner;
        self.counter = 0;
    }
 
    fun add(v: Int) {
        
        // Check sender
        let ctx: Context = context();
        require(ctx.sender == self.owner, "Invalid sender");
        
        // Update counter
        self.counter = (self.counter + v);
    }
 
    receive(msg: Add) {
        self.add(msg.amount);
    }
 
    receive("increment") {
        dump("hello from debug world");
        self.add(1);
        dump(self.counter);
    }
 
    get fun counter(): Int {
        return self.counter;
    }
}
