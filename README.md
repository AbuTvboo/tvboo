# TVBoo

IPTV player for Android TV, Fire TV, phone and tablet.

**TVBoo does not include any channels, movies or other content.** You need a playlist (M3U, Xtream Codes or Stalker portal) from your own provider.

- Website and privacy policy: https://abutvboo.github.io/tvboo/ ([Deutsch](https://abutvboo.github.io/tvboo/datenschutz.html) · [English](https://abutvboo.github.io/tvboo/privacy.html) · [Türkçe](https://abutvboo.github.io/tvboo/gizlilik.html))
- Questions and feedback: [Issues](https://github.com/AbuTvboo/tvboo/issues)

## FFmpeg source code (LGPL)

TVBoo uses FFmpeg (LGPL 2.1 or later) as a separate, replaceable native library (`libffmpegJNI.so`) for audio formats such as AC3, E-AC3 and DTS. The complete corresponding source of this part (FFmpeg source, JNI wrapper, build script and configuration) is attached to every release as `TVBoo-<version>-ffmpeg-source.zip`: see [Releases](https://github.com/AbuTvboo/tvboo/releases).
