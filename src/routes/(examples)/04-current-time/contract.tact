import "@stdlib/deploy";

contract CurrentTime with Deployable {

    deployTime: Int as uint32;

    init() {
        self.deployTime = now(); // returns unix time, the number of seconds since the epoch
    }

    receive("wait 10s") {
        require(now() - self.deployTime > 10, "Did not wait long enough");
        dump("thanks for waiting 10 seconds");
    }

    receive("wait 10d") {
        require(now() - self.deployTime > 10*24*60*60, "Did not wait long enough");
        dump("thanks for waiting 10 days");
    }

    get fun unixTime(): Int {
        return now();
    }

    get fun stringTime(): String {
        let sb: StringBuilder = beginString();
        sb.append(now().toString());
        sb.append(" seconds elapsed since 1 January 1970");
        return sb.toString();
    }
}