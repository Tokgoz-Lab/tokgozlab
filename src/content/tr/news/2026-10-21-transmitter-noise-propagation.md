---
title: "Verici Sinyale Gürültü Kattığında"
summary: "Mahir Burak Usta, Tokgöz Lab’deki çalışma arkadaşları ve UPC bünyesindeki N3Cat’ten araştırmacılarla birlikte, vericinin kendi elektroniğinde oluşan gürültünün milimetre dalga ve alt-terahertz kablosuz bağlantıların performansını hangi durumlarda sınırlayabileceğini ortaya koydu."
imageAlt: "Vericinin kendi elektronik katlarında oluşan gürültü, iletilmek istenen sinyalle birlikte alıcıya ulaşır ve ikisi de yol boyunca zayıflar. Alıcıda bu verici gürültüsü, atmosferden gelen gürültüye ve alıcının kendi gürültüsüne eklenir."
linkText: "Makaleyi okuyun"
---

*Şekil 1. Vericinin kendi elektronik katlarında oluşan gürültü, iletilmek istenen sinyalle birlikte alıcıya ulaşır ve ikisi de yol boyunca zayıflar. Alıcıda bu verici gürültüsü, atmosferden gelen gürültüye ve alıcının kendi gürültüsüne eklenir.*

Laboratuvarımızın doktora öğrencisi [Mahir Burak Usta](/tr/team/mahir-burak-usta/), Tokgöz Lab’deki çalışma arkadaşları ve Universitat Politècnica de Catalunya (UPC) bünyesindeki Nanonetworking Center in Catalunya (N3Cat) araştırmacılarıyla birlikte, vericinin kendi elektroniğinde oluşan gürültünün milimetre dalga ve alt-terahertz kablosuz bağlantıların performansını hangi durumlarda sınırlayabileceğini gösterdi. Çalışma, bu gürültünün genel bir tasarım payının içinde bırakılmak yerine ne zaman açıkça modellenmesi gerektiğini mühendislere söyleyen analitik bir ölçüt sunuyor.

Kablosuz bir alıcıya hiçbir zaman tamamen temiz bir sinyal ulaşmaz. Alıcı, alması amaçlanan bilginin yanı sıra gürültü de toplar. Mühendislerin bir haberleşme bağlantısını tasarlarken bu gürültüyü tahmin etmesi gerekir, çünkü gürültü sistemin veriyi ne kadar güvenilir biçimde taşıyabileceğini etkiler. Ancak bu gürültünün bir kısmı bağlantının diğer ucunda, yani vericinin kendi içinde ortaya çıkar.

Milimetre dalga ve alt-terahertz sistemler çok yüksek frekanslarda çalışır ve gelecekteki kablosuz ağlarda merkezi bir rol oynaması beklenir. Mühendisler bu sistemlerin performansını tahmin ederken genellikle alıcının içinde oluşan gürültüyü açıkça hesaba katar, verici gürültüsünü ise daha geniş bir tasarım payının parçası olarak değerlendirir. Çalışmanın ilk yazarı Usta, “Bu payın ne zaman yeterli olduğunu, verici gürültüsünün ne zaman kendi başına bir büyüklük olarak ele alınması gerektiğini öğrenmek istedik” diyor.

Ekip, vericide üretilen gürültüyü haberleşme bağlantısı boyunca izleyen analitik bir çerçeve geliştirdi. Bu çerçevede vericinin elektronik katları, anten kazançları, sinyalin yayılması, atmosferik soğurma ve çalışma bant genişliği hesaba katılıyor. Bu etkenler birlikte, alıcıya ne kadar verici gürültüsü ulaştığını belirliyor. Bu miktar alıcıda zaten bulunan gürültüyle karşılaştırıldığında, verici gürültüsünün sinyal-gürültü oranını ne kadar güçlü etkilediği görülüyor; sinyal-gürültü oranı, yararlı sinyalin arka plan gürültüsünden ne kadar net biçimde ayrıştığının bir ölçüsü.

Bulgular, verici gürültüsünün önemli olup olmadığını tek başına mesafenin belirlemediğini gösteriyor. İki cihaz birbirinden yalnızca birkaç milimetre uzaktaysa ve basit, düşük kazançlı antenler kullanıyorsa, verici gürültüsü alıcıya ulaşmadan önce yeterince zayıflamıyor. Çalışmadaki bir örnekte, cihazlar arasında bir milimetre mesafe varken alıcıdaki gürültü, verici gürültüsünü yok sayan standart bir hesabın öngördüğünden yaklaşık 40 kat fazlaydı. Bunun sonucunda bağlantı, beklenenden kabaca yüzde 40 daha az veri taşıyabiliyordu. Etki mesafeyle hızla azalıyor ve cihazlar arasında yaklaşık on santimetre olduğunda ihmal edilebilir hale geliyor. Usta, “Çok kısa bağlantılarda güçlü bir sinyal sağlayan düşük yol kaybı, verici gürültüsünün de geçmesine izin veriyor” diye açıklıyor. “Bu durumda bağlantıyı vericiden gelen gürültü sınırlıyor, bu yüzden tasarım çabasının vericinin gürültü performansına kayması gerekiyor.”

Daha uzun bağlantılarda ise tablo farklı. Çalışmada incelenen ve bir kilometreye kadar uzanan bağlantılarda, sinyalle birlikte verici gürültüsünü de güçlendiren yüksek kazançlı antenler kullanıldı. Bu nedenle ek gürültü ortadan kalkmadı: bir kilometrelik bir bağlantıdaki örnekte, alıcıdaki gürültü beklenenden hâlâ yaklaşık dört kat fazlaydı. Etki, incelenen düşük frekanslarda en güçlüydü; daha yüksek frekanslarda genellikle küçük kaldı.

Bu tahminler, kendisi hiç gürültü eklemeyen idealleştirilmiş bir alıcıyı varsayıyor; gerçek bir alıcıda göreli etki daha küçük olacaktır. Sonuçlar ayrıca donanıma, antenlere, frekansa ve atmosferik koşullara bağlı; her bağlantı için geçerli evrensel bir kayıp anlamına gelmiyor.

Çalışmada ortaya konan ölçüt bir yol kaybı eşiği biçiminde: verici gürültüsünün ihmal edilebilir kalması için sinyalin yol boyunca en az ne kadar zayıflaması gerektiğini gösteriyor. Bu ölçüt, mühendislere verici gürültüsünün önemini tasarım sürecinin erken bir aşamasında değerlendirme ve donanım ile bağlantı yapılandırması konusunda daha bilinçli seçimler yapma olanağı sunuyor. Bulgular özellikle, verici gürültüsünü dışarıda bırakan standart bir hesabın ulaşılabilir performansı sistematik olarak olduğundan yüksek tahmin ettiği çipten çipe ve karttan karta kablosuz bağlantılar gibi yeni ortaya çıkan çok kısa menzilli bağlantılar ile milimetre dalga bandının alt ucundaki yüksek kazançlı ana taşıma (backhaul) bağlantıları için önem taşıyor.

Çalışma, bu konuda Tokgöz Lab ile Barselona’daki UPC bünyesinde yer alan N3Cat grubu arasındaki ortak çalışmanın başlangıcı niteliğinde; N3Cat’ten Evgenii Vinogradov, Mohammad Shahmoradi, Eduard Alarcón ve Sergi Abadal makalenin ortak yazarları arasında. Çalışma aynı zamanda Usta’nın Sabancı Üniversitesi ile UPC arasındaki çift doktora derecesi yolundaki ilk adımı.

Yöntem ve sonuçlar, IEEE Open Journal of the Communications Society dergisinde açık erişimli olarak yayımlanan bir makalede raporlandı. Analiz çerçevesini kapsayan bir patent başvurusu da Türk Patent ve Marka Kurumu’na yapıldı.

## Mahir Burak Usta hakkında

Mahir Burak Usta, Sabancı Üniversitesi’nde Elektronik Mühendisliği doktora öğrencisidir; Elektronik Mühendisliği lisans derecesini de 2022 yılında bu üniversiteden almıştır. IEEE Lisansüstü Öğrenci Üyesidir. Araştırma ilgi alanları arasında milimetre dalga ve alt-terahertz sistemlerde gürültü, İHA’lar arası haberleşme ve yeniden yapılandırılabilir anten dizileri yer almaktadır.

## Mahir’in Sabancı Üniversitesi’ndeki yayınları

### Dergi makaleleri

1. M. B. Usta, D. Aydoğan, E. Vinogradov, M. Shahmoradi, E. Alarcón, S. Abadal, and K. K. Tokgöz, “[Transmitter Noise Propagation in Millimeter-Wave and Sub-Terahertz: From Limits to Design Guidelines](/tr/publications/2026-usta-transmitter-noise-propagation-mmwave-subthz/),” *IEEE Open Journal of the Communications Society*, vol. 7, pp. 11132–11153, 2026. DOI: [10.1109/OJCOMS.2026.3730694](https://doi.org/10.1109/OJCOMS.2026.3730694)
2. M. B. Usta, M. Bafarassat, M. Erdem, Ö. Gürbüz, A. Saeed, K. K. Tokgöz, and K. Qaraqe, “[Transformer-Driven Beam Control via Reconfigurable Antenna Arrays for Terahertz UAV Communications](/tr/publications/2026-usta-transformer-driven-beam-contro/),” *IEEE Open Journal of the Communications Society*, vol. 7, pp. 2714–2732, 2026. DOI: [10.1109/OJCOMS.2026.3674589](https://doi.org/10.1109/OJCOMS.2026.3674589)

### Konferans bildirileri

3. M. B. Usta, D. Aydoğan, E. Vinogradov, S. Abadal, and K. K. Tokgöz, “Array-Correlated Noise Floor Analysis for Monostatic Sub-Terahertz Integrated Sensing and Communication,” *IEEE Conference on Integrated Sensing and Communications (ISAC)*, Lizbon, Portekiz, Kasım 2026 (kabul edildi).
4. M. B. Usta, M. Erdem, A. Saeed, Ö. Gürbüz, K. K. Tokgöz, and M.-S. Alouini, “[Adaptive Beamwidth Control for Terahertz Drone Communications: A Row-Selective Antenna Array Approach](/tr/publications/2025-usta-adaptive-beamwidth-control-for/),” *IEEE 36th International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC)*, İstanbul, Türkiye, Eylül 2025, pp. 1–6. DOI: [10.1109/PIMRC62392.2025.11274612](https://doi.org/10.1109/PIMRC62392.2025.11274612)

## Kaynak

**Yazarlar:** Mahir Burak Usta¹, Didem Aydoğan¹, Evgenii Vinogradov², Mohammad Shahmoradi², Eduard Alarcón², Sergi Abadal², Korkut Kaan Tokgöz¹

**Makalenin özgün başlığı:** Transmitter Noise Propagation in Millimeter-Wave and Sub-Terahertz: From Limits to Design Guidelines

**Dergi:** IEEE Open Journal of the Communications Society, vol. 7, pp. 11132–11153, 2026

**DOI:** [10.1109/OJCOMS.2026.3730694](https://doi.org/10.1109/OJCOMS.2026.3730694)

**Kurumlar:**\
¹ Mühendislik ve Doğa Bilimleri Fakültesi, Sabancı Üniversitesi, İstanbul, Türkiye\
² Nanonetworking Center in Catalunya (N3Cat), Universitat Politècnica de Catalunya, Barselona, İspanya

[Makaleyi okuyun](https://doi.org/10.1109/OJCOMS.2026.3730694)
