import React from 'react';

export default function BrandsMarquee() {
  const brands = [
    'SAMSUNG',
    'LG',
    'WHIRLPOOL',
    'BOSCH',
    'IFB',
    'GODREJ',
    'HAIER',
    'PANASONIC',
    'SIEMENS',
    'VOLTAS BEKO',
    'ONIDA',
    'ELECTROLUX'
  ];

  return (
    <div className="brands-strip">
      <div className="marquee-container">
        {[...brands, ...brands].map((brand, index) => (
          <div key={index} className="marquee-item">
            <span>•</span>
            <span>{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
