datastore-playground
====================

[![Greenkeeper badge](https://badges.greenkeeper.io/adilsoncarvalho/datastore-playground.svg)](https://greenkeeper.io/)

This is a collection of source code to play with [Google Datastore][0] on a few languages that I'm interested about.

Datastore is an _sugar layer_ on top of [Google BigTable][1] making it easier to use as it adds features commonly available on other DBMS.

It has some concepts that are unique and that need to be properly evaluated. I have many doubts on how to properly take advantage of Datastore's features when designing the storage of data.

When you read [Datastore documentation][2] you see new names for old concepts like `entities`, `properties`, `keys` and some new stuff as `ancestor path`, `parents` and `groups` to name a few.

Google maintains a compreensive [library documentation][3] and a nice documentation on many [languages][4].

I'll be using the [Docker Datastore Emulator image][5] created by @vyper.

How to put it all up?

    docker-compose up
    docker-compose run --rm ruby-app bash

> I write some tech stuff at [adilsoncarvalho.com][6]

[0]: https://cloud.google.com/datastore/
[1]: https://cloud.google.com/bigtable/
[2]: https://cloud.google.com/datastore/docs/
[3]: https://cloud.google.com/datastore/docs/reference/libraries
[4]: https://googlecloudplatform.github.io
[5]: https://github.com/vyper/docker-gcd-grpc
[6]: https://adilsoncarvalho.com/
