# Трейт Resumable

Трейт Resumable практически идентичен трейту Stoppable, который мы рассмотрели в предыдущем примере.

Он добавляет одну важную возможность — владелец может возобновить работу остановленного контракта.

Трейт Stoppable сам по себе может быть несколько опасным, потому что владелец не может передумать. Если вы не уверены, какой трейт использовать, используйте этот.

Этот трейт неявно добавляет трейты Ownable и Stoppable. Обратите внимание, что трейт Ownable не позволяет владельцу передать право собственности другому владельцу. Чтобы разрешить смену владельца, дополнительно добавьте трейт `OwnableTransferable`.

## Как использовать Resumable

Определите переменные состояния с именами `owner: Address` и `stopped: Bool` и вызывайте `self.requireNotStopped()` для действий, которые должны быть остановлены.

<div style="padding-left: 1em; margin: 1em 0; position: relative;">
    <div style="position: absolute; top: 0; bottom: 0%; left: 0; width: 3px; background-color: green;"></div>
    <strong>Инфо</strong>: Трейт OwnableTransferable определён в <a href="https://github.com/tact-lang/tact/blob/main/stdlib/libs/stoppable.tact">стандартной библиотеке</a>

</div>
