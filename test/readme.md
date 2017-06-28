# AlaSQL and AlaFile Test Suite

(c) 2017 Mathias Rangel Wulff & Andrey Gershun

*node-red-contrib-alasql test suite* is contributed by
[Kim McKinley (PotOfCoffee2Go)](http://github.com/potofcoffee2go). Requests and comments are
appreciated by creating an 
[issue](https://github.com/AlaSQL/node-red-contrib-alasql/issues) and please
mention `@PotOfCoffee2Go` somewhere in the issue.

Node-red `alasql nodes` access javascript objects as if they were a SQL database.
The `ala file in/out` nodes transform the alasql results to .xlsx, .xls, .csv,
.json, .tab, .tsv, or .txt files stored on the node-red server. See
[*node-red-contrib-alasql* home page](https://github.com/AlaSQL/node-red-contrib-alasql)
for more information on alsql nodes usage. Also check out 
[alasql](https://github.com/agershun/alasql) for information about alasql
in general.

## Test node-red-contrib-alasql nodes

*node-red-contrib-alasql* contains a set of test flows that you can play around
with, evaluate, and enjoy. By running the flows and examining the results, one
can determine if the nodes are handling exceptions properly and running as
expected.

It is assumed that you already have [nodejs](//nodejs.org) v6.5 and
[node-red](//nodered.org) v0.16.2 or greater installed on your system.
An excellent nodejs ES6 compatibility analysis can be found at
[https://kangax.github.io](https://kangax.github.io/compat-table/es6/).

> node-red needs to be installed with the recommended *-g* global option 
`npm install node-red -g` for the magic to work. Also, save yourself
a lot of grief by ensuring the account installing all this stuff has Admin
privileges.

## Installing the node-red-contrib-alasql Test Suite
The Test Suite is installed automatically during the `npm install`.

In a directory you put test stuff:
```
git clone https://github.com/AlaSQL/node-red-contrib-alasql.git
cd node-red-contrib-alasql
npm install

```

This will create a
[./test/flotsam](http://www.dictionary.com/browse/flotsam)
sub-directory of *node-red-contrib-alasql*. Flotsam will contain
all the stuff required by node-red to come up with the Test Suite.

To start node-red server with test flows on Linux/OSX: 
```
./start-test.sh

```
or on Windows:
```
.\start-test.bat

```
Due to node-red's node loading hierarchy
[see adding nodes](https://nodered.org/docs/getting-started/adding-nodes),
the nodes just installed may not override an older release.

> This might happen if the older release was installed in the same directory
path which node-red itself is installed. That method of installing nodes is
rare and frowned upon - since re-installing node-red would wipe out those nodes.

