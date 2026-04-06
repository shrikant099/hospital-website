// src/utils/replacePlaceholders.js
export function replacePlaceholders(text, area, cityName) {
    return text
      .replace(/\{\{area\.name\}\}/g, area)
      .replace(/\{\{cityName\}\}/g, cityName)
      .replace(/\{area\.name\}/g, area)       // inconsistent braces handle
      .replace(/\{city_part\}/g, cityName)    // whyItMatters mein yeh bhi hai
      .replace(/\{area\}/g, area)
      .replace(/\{\{city\.name\}\}/g, cityName);
  }