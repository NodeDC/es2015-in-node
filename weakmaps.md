|kmap

Maps are a way to store and get values by a key.

```
var map1= new Map(),
  keySimple = "hello",
  keyComplex = {"hello": true},
map1.set(keySimple, {"to": "world"})
map1.set(keyComplex, {"to": "you"})
console.log("Hello to", map1.get(keySimple).to, "and", map1.get(keyComplex).to)
```

Maps are however common sources of garbage collection problems. JavaScript engines will not reclaim any objects that have active references. So in the previous example, neither keyComplex nor the "to" objects would be reclaimed while this Map exists.

WeakMaps offer a similar key/value pairing while also permitting keys to naturally expire.

```
var map2= new WeakMap(),
  key= new Object()
map2.set(key, {"to": "us"})
console.log("Hello to", map2.get(key)
key = null
// both key and {"to": "us"} are now reclaimed, saving your memory space!
// if this were a Map, both would remain stored
``` 

# Caveat - Non-iterable

It's impossible to loop through all the values in a WeakMap! The implementers said this would be non-deterministic- the results would depend on where the Garbage Collector was at that time- and said that thus they would not allow iterating through the WeakMap

# Caveat - Keys must be objects

In a normal Map, keys can be strings. In WeakMap, the keys cannot be primitives. Keys have to be actual objects, such that JavaScript will hold references.

# Example Use - Session Cache

WeakMaps could be useful for things like caches- a WeakMap on a webserver might be keyed to a 

```
var session = new WeakMap()
http.createServer(function(req,res){
	var userSession = session.get(req.socket)
	if(!userSession) session.set(req.socket, (userSession = {}))
})
```

In this example, a webserver could start building session state for socket that might be held open. But when the socket closes, and nothing else has references to it, the socket can expire normally, and the associate userSession data will also then be retired.
