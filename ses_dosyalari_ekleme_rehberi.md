# Kur'an Harfleri Uygulaması - Ses Dosyaları Ekleme Rehberi

Bu rehber, Kur'an Harfleri öğrenme uygulamanıza gerçek ses dosyalarını nasıl ekleyeceğinizi ve uygulamanın tam işlevsel hale gelmesi için gerekli adımları açıklamaktadır.

## 1. Gerekli Ses Dosyalarının Hazırlanması

Uygulamanız için aşağıdaki ses dosyalarına ihtiyacınız olacak:

### Harf Sesleri
- `elif.mp3` - Elif harfinin okunuşu
- `be.mp3` - Be harfinin okunuşu
- `te.mp3` - Te harfinin okunuşu
- `se.mp3` - Se harfinin okunuşu
- `cim.mp3` - Cim harfinin okunuşu

### Nesne Sesleri
- `tavsan.mp3` - Tavşan kelimesinin okunuşu
- `ordek.mp3` - Ördek kelimesinin okunuşu
- `elma.mp3` - Elma kelimesinin okunuşu
- `tilki.mp3` - Tilki kelimesinin okunuşu
- `deve.mp3` - Deve kelimesinin okunuşu

### Uygulama Sesleri
- `hosgeldin.mp3` - "Hoş geldin" sesli yönlendirmesi
- `harfleri_ogren.mp3` - "Harfleri öğren" sesli yönlendirmesi
- `harf_oyunu.mp3` - "Harf oyunu" sesli yönlendirmesi
- `ayarlar.mp3` - "Ayarlar" sesli yönlendirmesi
- `hangi_harf.mp3` - "Hangi harf" sorusu
- `dogru_cevap.mp3` - Doğru cevap için sevinç sesi
- `tekrar_dene.mp3` - "Tekrar dene" sesli yönlendirmesi
- `ayarlar_kaydedildi.mp3` - "Ayarlar kaydedildi" sesli yönlendirmesi

## 2. Klasör Yapısının Oluşturulması

Ses dosyalarını uygulamanıza eklemek için aşağıdaki klasör yapısını oluşturmanız gerekiyor:

```
public/
  assets/
    audio/
      harfler/
        elif.mp3
        be.mp3
        te.mp3
        se.mp3
        cim.mp3
      nesneler/
        tavsan.mp3
        ordek.mp3
        elma.mp3
        tilki.mp3
        deve.mp3
      hosgeldin.mp3
      harfleri_ogren.mp3
      harf_oyunu.mp3
      ayarlar.mp3
      hangi_harf.mp3
      dogru_cevap.mp3
      tekrar_dene.mp3
      ayarlar_kaydedildi.mp3
```

## 3. Ses Dosyalarının Eklenmesi

Ses dosyalarını eklemek için iki yöntem kullanabilirsiniz:

### A. Doğrudan Sunucuya Yükleme (Önerilen)

1. Ses dosyalarınızı yukarıdaki klasör yapısına uygun şekilde hazırlayın
2. FTP veya SSH kullanarak sunucunuza bağlanın
3. Dosyaları ilgili klasörlere yükleyin

### B. Yeniden Build ve Deploy

1. Yerel geliştirme ortamınızda, projenizin kök dizininde `public/assets/audio` klasör yapısını oluşturun
2. Ses dosyalarını ilgili klasörlere yerleştirin
3. Uygulamayı yeniden build edin: `npm run build`
4. Build klasörünü tekrar deploy edin

## 4. Ses Dosyalarının Test Edilmesi

Ses dosyalarını ekledikten sonra, uygulamanızı test etmek için:

1. Tarayıcınızda uygulamanızı açın: https://qcpiukkf.manus.space
2. Ana sayfada ses simgesine tıklayın - "Hoş geldin" sesi çalmalı
3. "Harfleri Öğren" butonuna tıklayın - ilgili ses çalmalı ve sayfa açılmalı
4. Harfleri Öğren sayfasında harfe tıklayın - harfin sesi çalmalı
5. Nesne görseline tıklayın - nesnenin adı seslendirilmeli
6. Diğer sayfaları ve özellikleri de benzer şekilde test edin

## 5. Olası Sorunlar ve Çözümleri

### Ses Dosyaları Hala Çalışmıyorsa:

1. **Dosya Formatı Kontrolü**: Ses dosyalarınızın MP3 formatında olduğundan emin olun
2. **Dosya Adları Kontrolü**: Dosya adlarının tam olarak JSON dosyasında belirtilen yollarla eşleştiğinden emin olun
3. **Tarayıcı Konsolu Kontrolü**: Tarayıcınızın geliştirici araçlarını açın (F12) ve konsol sekmesinde hata mesajlarını kontrol edin
4. **CORS Kontrolü**: Ses dosyalarınızın aynı domain üzerinden sunulduğundan emin olun

### Ses Dosyalarının Kalitesi:

- Ses dosyalarının net ve anlaşılır olduğundan emin olun
- Çocuklar için uygun, net ve yavaş telaffuzlu kayıtlar kullanın
- Arka plan gürültüsü olmayan kayıtlar tercih edin

## 6. İleri Seviye Özelleştirmeler

Uygulamanızı daha da geliştirmek isterseniz:

1. **Daha Fazla Harf Ekleme**: JSON dosyasına yeni harfler ekleyebilir ve ilgili ses dosyalarını hazırlayabilirsiniz
2. **Farklı Dil Seçenekleri**: Farklı dillerde sesli yönlendirmeler ekleyebilirsiniz
3. **Arka Plan Müziği**: Çocukların ilgisini çekecek hafif bir arka plan müziği ekleyebilirsiniz

## Yardım ve Destek

Eğer ses dosyalarını eklerken herhangi bir sorunla karşılaşırsanız veya ek yardıma ihtiyacınız olursa, lütfen bizimle iletişime geçmekten çekinmeyin.

---

Bu rehber, Kur'an Harfleri öğrenme uygulamanızın tam işlevsel hale gelmesi için gerekli adımları içermektedir. Ses dosyalarını ekledikten sonra, uygulamanız 3-5 yaş arası çocuklar için etkili bir öğrenme aracı olacaktır.
