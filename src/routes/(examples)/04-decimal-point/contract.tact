import "@stdlib/deploy";

message Deposit {
    amount: Int as coins; // nano-tons
}

message Withdraw {
    amount: Int as coins; // nano-tons
}

const SecondsPerYear: Int = 365 * 24 * 60 * 60;

contract Interest with Deployable {
 
    interestPercent: Int as int32;
    depositTime: Int as uint32 = 0;  // seconds since the epoch
    depositAmount: Int as coins = 0; // nano-tons
    totalEarned: Int as coins = 0;   // nano-tons

    init() {
        self.interestPercent = 3250; // 3.25% yearly interest rate in percent-mille
    }

    receive(msg: Deposit) {
        require(self.depositAmount == 0, "No multiple deposits");
        self.depositTime = now();
        self.depositAmount = msg.amount;
    }

    receive(msg: Withdraw) {
        require(msg.amount >= self.depositAmount, "Cannot withdraw more than deposit");
        self.depositAmount = self.depositAmount - msg.amount;
        let durationSeconds: Int = now() - self.depositTime;
        let earned: Int = msg.amount * durationSeconds * self.interestPercent / SecondsPerYear / 100000;
        dump(earned);
        self.totalEarned = self.totalEarned + earned;
    }

    get fun total(): Int {
        return self.totalEarned; // in nano-tons
    }
}