// src/data/index.js
import { homeData } from './homeData';
import { toolsData } from './toolsData';
import { trendsData } from './trendsData';
import { glossaryData } from './glossaryData';

export const siteContent = {
  header: homeData.header,
  hero: homeData.hero,
  cards: homeData.cards,
  bannerCta: homeData.bannerCta,
  toolsPage: toolsData,
  trendsPage: trendsData
};

export { homeData, toolsData, trendsData };