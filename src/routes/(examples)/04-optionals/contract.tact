import "@stdlib/deploy";

struct StrctOpts {
    sa: Int?;
    sb: Bool?;
    sc: Address?;
}

message MsgOpts {
    ma: Int?;
    mb: Bool?;
    mc: Address?;
    md: StrctOpts?;
}

contract Optionals with Deployable {

    ca: Int?;
    cb: Bool?;
    cc: Address?;
    cd: StrctOpts?;

    init(a: Int?, b: Bool?, c: Address?) {
        self.ca = a;
        self.cb = b;
        self.cc = c;
        self.cd = StrctOpts{sa: null, sb: true, sc: null};
    }

    receive(msg: MsgOpts) {
        let i: Int = 12;
        if (msg.ma != null) {
            i = i + msg.ma!!; // !! tells the compiler this can't be null
            self.ca = i;
        }
    }

    get fun optInt(): Int? {
        return self.ca;
    }

    get fun optIntVal(): Int {
        if (self.ca == null) {
            return -1;
        } else {
            return self.ca!!; // !! tells the compiler this can't be null
        }
    }

    get fun optNested(): Int? {
        if (self.cd != null && (self.cd!!).sa != null) {
            return (self.cd!!).sa!!; // !! tells the compiler this can't be null
        } else {
            return null;
        }
    }
}