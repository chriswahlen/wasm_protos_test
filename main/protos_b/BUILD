load("@rules_cc//cc:defs.bzl", "cc_binary", "cc_proto_library")
load("@rules_proto//proto:defs.bzl", "proto_library")

proto_library(
  name = "goodbye_proto",
  srcs = ["goodbye.proto"],
  deps = ["//main/protos_a:hello_proto"],
)

cc_proto_library(
  name = "goodbye_cc_proto",
  deps = [":goodbye_proto"],
  visibility = ["//main:__pkg__"],
)

filegroup(
  name = "protos_b",
  srcs = ["goodbye.proto"],
  visibility = ["//web:__pkg__"],
)
