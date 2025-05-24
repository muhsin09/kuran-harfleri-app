# Kur'an Harfleri Öğrenme Uygulaması - README

## Proje Hakkında

Bu proje, 3-5 yaş arası çocukların Kur'an harflerini öğrenmesini ve pekiştirmesini sağlayan, mobil uyumlu bir web uygulamasıdır. Uygulama React kullanılarak geliştirilmiş olup, çocuk dostu bir arayüz, büyük görseller ve sesli yönlendirmeler içermektedir.

## Özellikler

- Ana Sayfa: Harfleri Öğren, Harf Oyunu ve Ayarlar bölümlerine erişim
- Harfleri Öğren: Arap alfabesindeki harflerin tek tek gösterimi, sesli okunuşu ve harfle başlayan nesnelerin görselleri
- Harf Oyunu: Harfleri eğlenceli bir şekilde pekiştirmeye yönelik etkileşimli oyun
- Ayarlar: Ses seviyesi ve harf seti seçimi gibi ebeveyn kontrolleri

## Teknik Detaylar

- **Geliştirme Dili:** JavaScript (React)
- **Arayüz:** Responsive tasarım, büyük görseller, sesli yönlendirme
- **Veri Yapısı:** JSON formatında harf bilgileri
- **Mobil Uyumluluk:** Tüm ekran boyutlarına uygun tasarım

## Proje Yapısı

```
kuran-harfleri-app/
├── src/
│   ├── components/
│   │   └── App.js
│   ├── styles/
│   │   └── App.css
│   ├── data/
│   │   └── harfler.json
│   ├── assets/
│   │   ├── audio/
│   │   └── images/
│   ├── index.html
│   └── index.js
└── wireframes/
    ├── ana_sayfa.md
    ├── harfleri_ogren.md
    ├── harf_oyunu.md
    └── ayarlar.md
```

## Kurulum ve Çalıştırma

1. Projeyi bilgisayarınıza indirin
2. Gerekli bağımlılıkları yükleyin:
   ```
   npm install
   ```
3. Uygulamayı geliştirme modunda çalıştırın:
   ```
   npm start
   ```

## Mobil Platformlara Taşıma

Bu uygulama, React Native veya PWA (Progressive Web App) yaklaşımları kullanılarak mobil platformlara taşınabilir:

1. **React Native ile:**
   - Mevcut React bileşenlerini React Native bileşenlerine dönüştürme
   - Platform özel ses ve görsel API'lerini kullanma
   
2. **PWA olarak:**
   - Service Worker ekleme
   - Manifest dosyası oluşturma
   - Offline çalışma özelliği ekleme

## Gelecek Geliştirmeler

- Tüm Arap alfabesi harflerinin eklenmesi
- Daha fazla oyun ve etkileşim seçeneği
- İlerleme takibi ve başarı rozetleri
- Ebeveyn kontrol paneli

## Lisans

Bu proje açık kaynak olarak geliştirilmiştir.
