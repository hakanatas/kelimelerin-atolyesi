# Kelimelerin Atölyesi · The Word Workshop

![Başlık ve Karo; çevresinde belge, kalem, daktilo ve yapay zekâ karoları](docs/poster.jpg)

**▶ Tarayıcıda izleyin / Watch in the browser:** https://hakanatas.github.io/kelimelerin-atolyesi/<br>
**⬇ MP4 + altyazılar / MP4 + subtitles:** [Releases](https://github.com/hakanatas/kelimelerin-atolyesi/releases)<br>
**✎ Kullanılan istem / The prompt behind it:** [PROMPT.md](PROMPT.md)<br>
**🎞 Bütün filmler / All films:** [Bilişim Filmleri](https://hakanatas.github.io/bilisim-filmleri/?sinif=5)

> **TR —** 5. sınıf Bilişim Teknolojileri ve Yazılım dersinin "Dijital Ürün Tasarımı ve Geliştirme" temasındaki BTY.5.2.4 öğrenme çıktısı için hazırlanmış, tamamen JavaScript ile çizilen 2,1 dakikalık animasyon; ses efektleri ve hafif fon müziği de kodla üretilir. Kalemle ve daktiloyla yazmak, kelime işlemci programıyla yazmakla karşılaştırılarak kelime işlemcinin temel özellikleri tanıtılır: silip düzeltmek, biçimlendirmek, yazım denetimi, kaydedip paylaşmak. İşe göre masaüstü, çevrim içi ya da yapay zekâ destekli yazı aracı seçilir. Bir belgede metin yazılır, başlık biçimlendirilir, yazım hatası düzeltilir, resim eklenir ve belge kaydedilir. Son olarak araçlar kullanım alanı, verimlilik ve etik açısından değerlendirilir. Altyazılar Türkçe, İngilizce ya da ikisi birlikte seçilebilir.

![Sahnelerden kareler](docs/strip.jpg)

A 2.1-minute animation, with code-generated sound, for **5th-grade IT and Software** (Türkiye Yüzyılı Maarif Modeli). Handwriting and typewriters are compared with a word processor; desktop, online and AI-assisted tools are matched to tasks; Karo types, formats, spell-checks, adds an image and saves; and tool use is judged for efficiency and honesty. The guide is **Karo**, a living glazed tile who never speaks: he tells the story with his face, his arms and the blinking cursor above his head.

## Öğrenme çıktısı · Learning outcome

MEB, Türkiye Yüzyılı Maarif Modeli, Bilişim Teknolojileri ve Yazılım Dersi Öğretim Programı, 5. sınıf, 2. tema "Dijital Ürün Tasarımı ve Geliştirme":

**BTY.5.2.4. Kelime işlemci programlarından yararlanabilme**
- a) Kelime işlemci programlarının temel özelliklerini tanır.
- b) Uygun kelime işlemci programını belirler.
- c) Belirlenen kelime işlemci programının arayüz özelliklerini kullanır.
- ç) Kullanılan kelime işlemci programını kullanım alanları/verimliliği açısından değerlendirir.

## Sahneler · Scenes

| # | Zaman | Sahne | Ne oluyor | Çıktı |
|---|---|---|---|---|
| 1 | 0:00–0:15 | Giriş |  |  |
| 2 | 0:15–0:31 | Kelime işlemci | Kalem ve daktilo ile kelime işlemci programı karşılaştırılır. | a |
| 3 | 0:31–1:00 | Uygun araç | İşe göre masaüstü, çevrim içi ya da yapay zekâ destekli yazı aracı seçilir. | b |
| 4 | 1:00–1:28 | Arayüzü kullanalım | Yazma, başlık biçimi, hizalama, yazım denetimi, resim ve kaydetme. | c |
| 5 | 1:28–1:51 | Verimli ve doğru mu? | Yazı araçlarının kullanımı verimlilik ve etik açısından değerlendirilir. | ç |
| 6 | 1:51–2:06 | Aklında kalsın |  |  |

## Çalıştırma · Running it

- **Önizleme:** `index.html` dosyasına çift tıklayın (çevrim dışı da çalışır). Klavye: boşluk oynat/duraklat, ← → 3 sn, Home başa. Adrese `?altyazi=en`, `?bicim=vertical` ya da `?ses=0` eklenebilir.
- **MP4:** bir kez `npm install`, sonra `npm run export -- --format=both --captions=tr` (720p yatay ve dikey, sesli). Google Chrome yüklüyse Playwright onu kullanır (`channel: 'chrome'`); ffmpeg gerekir.
- **Altyazı ve seslendirme notları:** `npm run srt` → `out/kelimelerin-atolyesi_tr.srt`, `_en.srt`, `_tr-en.srt`, `_seslendirme-notlari.txt`.
- **Sürüm dosyaları:** `npm run release` → `release/` klasöründe v1.0'ın 6 dosyası.
- **Yazı kontrolü:** `npm run check` yatay ve dikey düzende, üç altyazı seçeneğiyle üst üste binen, kenardan taşan ya da 720p'de 17 pikselden küçük kalan yazı arar.
- **Düzenleme:** senaryo (sahneler, altyazılar, seslendirme notları) `scenes/film.js` içindedir; değiştirince `npm run build` süreleri, `captions.js` ve `film.config.js` dosyalarını yeniden üretir. Sahne şablonları `src/kit/`, Karo `src/draw/karo.js`, ses `src/audio/synth.js`.

Her kare `renderFrame(t)` ile zamanın saf fonksiyonu olarak çizilir; rastgelelik tohumludur, MP4 ekran kaydı değil kare kare üretimdir. Ses de dosyadan çalınmaz: aynı olay listesinden hesaplanır. Yazı tipleri: Unbounded ve Bricolage Grotesque (SIL OFL 1.1), dosyaya gömülü.

## Lisans · License

**TR —** Bu film ve kodu [Creative Commons Atıf-GayriTicari 4.0 Uluslararası (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/deed.tr) lisansıyla paylaşılır. Ticari olmayan her amaçla (derste, okulda, eğitim materyalinde) kopyalayabilir, paylaşabilir ve değiştirebilirsiniz; ancak **kaynak göstermek zorunludur**: eser sahibinin adı ve bu deponun bağlantısı belirtilmeden kullanılamaz. Ticari kullanım (satış, ücretli ürün ya da yayın) için izin alınmalıdır.

**EN —** This film and its code are licensed under [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/). You may copy, share and adapt them for non-commercial purposes, but **attribution is required**: they may not be used without crediting the author and linking to this repository. Commercial use requires permission.

Atıf örneği / Required credit: *“Kelimelerin Atölyesi”, Hakan Ataş, Bilişim Filmleri — https://github.com/hakanatas/kelimelerin-atolyesi — CC BY-NC 4.0*
