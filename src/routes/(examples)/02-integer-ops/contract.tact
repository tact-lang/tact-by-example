import "@stdlib/deploy";

contract Integers with Deployable {
 
    // contract persistent state variables
    i1: Int as uint128 = 3001;
    i2: Int as int32 = 57;

    init() {}

    receive("show ops") {
        let i: Int = -12; // temporary variable, runtime Int type is always int257 (range -2^256 to 2^256 - 1)
        dump(i);

        i = self.i1 * 3 + (self.i2 - i);    // basic math expressions
        dump(i);

        i = self.i1 % 10;                   // modulo (remainder after division)
        dump(i);
        
        i = self.i1 / 1000;                 // integer division (truncation toward zero)
        dump(i);
        
        i = self.i1 >> 3;                   // shift right (multiply by 2^n)
        dump(i);
        
        i = self.i1 << 2;                   // shift left (divide by 2^n)
        dump(i);
        
        i = min(self.i2, 11);               // minimum between two numbers
        dump(i);
        
        i = max(self.i2, 66);               // maximum between two numbers
        dump(i);
        
        i = abs(-1 * self.i2);              // absolute value
        dump(i);

        dump(self.i1 == 3001);
        dump(self.i1 > 2000);
        dump(self.i1 >= 3002);
        dump(self.i1 != 70);
    }
}