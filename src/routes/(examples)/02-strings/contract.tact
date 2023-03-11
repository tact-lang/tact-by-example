import "@stdlib/deploy";

contract Strings with Deployable {
 
    // contract persistent state variables
    s1: String = "hello world";
    s2: String = "yes unicode 😀 😅 你好 no escaping"; /// TODO: https://github.com/tact-lang/tact/issues/25 \n \t";
    s3: String;
    s4: String;
    s5: String;
    s6: String;

    init() {
        let i1: Int = -12345;
        let i2: Int = 6780000000; // coins = ton("6.78")

        self.s3 = i1.toString();
        self.s4 = i1.toFloatString(3);
        self.s5 = i2.toCoinsString();

        // gas efficient helper to concatenate strings in run-time
        let sb: StringBuilder = beginString();
        sb.append(self.s1);
        sb.append(", your balance is: ");
        sb.append(self.s5);
        self.s6 = sb.toString();
    }

    receive("show all") {
        dump(self.s1);
        dump(self.s2);
        dump(self.s3);
        dump(self.s4);
        dump(self.s5);
        dump(self.s6);
    }

    receive("show ops") {
        let s: String = "how are you?"; // temporary variable
        dump(s);

        /// TODO: https://github.com/tact-lang/tact/issues/24
        /// dump(self.s1 == "hello world");
        /// dump(self.s1 != s);
    }

    get fun result(): String {
        return self.s1;
    }
}