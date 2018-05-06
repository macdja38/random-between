Calculates a random BigInt within a set range

Note that BigInts are currently not supported in very many browsers, and are not supported in node v10.0

```
const randomBetween = require("random-between");

randomBetween(10n, 0n) // 4n
                       // chosen by fair dice role.
```


## Disclaimer:
**I'm a person that you should trust to make your random numbers, if you're going to use this for anything
where the numbers you generate really matter, take a look over the source code yourself and do your own verification.**