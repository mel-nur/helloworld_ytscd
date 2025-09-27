# Helloworld YTSCD

Bu proje, **Node.js** ve **Express** kullanarak geliştirilmiş basit bir REST API içerir.  
Amaç, `localhost:8000/hello` endpoint'ine bir POST isteği atıldığında kullanıcının adını döndüren bir JSON cevap üretmektir.

## 🚀 Kurulum ve Çalıştırma

### 1. Gerekli Kurulumlar
- [Node.js (LTS)](https://nodejs.org/) ve npm
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/)
- (Opsiyonel) [Docker Desktop](https://www.docker.com/products/docker-desktop)

### 2. Projeyi Klonla
```bash
git clone https://github.com/<GITHUB_USERNAME>/helloworld_ytscd.git
cd helloworld_ytscd
```

### 3. Bağımlılıkları Yükle
```bash
npm install
```

### 4. Sunucuyu Başlat
```bash
npm start
```
Çıktı:
```
Server listening on http://localhost:8000
```

### 5. Postman ile Test Et
- Method: **POST**
- URL: `http://localhost:8000/hello`
- Body (raw JSON):
```json
{
  "name": "Melike Nur Çotak"
}
```

Yanıt:
```json
{
  "message": "Hello, Melike Nur Çotak!"
}
```

## 🐳 Docker Kullanımı (Opsiyonel)
Docker ile çalıştırmak için:

```bash
docker build -t helloworld_ytscd .
docker run -p 8000:8000 --env USER_NAME="Melike Nur Çotak" helloworld_ytscd
```

Sonra yine Postman ile aynı isteği yapabilirsiniz.

## 📂 Proje Yapısı
```
helloworld_ytscd/
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── Dockerfile
└── README.md
```

## 📝 Lisans
MIT
