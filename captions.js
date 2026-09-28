/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 6.9, tr: "Dedem gençken mektuplarını elle yazarmış", en: "When Grandpa was young, he wrote letters by hand",
      note: "Karo'nun dedesi gençken mektuplarını kalemle, bazen de daktiloyla yazarmış. Bir hata yapınca sayfayı baştan yazarmış!" },
    { scene: 1, start: 7.7, end: 13.4, tr: "Biz bugün nasıl yazıyoruz?", en: "How do we write today?",
      note: "Bugün ödevlerimizi, davetiyelerimizi ve dilekçelerimizi çoğu zaman bilgisayarda yazıyoruz. Nasıl mı?" },
    { scene: 2, start: 16.3, end: 23.4, tr: "Kelime işlemciyle hatayı silip düzeltiriz", en: "In a word processor we delete and fix mistakes",
      note: "Kalemle yazarken bir hata yaparsak sayfayı baştan yazarız. Kelime işlemci programında ise hatayı silip hemen düzeltiriz." },
    { scene: 2, start: 24.2, end: 29.9, tr: "Biçimlendirir, kaydeder, paylaşırız", en: "We format, save and share",
      note: "Yazının tipini, boyutunu ve rengini değiştirebilir, resim ve tablo ekleyebiliriz. Belgeyi kaydeder, yazdırır ya da paylaşırız." },
    { scene: 3, start: 32.6, end: 38.3, tr: "Hangi yazı aracını seçelim?", en: "Which writing tool should we choose?",
      note: "Farklı yazı araçları var. Yapacağımız işe göre en uygun olanı seçeriz." },
    { scene: 3, start: 39.1, end: 45, tr: "Masaüstü program internetsiz de çalışır", en: "A desktop program works without the internet",
      note: "Bilgisayara kurulu masaüstü programlar internet olmadan da çalışır. Ödev ya da dilekçe yazıp yazdırabiliriz." },
    { scene: 3, start: 45.9, end: 51.6, tr: "Çevrim içi araçla birlikte yazabiliriz", en: "With an online tool we can write together",
      note: "Çevrim içi araçlarda arkadaşlarımızla aynı belge üzerinde çalışabilir, belgeye her cihazdan ulaşabiliriz." },
    { scene: 3, start: 52.4, end: 58.6, tr: "Yapay zekâ fikir verir, metni kontrol eder", en: "AI gives ideas and checks our text",
      note: "Yapay zekâ destekli araçlar fikir verebilir ya da metnimizi kontrol edebilir. Ama yazının sahibi biz olmalıyız." },
    { scene: 4, start: 61.5, end: 67.1, tr: "Önce metni yazalım", en: "First, let's type the text",
      note: "Önce başlığı ve metni klavyeyle yazarız." },
    { scene: 4, start: 67.9, end: 73.6, tr: "Başlığı büyüt ve ortala", en: "Make the title bigger and centre it",
      note: "Başlığı büyütür ve sayfanın ortasına alırız. Böylece hemen göze çarpar." },
    { scene: 4, start: 74.4, end: 80.1, tr: "Kırmızı çizgi: yazım hatası var!", en: "A red line means a spelling mistake!",
      note: "Önemli cümleyi kalın yaparız. Kırmızı dalgalı çizgi bir yazım hatasını gösterir: \"burda\" değil, \"burada\". Yazım denetimiyle düzeltiriz." },
    { scene: 4, start: 80.9, end: 86.6, tr: "Resim ekle ve belgeyi kaydet", en: "Add a picture and save the document",
      note: "Bir resim ve kısa bir açıklama ekleriz. Sonra belgeyi anlamlı bir adla kaydederiz." },
    { scene: 5, start: 89.4, end: 96.2, tr: "Yapay zekânın yazdığını kendi ödevim diye vermek", en: "Handing in AI writing as my own homework",
      note: "Yapay zekânın yazdığı metni kendi ödevimiz gibi teslim etmek dürüst değildir. Önce kendimiz yazmalıyız." },
    { scene: 5, start: 97, end: 102.8, tr: "Grup ödevini çevrim içi belgede yazmak", en: "Writing group homework in an online document",
      note: "Grup ödevini çevrim içi bir belgede yazarsak herkes aynı anda katkı verir. Verimli." },
    { scene: 5, start: 103.6, end: 109.3, tr: "Yazım denetimiyle hataları düzeltmek", en: "Fixing mistakes with the spell checker",
      note: "Yazım denetimi hataları bulmamıza yardım eder. Türkçeyi doğru yazmak hepimizin görevidir. Verimli." },
    { scene: 6, start: 112.1, end: 118.3, tr: "Aklında kalsın: işe uygun yazı aracını seç", en: "Remember: choose the right writing tool",
      note: "Aklında kalsın: kelime işlemci yazmayı, düzeltmeyi ve paylaşmayı kolaylaştırır. İşine uygun aracı seç." },
    { scene: 6, start: 119.1, end: 124.8, tr: "Yazının sahibi sen ol!", en: "Be the author of your writing!",
      note: "Araçlar sana yardım eder, ama yazının sahibi her zaman sen ol!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
