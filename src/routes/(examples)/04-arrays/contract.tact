import "@stdlib/deploy";

// this contract records the last 5 timestamps of when "timer" message was received
contract Arrays with Deployable {

    const MaxSize: Int = 5;
    arr: map<Int, Int>; // this is our array implemented with a map
    arrLength: Int as uint8 = 0;
    arrStart: Int as uint8 = 0; // our array is cyclic

    init() {}

    // push an item to the end of the array
    fun arrPush(item: Int) {
        if (self.arrLength < self.MaxSize) {
            self.arr.set(self.arrLength, item);
            self.arrLength = self.arrLength + 1;
        } else {
            self.arr.set(self.arrStart, item);
            self.arrStart = (self.arrStart + 1) % self.MaxSize;
        }
    }

    // iterate over all items in the array and dump them
    fun arrPrint() {
        let i: Int = self.arrStart;
        repeat (self.arrLength) {
            dump(self.arr.get(i)!!); // !! tells the compiler this can't be null
            i = (i + 1) % self.MaxSize;
        }
    }

    // record the timestamp when each "timer" message is received
    receive("timer") {
        let timestamp: Int = now();
        self.arrPush(timestamp);
    }

    receive("dump") {
        self.arrPrint();
    }

    get fun length(): Int {
        return self.arrLength;
    }

    get fun mapping(): map<Int, Int> {
        return self.arr;
    }
}