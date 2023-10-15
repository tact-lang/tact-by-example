# Variables

The most important variables are those that are persisted in state and retain their value between contract executions. They must be defined in the scope of the contract like `contractVar1`.

Persisting data in state costs gas. The contract must pay rent periodically from its balance. State storage is expensive, about [6 TON per MB per year](https://ton.org/docs/develop/smart-contracts/fees#how-to-calculate-fees). If the contract runs out of balance, the data will be deleted. If you need to store large amounts of data, like images, a service like [TON Storage](https://ton.org/docs/participate/ton-storage/storage-faq) would be more suitable.

Persistent state variables can only change in *receivers* by sending messages as transactions. Sending these transactions will cost gas to users.

Executing *getters* is read-only, they can access all variables, but cannot change state variables. They are free to execute and don't cost any gas.

Local variables like `localVar1` are temporary. They're not persisted to state. You can define them in any function and they will only exist in run-time during the execution of the function. You can change their value in *getters* too.
