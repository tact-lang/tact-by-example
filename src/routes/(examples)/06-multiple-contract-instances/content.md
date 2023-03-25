# Multiple Contract Instances

Instead of duplicating the code for the two contracts like in the previous example, we can write the code once and still deploy two separate instances. Each instance will have its own unique address.

We can do this by adding an argument to `init()`. When deploying the contract, we need to specify its init arguments. In this example we deploy twice, the first with the argument 1 and the second is deployed with 2.

We mentioned earlier that contract addresses on TON are [derived](https://docs.ton.org/learn/overviews/addresses#account-id) from the initial code of the contract (the compiled bytecode) and the initial data of the contract (the arguments of init).

Since we wrote the code once, the initial code is now identical. By adding an contructor argument, we've made the initial data different. This is why we're going to get two different addresses.