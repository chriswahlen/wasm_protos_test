load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
git_repository(
  name = "wasm_protos",
  remote = "https://github.com/chriswahlen/wasm_protos.git",
  commit = "d13b1de6834e779d1a84166366819fc5ddb04137"
)

git_repository(
  name = "emsdk",
  remote = "https://github.com/emscripten-core/emsdk.git",
  tag = "4.0.6",
  strip_prefix = "bazel",
)

load("@emsdk//:deps.bzl", emsdk_deps = "deps")
emsdk_deps()

load("@emsdk//:emscripten_deps.bzl", emsdk_emscripten_deps = "emscripten_deps")
emsdk_emscripten_deps(emscripten_version = "4.0.6")

load("@emsdk//:toolchains.bzl", "register_emscripten_toolchains")
register_emscripten_toolchains()
