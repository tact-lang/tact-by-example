import "@stdlib/deploy";

contract Loops with Deployable {

    init() {}

    receive("loop1") {
        let sum: Int = 0;
        let i: Int = 0;
        repeat (10) {               // repeat exactly 10 times
            i = i + 1;
            sum = sum + i;
        }
        dump(sum);
    }

    receive("loop2") {
        let sum: Int = 0;
        let i: Int = 0;
        while (i < 10) {            // loop while a condition is true
            i = i + 1;
            sum = sum + i;
        }
        dump(sum);
    }

    receive("loop3") {
        let sum: Int = 0;
        let i: Int = 0;
        do {                        // loop until a condition is true
            i = i + 1;
            sum = sum + i;
        } until (i >= 10);
        dump(sum);
    }

    receive("out of gas") {
        let i: Int = 0;
        while (i < pow(10, 6)) {    // 1 million iterations is too much
            i = i + 1;
        }
        dump(i);
    }
}