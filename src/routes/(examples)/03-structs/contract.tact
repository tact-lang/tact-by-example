import "@stdlib/deploy";

struct Point {
    x: Int;
    y: Int;
}

struct Params {
    name: String = "Satoshi";   // default value
    age: Int? = null;           // optional field
    point: Point;               // nested structs
}

message Add {
    point: Point;               // message can hold a struct
}

contract Structs with Deployable {

    // contract persistent state variables
    s1: Point;
    s2: Params;

    init() {
        self.s1 = Point{x: 2, y: 3};
        self.s2 = Params{point: self.s1};
    }

    receive("show ops") {
        // temporary variable
        let s: Point = Point{x: 4, y: 5};

        self.s1 = s;
    }

    receive(msg: Add) {
        self.s1.x = self.s1.x + msg.point.x;
        self.s1.y = self.s1.y + msg.point.y;
    }

    get fun point(): Point {
        return self.s1;
    }

    get fun params(): Params {
        return self.s2;
    }
}