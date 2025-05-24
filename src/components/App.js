import React, { useState, useEffect } from 'react';
import '../styles/App.css';

// Ana Uygulama Bileşeni
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [volume, setVolume] = useState(0.8);
  const [harfSeti, setHarfSeti] = useState('ilk5');
  
  // Sayfa değiştirme fonksiyonu
  const navigateTo = (page) => {
    setCurrentPage(page);
    
    // Sayfa değişiminde sesli yönlendirme
    if (page === 'home') {
      playAudio('/assets/audio/hosgeldin.mp3');
    }
  };
  
  // Ses çalma fonksiyonu
  const playAudio = (audioPath) => {
    const audio = new Audio(audioPath);
    audio.volume = volume;
    audio.play().catch(error => console.error('Ses çalma hatası:', error));
  };
  
  // Sayfa ilk yüklendiğinde hoş geldin sesini çal
  useEffect(() => {
    playAudio('/assets/audio/hosgeldin.mp3');
  }, []);
  
  // Sayfa içeriğini belirleme
  const renderContent = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} playAudio={playAudio} />;
      case 'learn':
        return <HarfleriOgrenPage navigateTo={navigateTo} playAudio={playAudio} harfSeti={harfSeti} />;
      case 'game':
        return <HarfOyunuPage navigateTo={navigateTo} playAudio={playAudio} harfSeti={harfSeti} />;
      case 'settings':
        return <AyarlarPage 
          navigateTo={navigateTo} 
          playAudio={playAudio} 
          volume={volume} 
          setVolume={setVolume}
          harfSeti={harfSeti}
          setHarfSeti={setHarfSeti}
        />;
      default:
        return <HomePage navigateTo={navigateTo} playAudio={playAudio} />;
    }
  };
  
  return (
    <div className="app-container">
      {renderContent()}
    </div>
  );
}

// Ana Sayfa Bileşeni
function HomePage({ navigateTo, playAudio }) {
  return (
    <div className="home-page">
      <h1 className="app-title">KUR'AN HARFLERİ</h1>
      
      <div className="button-container">
        <button 
          className="main-button learn-button"
          onClick={() => {
            playAudio('/assets/audio/harfleri_ogren.mp3');
            setTimeout(() => navigateTo('learn'), 1000);
          }}
        >
          <span className="button-icon">📚</span>
          HARFLERİ ÖĞREN
        </button>
        
        <button 
          className="main-button game-button"
          onClick={() => {
            playAudio('/assets/audio/harf_oyunu.mp3');
            setTimeout(() => navigateTo('game'), 1000);
          }}
        >
          <span className="button-icon">🎮</span>
          HARF OYUNU
        </button>
        
        <button 
          className="main-button settings-button"
          onClick={() => {
            playAudio('/assets/audio/ayarlar.mp3');
            setTimeout(() => navigateTo('settings'), 1000);
          }}
        >
          <span className="button-icon">⚙️</span>
          AYARLAR
        </button>
      </div>
      
      <button 
        className="sound-button"
        onClick={() => playAudio('/assets/audio/hosgeldin.mp3')}
      >
        <span className="sound-icon">🔊</span>
      </button>
    </div>
  );
}

// Harfleri Öğren Sayfası Bileşeni
function HarfleriOgrenPage({ navigateTo, playAudio, harfSeti }) {
  const [harfler, setHarfler] = useState([]);
  const [currentHarfIndex, setCurrentHarfIndex] = useState(0);
  
  // Harfleri JSON dosyasından yükle
  useEffect(() => {
    // Public klasöründeki JSON dosyasını fetch ile yükle
    fetch('/data/harfler.json')
      .then(response => response.json())
      .then(data => {
        setHarfler(data.harfler);
        // İlk harfin sesini otomatik çal
        if (data.harfler.length > 0) {
          playAudio(data.harfler[0].sesDosyasi);
        }
      })
      .catch(error => console.error('Harf verisi yükleme hatası:', error));
  }, []);
  
  // Harfler yüklenene kadar yükleniyor göster
  if (harfler.length === 0) {
    return <div className="loading">Yükleniyor...</div>;
  }
  
  const currentHarf = harfler[currentHarfIndex];
  
  // Önceki harfe geç
  const goToPreviousHarf = () => {
    const newIndex = currentHarfIndex > 0 ? currentHarfIndex - 1 : harfler.length - 1;
    setCurrentHarfIndex(newIndex);
    playAudio(harfler[newIndex].sesDosyasi);
  };
  
  // Sonraki harfe geç
  const goToNextHarf = () => {
    const newIndex = (currentHarfIndex + 1) % harfler.length;
    setCurrentHarfIndex(newIndex);
    playAudio(harfler[newIndex].sesDosyasi);
  };
  
  return (
    <div className="learn-page">
      <div className="header">
        <button className="back-button" onClick={() => navigateTo('home')}>
          ← Geri
        </button>
        <h1>HARFLERİ ÖĞREN</h1>
      </div>
      
      <div className="harf-display" onClick={() => playAudio(currentHarf.sesDosyasi)}>
        <div className="harf">{currentHarf.harf}</div>
        <div className="harf-name">{currentHarf.isim}</div>
      </div>
      
      <div className="navigation-buttons">
        <button className="nav-button prev-button" onClick={goToPreviousHarf}>
          ◀ Önceki
        </button>
        <button className="nav-button next-button" onClick={goToNextHarf}>
          Sonraki ▶
        </button>
      </div>
      
      <div 
        className="nesne-display" 
        onClick={() => playAudio(currentHarf.nesneSesDosyasi)}
      >
        <img 
          src={currentHarf.nesneGorseli} 
          alt={currentHarf.nesneTurkce} 
          className="nesne-image"
        />
        <div className="nesne-name">
          {currentHarf.nesne} - {currentHarf.nesneTurkce}
        </div>
      </div>
      
      <div className="sound-controls">
        <button 
          className="sound-button"
          onClick={() => playAudio(currentHarf.sesDosyasi)}
        >
          <span className="sound-icon">🔊</span>
        </button>
        <button 
          className="repeat-button"
          onClick={() => playAudio(currentHarf.sesDosyasi)}
        >
          Tekrar Et
        </button>
      </div>
    </div>
  );
}

// Harf Oyunu Sayfası Bileşeni
function HarfOyunuPage({ navigateTo, playAudio, harfSeti }) {
  const [harfler, setHarfler] = useState([]);
  const [dogruHarfIndex, setDogruHarfIndex] = useState(null);
  const [secenekler, setSecenekler] = useState([]);
  const [sonuc, setSonuc] = useState(null);
  
  // Harfleri JSON dosyasından yükle
  useEffect(() => {
    // Public klasöründeki JSON dosyasını fetch ile yükle
    fetch('/data/harfler.json')
      .then(response => response.json())
      .then(data => {
        setHarfler(data.harfler);
        yeniSoruOlustur(data.harfler);
      })
      .catch(error => console.error('Harf verisi yükleme hatası:', error));
  }, []);
  
  // Yeni soru oluştur
  const yeniSoruOlustur = (harfListesi) => {
    if (!harfListesi || harfListesi.length < 3) return;
    
    // Rastgele doğru harf seç
    const dogruIndex = Math.floor(Math.random() * harfListesi.length);
    setDogruHarfIndex(dogruIndex);
    
    // 3 seçenek oluştur (doğru harf dahil)
    let secenekIndeksleri = [dogruIndex];
    
    while (secenekIndeksleri.length < 3) {
      const rastgeleIndex = Math.floor(Math.random() * harfListesi.length);
      if (!secenekIndeksleri.includes(rastgeleIndex)) {
        secenekIndeksleri.push(rastgeleIndex);
      }
    }
    
    // Seçenekleri karıştır
    secenekIndeksleri = secenekIndeksleri.sort(() => Math.random() - 0.5);
    
    setSecenekler(secenekIndeksleri);
    setSonuc(null);
    
    // Soruyu seslendir
    setTimeout(() => {
      playAudio('/assets/audio/hangi_harf.mp3');
      setTimeout(() => {
        playAudio(harfListesi[dogruIndex].sesDosyasi);
      }, 1500);
    }, 500);
  };
  
  // Cevap kontrolü
  const cevapKontrol = (secilenIndex) => {
    const dogruMu = harfler[secilenIndex].id === harfler[dogruHarfIndex].id;
    
    if (dogruMu) {
      setSonuc('dogru');
      playAudio('/assets/audio/dogru_cevap.mp3');
      // Yıldız animasyonu ve sevinç sesi burada eklenir
      
      // 2 saniye sonra yeni soru
      setTimeout(() => {
        yeniSoruOlustur(harfler);
      }, 2000);
    } else {
      setSonuc('yanlis');
      playAudio('/assets/audio/tekrar_dene.mp3');
    }
  };
  
  // Harfler yüklenene kadar yükleniyor göster
  if (harfler.length === 0 || secenekler.length === 0) {
    return <div className="loading">Yükleniyor...</div>;
  }
  
  return (
    <div className="game-page">
      <div className="header">
        <button className="back-button" onClick={() => navigateTo('home')}>
          ← Geri
        </button>
        <h1>HARF OYUNU</h1>
      </div>
      
      <div className="question-area">
        <div className="question">
          Hangi harf {harfler[dogruHarfIndex].isim}'tir?
        </div>
      </div>
      
      <div className="options-container">
        {secenekler.map((harfIndex, index) => (
          <button 
            key={index}
            className={`option-button ${
              sonuc === 'dogru' && harfler[harfIndex].id === harfler[dogruHarfIndex].id
                ? 'correct'
                : ''
            }`}
            onClick={() => cevapKontrol(harfIndex)}
            disabled={sonuc === 'dogru'}
          >
            {harfler[harfIndex].harf}
          </button>
        ))}
      </div>
      
      <div className={`result-area ${sonuc || ''}`}>
        {sonuc === 'dogru' && (
          <div className="correct-answer">
            <span className="star-animation">⭐⭐⭐</span>
            <div>Harika! Doğru cevap!</div>
          </div>
        )}
        {sonuc === 'yanlis' && (
          <div className="wrong-answer">
            Tekrar dene!
          </div>
        )}
      </div>
      
      <div className="sound-controls">
        <button 
          className="sound-button"
          onClick={() => {
            playAudio('/assets/audio/hangi_harf.mp3');
            setTimeout(() => {
              playAudio(harfler[dogruHarfIndex].sesDosyasi);
            }, 1500);
          }}
        >
          <span className="sound-icon">🔊</span>
        </button>
        <button 
          className="repeat-button"
          onClick={() => playAudio(harfler[dogruHarfIndex].sesDosyasi)}
        >
          Soruyu Tekrarla
        </button>
      </div>
    </div>
  );
}

// Ayarlar Sayfası Bileşeni
function AyarlarPage({ navigateTo, playAudio, volume, setVolume, harfSeti, setHarfSeti }) {
  // Ses seviyesi değişimi
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };
  
  // Harf seti değişimi
  const handleHarfSetiChange = (e) => {
    setHarfSeti(e.target.value);
  };
  
  // Ayarları kaydet
  const saveSettings = () => {
    // Gerçek uygulamada localStorage veya başka bir depolama yöntemi kullanılabilir
    playAudio('/assets/audio/ayarlar_kaydedildi.mp3');
    setTimeout(() => navigateTo('home'), 1000);
  };
  
  return (
    <div className="settings-page">
      <div className="header">
        <button className="back-button" onClick={() => navigateTo('home')}>
          ← Geri
        </button>
        <h1>AYARLAR</h1>
      </div>
      
      <div className="settings-container">
        <div className="setting-group">
          <h2>SES SEVİYESİ</h2>
          <div className="volume-control">
            <span className="volume-icon low">🔈</span>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.1" 
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
            <span className="volume-icon high">🔊</span>
          </div>
        </div>
        
        <div className="setting-group">
          <h2>HARF SETİ SEÇİMİ</h2>
          <div className="harf-set-options">
            <label className="harf-set-option">
              <input 
                type="radio" 
                name="harfSeti" 
                value="ilk5" 
                checked={harfSeti === 'ilk5'}
                onChange={handleHarfSetiChange}
              />
              İlk 5 harf (ا ب ت ث ج)
            </label>
            
            <label className="harf-set-option">
              <input 
                type="radio" 
                name="harfSeti" 
                value="ilk10" 
                checked={harfSeti === 'ilk10'}
                onChange={handleHarfSetiChange}
              />
              İlk 10 harf
            </label>
            
            <label className="harf-set-option">
              <input 
                type="radio" 
                name="harfSeti" 
                value="tum" 
                checked={harfSeti === 'tum'}
                onChange={handleHarfSetiChange}
              />
              Tüm harfler
            </label>
          </div>
        </div>
        
        <button className="save-button" onClick={saveSettings}>
          KAYDET
        </button>
        
        <div className="parent-info">
          <p>Bu ayarlar çocuğunuzun öğrenme seviyesine göre düzenlenebilir.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
