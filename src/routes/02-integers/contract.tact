import "@stdlib/deploy";

contract Integers with Deployable {
 
    // integers can be persisted in state in various sizes
    i1: Int as int257 = 3001;   // range -2^256 to 2^256 - 1 (takes 257 bit = 32 bytes + 1 bit)
    i2: Int as uint256;         // range 0 to 2^256 - 1 (takes 256 bit = 32 bytes)
    i3: Int as int256 = 17;     // range -2^255 to 2^255 - 1 (takes 256 bit = 32 bytes)
    i4: Int as uint128;         // range 0 to 2^128 - 1 (takes 128 bit = 16 bytes)
    ///i5: Int as int128;          // range -2^127 to 2^127 - 1 (takes 128 bit = 16 bytes)
    i6: Int as coins;           // range 0 to 2^120 - 1 (takes 120 bit = 15 bytes)
    i7: Int as uint64 = 0x1c4a; // range 0 to 18,446,744,073,709,551,615 (takes 64 bit = 8 bytes)
    i8: Int as int64 = -203;    // range -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (takes 64 bit = 8 bytes)
    i9: Int as uint32 = 0;      // range 0 to 4,294,967,295 (takes 32 bit = 4 bytes)
    i10: Int as int32 = 0;      // range -2,147,483,648 to 2,147,483,647 (takes 32 bit = 4 bytes)
    i11: Int as uint16 = 0;     // range 0 to 65,535 (takes 16 bit = 2 bytes)
    i12: Int as int16 = 0;      // range -32,768 to 32,767 (takes 16 bit = 2 bytes)
    i13: Int as uint8 = 0;      // range 0 to 255 (takes 8 bit = 1 byte)
    i14: Int as int8 = 0;       // range -128 to 127 (takes 8 bit = 1 byte)

    init() {
        self.i2 = 0x83dfd552e63729b472fcbcc8c45ebcc6691702558b68ec7527e1ba403a0f31a8;
        self.i4 = 1507998500293440234999;
        ///self.i5 = pow(10, 9);   // this is 10^9 = 1,000,000,000
        self.i6 = ton("1.23");  // easy to read coin balances (like cents, just with 9 decimals)
    }

    receive("integer dump") {
        dump(self.i1);
        dump(self.i2);
        dump(self.i3);
        dump(self.i4);
        ///dump(self.i5);
        dump(self.i6);
        dump(self.i7);
        dump(self.i8);
    }

    receive("integer ops") {
        // temporary variable, runtime Int type is always int257 (range -2^256 to 2^256 - 1)
        let i: Int = -12;                       dump(i);

        i = self.i4 * 3 + self.i1 - self.i8;    dump(i);
        i = self.i1 % 10;                       dump(i);
        i = self.i1 / 1000;                     dump(i);
        i = self.i1 >> 3;                       dump(i);
        i = self.i1 << 2;                       dump(i);
        i = min(self.i3, 11);                   dump(i);
        i = max(self.i3, 22);                   dump(i);
        i = abs(self.i8);                       dump(i);

        dump(self.i1 == 3001);
        dump(self.i1 > 2000);
        dump(self.i1 != 70);
    }
}