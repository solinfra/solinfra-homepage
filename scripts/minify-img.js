#!/usr/bin/env node
/**
 * minifies all JPEG images in raw dir and brings them into usable
 * asset directory for images. Utilizies jpegtran to strip
 * wasteful metadata and mozjpeg to do the real image compression.
 *
 * If running in alpine/docker instance, ensure needed deps
 * are installed, listed in install-deps-alpine.sh script.
 */
const imagemin = require('imagemin')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminMozjpeg = require('imagemin-mozjpeg')

;(async () => {
  try {
    await imagemin(
      ['src/assets/images/raw/*.jpg'],
      {
        destination: 'src/assets/images/',
        plugins: [
          imageminJpegtran(),
          imageminMozjpeg({
            quality: 70,
            dcScanOpt: 2,
            arithmetic: false
          })
        ]
      })
  } catch (e) {
    console.error('image minification ran into an error...')
    console.error(e)
    console.error(e.stderr && e.stderr.toString())
  }
})()
