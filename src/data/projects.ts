import { DATE_LOCALES, type Locale } from '../i18n';
import type { ProjectType } from '../i18n/en';

// `start`/`end` are 'YYYY-MM' (rendered per language, e.g. "Sep 2024" / "Eyl 2024")
// or a bare 'YYYY'.
interface Project {
  start: string;
  end: string;
  title: string;
}

interface ActiveProject extends Project {
  type: ProjectType;
  theme: string;
}

export const activeProjects: ActiveProject[] = [
  {
    start: '2024-09',
    end: '2027-08',
    title: 'Millimeter-Wave and Sub-Terahertz PLLs for Beyond-5G/6G Systems',
    type: 'National',
    theme: 'Frequency synthesis',
  },
  {
    start: '2026-01',
    end: '2029-12',
    title: 'Investigation of Signaling Methods Within CMOS 2.0 Architectures',
    type: 'International',
    theme: 'Emerging architectures',
  },
  {
    start: '2026-06',
    end: '2028-02',
    title: 'MİTHAT: Development of Millimeter/Terahertz Communication Technologies',
    type: 'National',
    theme: 'Future communications',
  },
  {
    start: '2026-03',
    end: '2028-03',
    title: 'Ultra-High-Speed Wired OFDM Chip-to-Chip Links for Data Centers',
    type: 'National',
    theme: 'Wireline systems',
  },
  {
    start: '2026-01',
    end: '2027-07',
    title: 'Real-Time FPGA Implementation of RNN/GRU/LSTM Models for Li-Ion Battery Remaining-Life Estimation',
    type: 'National',
    theme: 'Edge AI hardware',
  },
];

export const completedProjects: Project[] = [
  {
    start: '2022',
    end: '2025',
    title: 'Critical Building Blocks for mmWave and sub-THz CMOS Front-End Transceivers Toward 1 Tb/s Wireless Communications',
  },
  {
    start: '2022',
    end: '2024',
    title: 'ENSPEC6G: Energy- and Spectrally-Efficient sub-THz Transmitter Array Toward Indoor 6G Infrastructure',
  },
  {
    start: '2023',
    end: '2025',
    title: 'Frequency-Tripler-Last Transmitter for Ultra-High-Data-Rate Wireless Communications',
  },
];

const formatMonth = (value: string, locale: Locale) =>
  value.length === 4
    ? value
    : new Date(`${value}-01T00:00:00Z`).toLocaleDateString(DATE_LOCALES[locale], { month: 'short', year: 'numeric', timeZone: 'UTC' });

export const formatPeriod = (project: Project, locale: Locale) =>
  `${formatMonth(project.start, locale)} — ${formatMonth(project.end, locale)}`;
