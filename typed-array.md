# Hello World Typed Array

## Intro

Typed arrays are used great for raw binary data. If you website streams video, audio, or transfers large amounts of data through sockets. Typed arrays make it quick and easy for JS code to manipulate binary data.

Don't confuse with a normal array. This ```isArray()``` method will return false and not all methods are avail such as push and pop.

## Architecture

Split into buffers and views. The buffer is an object representing the chunk of data and does not have mechanism to access it's contents. A view provides that context which is a data type and the number of elements. You can think of the view as turning the data into an actual array.

## Types

The types of array views follow all the usually numeric types. Int8, Unit32, Float64


Type |	Size in bytes |	Description |	Web IDL type |	Equivalent C type
--- | --- | --- | --- | --- |
Int8Array	| 1	| 8-bit two's complement signed integer	| byte	| int8_t
Uint8Array	| 1	| 8-bit unsigned | integer	octet	| uint8_t
Uint8ClampedArray	| 1	| 8-bit unsigned | integer (clamped)	octet	| uint8_t
Int16Array	| 2	| 16-bit two's complement | signed integer	short	| int16_t
Uint16Array	| 2	| 16-bit unsigned integer	| unsigned short	| uint16_t
Int32Array	| 4	| 32-bit two's complement | signed integer	long	| int32_t
Uint32Array	| 4	| 32-bit unsigned integer	| unsigned long	| uint32_t
Float32Array	| 4	| 32-bit IEEE | floating point number	unrestricted float	| float
Float64Array	| 8	| 64-bit IEEE | floating point number	unrestricted double	| double

## Example Usage

The first thing to do is to declare your buffer.

```
var buffer = new ArrayBuffer(16);
```
Next you need your typed typedArray to take in the buffer. Now we have a buffer assigned to a chunk of memory initialized to zero. To read and use this buffer we have to create a view.
```
var int32View = new Int32Array(buffer);
```

Now that we have a view into this data we can then act on it like a standard array.

```
for (var i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

This will fill out the 4 values of the allocated indices, 4 entries at 4 bytes each makes 16 total bytes
