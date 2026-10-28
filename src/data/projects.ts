import { DATE_LOCALES, type Locale } from '../i18n';
import type { ProjectType } from '../i18n/en';

// `start`/`end` are 'YYYY-MM' (rendered per language, e.g. "Sep 2024" / "Eyl 2024")
// or a bare 'YYYY'. `titleTr`/`themeTr` are the Turkish versions; if one is
// missing the English text is shown on /tr/ pages.
interface Project {
  start: string;
  end: string;
  title: string;
  titleTr?: string;
}

interface ActiveProject extends Project {
  type: ProjectType;
  theme: string;
  themeTr?: string;
}

export const activeProjects: ActiveProject[] = [
  {
    start: '2024-09',
    end: '2027-08',
    title: 'Millimeter-Wave and Sub-Terahertz PLLs for Beyond-5G/6G Systems',
    titleTr: '5G Ötesi/6G Sistemler için Milimetre Dalga ve Alt-Terahertz PLL’ler',
    type: 'National',
    theme: 'Frequency synthesis',
    themeTr: 'Frekans sentezi',
  },
  {
    start: '2026-01',
    end: '2029-12',
    title: 'Investigation of Signaling Methods Within CMOS 2.0 Architectures',
    titleTr: 'CMOS 2.0 Mimarilerinde Sinyalleşme Yöntemlerinin İncelenmesi',
    type: 'International',
    theme: 'Emerging architectures',
    themeTr: 'Yeni nesil mimariler',
  },
  {
    start: '2026-06',
    end: '2028-02',
    title: 'MİTHAT: Development of Millimeter/Terahertz Communication Technologies',
    titleTr: 'MİTHAT: Milimetre/Terahertz Haberleşme Teknolojilerinin Geliştirilmesi',
    type: 'National',
    theme: 'Future communications',
    themeTr: 'Geleceğin haberleşmesi',
  },
  {
    start: '2026-03',
    end: '2028-03',
    title: 'Ultra-High-Speed Wired OFDM Chip-to-Chip Links for Data Centers',
    titleTr: 'Veri Merkezleri için Ultra Yüksek Hızlı Kablolu OFDM Çipten Çipe Bağlantılar',
    type: 'National',
    theme: 'Wireline systems',
    themeTr: 'Kablolu sistemler',
  },
  {
    start: '2026-01',
    end: '2027-07',
    title: 'Real-Time FPGA Implementation of RNN/GRU/LSTM Models for Li-Ion Battery Remaining-Life Estimation',
    titleTr: 'Li-İyon Bataryalarda Kalan Ömür Tahmini için RNN/GRU/LSTM Modellerinin Gerçek Zamanlı FPGA Uygulaması',
    type: 'National',
    theme: 'Edge AI hardware',
    themeTr: 'Uç yapay zekâ donanımı',
  },
];

export const completedProjects: Project[] = [
  {
    start: '2022',
    end: '2025',
    title: 'Critical Building Blocks for mmWave and sub-THz CMOS Front-End Transceivers Toward 1 Tb/s Wireless Communications',
    titleTr: '1 Tb/s Kablosuz Haberleşmeye Yönelik Milimetre Dalga ve Alt-THz CMOS Ön Uç Alıcı-Vericiler için Kritik Yapı Taşları',
  },
  {
    start: '2022',
    end: '2024',
    title: 'ENSPEC6G: Energy- and Spectrally-Efficient sub-THz Transmitter Array Toward Indoor 6G Infrastructure',
    titleTr: 'ENSPEC6G: İç Mekân 6G Altyapısına Yönelik Enerji ve Spektrum Verimli Alt-THz Verici Dizisi',
  },
  {
    start: '2023',
    end: '2025',
    title: 'Frequency-Tripler-Last Transmitter for Ultra-High-Data-Rate Wireless Communications',
    titleTr: 'Ultra Yüksek Veri Hızlı Kablosuz Haberleşme için Son Katı Frekans Üçleyici Olan Verici',
  },
];

const formatMonth = (value: string, locale: Locale) =>
  value.length === 4
    ? value
    : new Date(`${value}-01T00:00:00Z`).toLocaleDateString(DATE_LOCALES[locale], { month: 'short', year: 'numeric', timeZone: 'UTC' });

export const formatPeriod = (project: Project, locale: Locale) =>
  `${formatMonth(project.start, locale)} — ${formatMonth(project.end, locale)}`;

// `fallback` marks English text shown on a Turkish page (wrap it in lang="en").
export const localizeProject = (project: Project & { theme?: string; themeTr?: string }, locale: Locale) => {
  const turkish = locale === 'tr';
  return {
    title: (turkish && project.titleTr) || project.title,
    theme: (turkish && project.themeTr) || project.theme,
    fallback: turkish && !project.titleTr,
  };
};
