load("@rules_cc//cc:defs.bzl", "cc_binary", "cc_proto_library")
load("@rules_proto//proto:defs.bzl", "proto_library")

proto_library(
  name = "hello_proto",
  srcs = ["hello.proto"],
  visibility = ["//main/protos_b:__pkg__"],
)

cc_proto_library(
  name = "hello_cc_proto",
  deps = [":hello_proto"],
  visibility = ["//main:__pkg__"],
)

filegroup (
  name = "protos_a",
  srcs = [
    "hello.proto",
  ],
  visibility = ["//web:__pkg__"],
)
