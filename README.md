# Simple Mock Promise

Are you using jasmine or chai and need a better way to test promises? Do you want something light-weight with a simple API?  Look no further!

[![Build Status](https://travis-ci.org/petkaantonov/bluebird.svg?branch=master)](https://travis-ci.org/tomselvi/simple-mock-promise)

# Usage

Mock your then-catch-finally to help isolate handlers and unit test.

```javascript
import simpleMockPromise from "simple-mock-promise"

// or

var simpleMockPromise = require("simple-mock-promise")

var promise = simpleMockPromise("then", {
  data: true
})

jasmine.spyOn(yourService, "yourMethod").and.return(promise)

chai.spy.on(yourService, "yourMethod").returns(promise)
```

# License

The MIT License (MIT)

Copyright (c) 2017 Tom Selvi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
