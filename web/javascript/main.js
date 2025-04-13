// @ts-check

import Module from "../../main/hello-world-wasm/hello-world.js";
import * as protos from "../proto_bundle.js";
import { JsLib } from "./jslib/jslib.js";


// @ts-ignore
const $protobuf = protobuf;

Module().then((Module) => {
  Module._say_hello();

  // Create a Hello message and encode it.
  const helloMsg = protos.protos_a.HelloProto.create({ greeting: "Hello" });
  const helloMsgBuffer = protos.protos_a.HelloProto.encode(helloMsg).finish();

  // Call the C++ function to handle the greeting message.
  const lenPtr = Module._malloc(4);
  const dataPtr = Module.ccall(
    "handle_greeting",
    "number",
    ["array", "number", "number"],
    [helloMsgBuffer, helloMsgBuffer.length, lenPtr]
  );

  // Parse the returned message.
  const length = new Int32Array(Module.HEAPU8.buffer, lenPtr, 1)[0];
  const bytes = new Uint8Array(Module.HEAPU8.buffer, dataPtr, length);
  const decodedMsg = protos.protos_b.GoodbyeProto.decode(bytes);
  console.log("Decoded: ", decodedMsg);

  // Clean up.
  Module._free(dataPtr);
  Module._free(lenPtr);

  const jslib = new JsLib();
  jslib.sayHello();
});