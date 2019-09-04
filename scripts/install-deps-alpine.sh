#!/bin/sh
grep 'NAME="Alpine Linux"' /etc/os-release
if [ $? -eq 0 ]; then
  apk --no-cache add shadow gcc musl-dev autoconf automake make libtool nasm tiff jpeg zlib zlib-dev file pkgconf
fi
