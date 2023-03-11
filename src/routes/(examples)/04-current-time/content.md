# Current Time

Many blockchains rely on the current *block number* to give a sense of progress to contracts. This approach isn't well suited for TON because contracts on TON can run on multiple workchains and those may have different block seqnos. 

In TON, the best practice is to rely on the current time instead, which is available by calling `now()`. Standard [unix time](https://en.wikipedia.org/wiki/Unix_time) is returned, meaning the number of seconds since 1 January 1970. 

Transactions are not executed until validators add them to a new block. The current time will therefore be the timestamp of the new block when called in the context of a *receiver*.

If you need to store the time in state or encode it in a message, use `Int as uint32`.

If you need to compare two points in time simply subtract the earlier from the later. This will give you the number of seconds between the two. Divide by 60 to get the difference in minutes, by 60 * 60 to get the difference in hours and by 24 * 60 * 60 to get the difference in days.