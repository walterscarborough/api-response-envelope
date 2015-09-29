# API Response Envelope

This is a node.js module that wraps output data in a standard envelope. It can handle 'success' and 'error' response wrapping, and will preserve formatting if null input values are used.

The format is as follows:

```
{
    "status": {success} | {error},
    "result": {array},
    "message": {string}
}

```

## Requirements

No dependencies required for regular use.

Mocha and chai are required for running tests.

## Installation and Usage

Usage:

```
var apiResponseEnvelope = require('api-response-envelope');

var myData = ['Nirvana', 'Soundgarden'];

var responseEnvelope = apiResponseEnvelope(myData);

...
```

## Running Tests

Make sure that you have mocha and chai installed:

```
npm install
```

Now run the tests:

```
make test
```

## Contributions

Contributions and feedback are welcome! Please open an issue or send a pull request.

## License
The MIT License (MIT)

Copyright (c) 2015 Walter Scarborough

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
