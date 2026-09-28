/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "kelimelerin-atolyesi",
    "title": "Kelimelerin Atölyesi",
    "titleEn": "The Word Workshop",
    "grade": 5,
    "theme": "Dijital Ürün Tasarımı ve Geliştirme",
    "code": "BTY.5.2.4",
    "outcome": "Kelime işlemci programlarından yararlanabilme",
    "outcomeEn": "Making use of word processing programs",
    "duration": 126.2,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 14.8,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 14.8,
      "t1": 31.2,
      "name": "Kelime işlemci",
      "en": "Word processor",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 31.2,
      "t1": 60,
      "name": "Uygun araç",
      "en": "The right tool",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 60,
      "t1": 88,
      "name": "Arayüzü kullanalım",
      "en": "Using the interface",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 88,
      "t1": 110.7,
      "name": "Verimli ve doğru mu?",
      "en": "Efficient and fair?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 110.7,
      "t1": 126.2,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
