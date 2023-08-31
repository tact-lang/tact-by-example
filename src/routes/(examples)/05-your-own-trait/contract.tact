import "@stdlib/deploy";
import "@stdlib/ownable";

/////////////////////////////////////////////////////////////////////////////
// this trait adds basic analytics to any contract to track how popular it is

trait Trackable with Ownable {          // your new trait may rely on other traits

    // Storage

    owner: Address;
    numMessagesReceived: Int;           // your new trait may add state variables but should not specify their size

    // Receivers

    receive("reset stats") {            // your new trait may handle specific messages
        self.requireOwner();
        self.numMessagesReceived = 0;
        self.reply("reset done".asComment());
    }

    // Getters

    get fun stats(): Int {              // your new trait may add getters
        return self.numMessagesReceived;
    }

    // Methods

    fun receivedNewMessage() {          // your new trait may define new contract methods
        if (self.filterMessage()) {
            self.numMessagesReceived = self.numMessagesReceived + 1;
        }
    }

    virtual fun filterMessage(): Bool { // virtual functions can be overridden by users of this trait
        // the default filtering behavior is to ignore messages sent by the owner
        if (sender() == self.owner) {
            return false;
        }
        return true;
    }
}

/////////////////////////////////////////////////////////////////////////////
// this Counter contract is going to use our new trait to add analytics to it

contract Counter with Deployable, Trackable {

    owner: Address;                     // The Trackable trait requires this exact state variable
    numMessagesReceived: Int as uint64; // The Trackable trait requires this exact state variable
    val: Int as uint32;
 
    init() {
        self.owner = sender(); // we can initialize owner to any value we want, the deployer in this case
        self.numMessagesReceived = 0;
        self.val = 0;
    }
 
    receive("increment") {
        self.receivedNewMessage(); // here we are using our trait
        self.val = self.val + 1;
    }
 
    get fun value(): Int {
        return self.val;
    }

    // the trait allows us to override the default filtering behavior
    overrides fun filterMessage(): Bool {
        // our contract's custom filtering behavior is to remove all filters and count all messages
        return true;
    }

    // receive("reset stats") is added automatically to allow owner to reset the stats
    // get fun stats(): Int is added automatically to query the stats
    // get fun owner(): Address is added automatically to query who the owner is
}