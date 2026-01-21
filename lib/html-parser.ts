import React from 'react';

export const parseHtmlContent = (htmlString: string): React.ReactNode => {
  // Extract spans with classes for special formatting
  const gradientMatches = htmlString.match(/<span[^>]*class=['"]([^'"]*text-gradient[^'"]*)['"][^>]*>(.*?)<\/span>/gi);
  
  if (gradientMatches && gradientMatches.length > 0) {
    const parts: React.ReactNode[] = [];
    let remainingContent = htmlString;
    
    gradientMatches.forEach((match, index) => {
      const spanContent = match.replace(/<span[^>]*>/gi, '').replace(/<\/span>/gi, '');
      const splitContent = remainingContent.split(match);
      const beforeSpan = splitContent[0].replace(/<[^>]*>/g, '');
      
      if (beforeSpan.trim()) {
        parts.push(beforeSpan.trim());
      }
      
      parts.push(
        React.createElement(
          'span',
          { key: `gradient-${index}`, className: 'text-gradient' },
          spanContent.trim()
        )
      );
      
      remainingContent = splitContent[1] || '';
    });
    
    // Add remaining content
    const remaining = remainingContent.replace(/<[^>]*>/g, '').trim();
    if (remaining) {
      parts.push(' ' + remaining);
    }
    
    return parts;
  }
  
  return htmlString.replace(/<[^>]*>/g, '').trim();
};

export const extractTextContent = (htmlString: string): string => {
  return htmlString.replace(/<[^>]*>/g, '').trim();
};

export const hasGradientText = (htmlString: string): boolean => {
  return htmlString.includes('text-gradient');
};
