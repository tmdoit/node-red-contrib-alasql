# AlaSQL and AlaFile Test Suite

(c) 2017 Mathias Rangel Wulff & Andrey Gershun

Node-red `alasql nodes` access javascript objects as if they were a SQL database.
The `ala file in/out` nodes transform the alasql results to .xlsx, .xls, .csv,
.json, .tab, .tsv, or .txt files stored on the node-red server. See
[*node-red-contrib-alasql* home page](https://github.com/AlaSQL/node-red-contrib-alasql)
for more information on alsql nodes usage. Also check out 
[alasql](https://github.com/agershun/alasql) for information about alasql
in general.

*node-red-contrib-alasql test suite* is contributed by
[Kim McKinley (PotOfCoffee2Go)](http://github.com/potofcoffee2go). Requests and
comments are appreciated. Create an 
[issue](https://github.com/AlaSQL/node-red-contrib-alasql/issues) and please
mention `@PotOfCoffee2Go` somewhere in the issue.

## Test node-red-contrib-alasql nodes

*node-red-contrib-alasql* contains a set of test flows to ensure the nodes are
handling exceptions properly and running as expected. Existing flows can be 
exported/imported into the test suite for verification.

## Running Alasql Test Suite
To run the Test Suite from the default install as described on the 
[*node-red-contrib-alasql* GitHub home page](https://github.com/AlaSQL/node-red-contrib-alasql):

```
cd ~/.node-red/node_modules/node-red-contrib-alasql
npm test
./test/start.sh # or on Windows .\test\start.bat

```
This will create a node-red user directory containing AlaSQL test flows of
the version installed in ~/.node-red

## Running stand alone Test Suite
If you wish to test the current release of AlaSQL prior to going into production.
In any directory:
```
git clone https://github.com/AlaSQL/node-red-contrib-alasql.git
cd node-red-contrib-alasql
npm install
npm test
./test/start.sh # or on Windows .\test\start.bat

```

> The test suite uses the `npm link` command which allows node-red to
automatically add *AlaSQL* nodes to node-red by default. To remove this behavior,
issue a `npm unlink` from the *node-red-contrib-alasql* directory cloned above.

