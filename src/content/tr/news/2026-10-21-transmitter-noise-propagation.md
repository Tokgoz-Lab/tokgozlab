---
title: "Verici Sinyale Gürültü Kattığında"
summary: "Tokgöz Lab araştırmacısı Mahir Burak Usta’nın ortak yazarı olduğu bir çalışma, vericinin kendi elektroniğinden kaynaklanan gürültünün kablosuz bağlantı performansını hangi durumlarda sınırlayabileceğini ve mühendislerin bu gürültüyü nasıl hesaba katabileceğini incelemektedir."
imageAlt: "Bir milimetre dalga bağlantısının sistem modeli: verici gürültüsü (1), atmosferik gürültü (2) ve alıcının ısıl gürültüsü (3) ile birlikte alıcıya ulaşır"
linkText: "Makaleyi okuyun"
---

Kablosuz bir alıcıya hiçbir zaman tamamen temiz bir sinyal ulaşmaz. Alıcı, alması amaçlanan bilginin yanı sıra gürültü de toplar. Mühendislerin bir haberleşme bağlantısını tasarlarken bu gürültüyü tahmin etmesi gerekir, çünkü gürültü sistemin veriyi ne kadar güvenilir biçimde taşıyabileceğini etkiler. Ancak bu gürültünün bir kısmı bağlantının diğer ucunda, yani vericinin kendi içinde ortaya çıkar.

IEEE Open Journal of the Communications Society dergisinde yayımlanan ve ilk yazarı [Mahir Burak Usta](/tr/team/mahir-burak-usta/) olan bir makale, kablosuz sistem tasarımının çoğu zaman basitleştirilen bu yönünü araştırmaktadır. "[Transmitter Noise Propagation in Millimeter-Wave and Sub-Terahertz: From Limits to Design Guidelines](/tr/publications/2026-usta-transmitter-noise-propagation-mmwave-subthz/)" başlıklı çalışma, verici elektroniğinin ürettiği gürültünün iletilmek istenen sinyalle birlikte nasıl yayıldığını ve alıcıyı nasıl etkilediğini incelemektedir.

Milimetre dalga ve alt-terahertz sistemler çok yüksek frekanslarda çalışır. Mühendisler bu sistemlerin performansını tahmin ederken genellikle alıcının içinde oluşan gürültüyü açıkça hesaba katar, verici gürültüsünü ise daha geniş bir tasarım payının parçası olarak değerlendirir. Bu çalışma, söz konusu basitleştirmenin bağlantı kalitesi üzerindeki anlamlı bir sınırlamayı hangi durumlarda gözden kaçırabileceğini sorgulamaktadır.

Araştırmacılar, vericide üretilen gürültüyü haberleşme bağlantısı boyunca izleyen analitik bir çerçeve geliştirmiştir. Bu çerçevede vericinin elektronik katları, anten kazançları, sinyalin yayılması, atmosferik soğurma ve çalışma bant genişliği hesaba katılır. Bu etkenler birlikte, alıcıya ne kadar verici gürültüsü ulaştığını belirler. Bu miktar alıcıda zaten bulunan gürültüyle karşılaştırıldığında, verici gürültüsünün sinyal-gürültü oranını ne kadar güçlü etkilediği görülür; sinyal-gürültü oranı, yararlı sinyalin arka plan gürültüsünden ne kadar net biçimde ayrıştığının bir ölçüsüdür.

Bulgular, verici gürültüsünün önemli olup olmadığını tek başına mesafenin belirlemediğini göstermektedir. İncelenen ve düşük kazançlı antenlerin kullanıldığı kısa menzilli yapılandırmada öngörülen sinyal-gürültü oranı kaybı, modelin geçerli çalışma aralığı içinde, milimetre mertebesindeki mesafelerde yaklaşık 13–18 desibele ulaşmıştır. Etki ardından hızla azalmış ve değerlendirilen dört frekans için 10 santimetre içinde 0,1 desibelin altına düşmüştür.

Daha uzun bağlantılarda ise tablo farklıdır. İncelenen 100 metrelik ve 1 kilometrelik yapılandırmalarda, sinyalle birlikte verici gürültüsünü de güçlendiren yüksek kazançlı antenler kullanılmıştır. Bu nedenle verici gürültüsü, özellikle 60 ve 140 gigahertz gibi daha düşük frekanslarda, yine anlamlı bir etki yaratmıştır; bu yapılandırmalarda 1 kilometredeki kayıp 100 metredekinden bile büyük olmuştur. Daha yüksek frekanslarda etki genellikle küçük kalmış, 1 kilometrede ise genel tabloda başlıca sınırlayıcı etken atmosferik etkiler olmaya devam etmiştir.

Bildirilen tüm kayıplar, kendisi hiç gürültü eklemeyen idealleştirilmiş bir alıcıya göre hesaplanmıştır; gerçek bir alıcıda göreli etki daha küçük olacaktır. Sonuçlar ayrıca donanıma, antenlere, frekansa ve atmosferik koşullara bağlıdır; her bağlantı için geçerli evrensel bir kayıp anlamına gelmez.

Çalışma ayrıca, verici gürültüsünün hangi durumlarda açıkça dikkate alınması gerektiğini belirlemek için yol kaybı eşiği olarak ifade edilen analitik bir ölçüt türetmektedir. Bu ölçüt, mühendislere verici gürültüsünün önemini tasarım sürecinin erken bir aşamasında değerlendirme ve donanım ile bağlantı yapılandırması konusunda daha bilinçli seçimler yapma olanağı sunar.

## Mahir Burak Usta hakkında

[Mahir Burak Usta](/tr/team/mahir-burak-usta/), Sabancı Üniversitesi’nde Elektronik Mühendisliği doktora öğrencisidir; aynı alandaki lisans derecesini de 2022 yılında bu üniversiteden almıştır. IEEE Lisansüstü Öğrenci Üyesidir. Araştırma ilgi alanları arasında milimetre dalga ve alt-terahertz sistemlerde gürültü, UAV’ler arası haberleşme ve yeniden yapılandırılabilir anten dizileri yer almaktadır. Haberde tanıtılan çalışmanın ilk yazarıdır.

## Yayın

Mahir Burak Usta, Didem Aydoğan, Evgenii Vinogradov, Mohammad Shahmoradi, Eduard Alarcón, Sergi Abadal, and Korkut Kaan Tokgöz. "Transmitter Noise Propagation in Millimeter-Wave and Sub-Terahertz: From Limits to Design Guidelines." *IEEE Open Journal of the Communications Society*, vol. 7, pp. 11132–11153, 2026.

[Makaleyi okuyun](https://doi.org/10.1109/OJCOMS.2026.3730694)
