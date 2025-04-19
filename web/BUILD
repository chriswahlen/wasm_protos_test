load("@wasm_protos//tools:copy_bundle.bzl", "copy_bundle")
load("@wasm_protos//tools:js_proto_defs.bzl", "generate_protobufjs_dep", "js_proto_bundle")

# Generate a local protobuf.min.js to load.
generate_protobufjs_dep(
  name = "protobuf_js",
  out = "protobuf.min.js",
)

js_proto_bundle(
  name = "proto_bundle",
  srcs = [
    "//main/protos_a:protos_a",
    "//main/protos_b:protos_b",
  ],
  export_names = [
    "protos_a.js",
    "protos_b.js",
  ],
  bundle_name = "proto_bundle.js",
  visibility = ["//web:__pkg__"],
)

filegroup(
  name = "web_bundle",
  srcs = [
    "hello.html",
    "main.js",
  ],
)

copy_bundle(
  name = "copy_web_bundle",
  local_srcs = [
    ":web_bundle",
    ":proto_bundle",
    ":protobuf_js",
  ],
  srcs = [
    ":web_bundle",
    ":proto_bundle",
    ":protobuf_js",
    "//main:hello-world-wasm",
    "//web/javascript/jslib:jslib_js",
  ],
  out_dir = "web_bundle",
)
