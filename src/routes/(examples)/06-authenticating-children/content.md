# Authenticating Children

If you look closely at the previous example you will notice that it is somewhat dangerous.

What happens if some user tries to send a `HiFromChild` message and impersonate a child? What happens if some user tries to send a `HiFromParent` message and impersonate the parent?

To add authentication that messages came from where we think they came from, we simply need to add `require()` in the beginning of every protected receiver and make sure that the sender is who we expect it is.

It is best practice to add this authentication to every message coming from a parent and every message coming from a child.

## Let's try to hack this contract

Try pressing the <span class="mdButton grape">Send HiFromChild{1}</span> button. This will send the parent an impersonated `HiFromChild` message, but from some user, not from a real child.

Since this code is now protected, it will notice that the sender is incorrect and reject the message with an access denied error.

<div style="padding-left: 1em; margin: 1em 0; position: relative;">
    <div style="position: absolute; top: 0; bottom: 0%; left: 0; width: 3px; background-color: green;"></div>
    <strong>Info</strong>: Having a error break in the `Send HiFromChild{1}` button is expected. Because only the message from the child can be accepted.
</div>
