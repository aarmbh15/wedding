import React from 'react';

// Data extracted from the provided gallery section
const galleryImages = [
  { id: 1, src: "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1e4a2f03-f9c4-4457-9f79-723e33ac4a7d/SUHA0838+2233.jpg", alt: "SUHA0838 2233.jpg", pos: "52% 88%" },
  { id: 2, src: "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/4a00dce3-bd1d-4d69-b5f5-1284090047eb/HB_22749+65.jpg", alt: "HB_22749 65.jpg", pos: "50% 50%" },
  { id: 3, src: "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/7f12f49f-5beb-40be-b559-d3c8bcb5dbce/AYUS5656+copy.jpg", alt: "AYUS5656 copy.jpg", pos: "50% 50%" },
  { id: 4, src: "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c581f840-0f23-425d-907a-a2bad1bae4e6/SIDD1017+copy.jpg", alt: "SIDD1017 copy.jpg", pos: "50% 50%" },
  { id: 5, src: "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/2759ceb3-a789-49bf-9721-62146f59143d/VKR62551-Edit+8878+copy.jpg", alt: "VKR62551-Edit 8878 copy.jpg", pos: "50% 50%" },
  { id: 6, src: "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/3d043205-e2b0-463b-ab84-fd859165d0e8/Kiara+Advani+and+Sidharth+Malhotra+wedding+copy.jpg", alt: "Kiara Sid wedding", pos: "50% 50%" },
  { id: 7, src: "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/66ef1ca7-da97-490a-9afe-3f6b2fbc056c/Bridelan+Paris+-+Anamika+Knanna+Harper%27s+Bazaar+6+copy.jpg", alt: "Harper's Bazaar Anamika Khanna", pos: "50% 50%" },
  { id: 8, src: "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/33dad4d2-60cc-4e25-a215-1bf8a33a7959/LONU2628+copy.jpg", alt: "LONU2628 copy.jpg", pos: "50% 50%" },
  { id: 9, src: "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/060230ca-92ca-4998-b4c5-df9a9a7eaf9d/0H1A6527+copy+3.jpg", alt: "0H1A6527 copy 3.jpg", pos: "50% 50%" },
  { id: 10, src: "https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/67baa040-63bf-4b7e-bfc0-a4662b919690/AYUS5834+Post+01.jpg", alt: "AYUS5834 Post 01.jpg", pos: "50% 50%" }
];

const HouseOnTheClouds = () => {
  return (
    <div id="siteWrapper" className="clearfix site-wrapper">
      
      {/* Main Content Sections */}
      <main id="page" className="container" role="main">
        <article className="sections">
          
          {/* Hero Section */}
          <section className="page-section full-bleed-section black" data-section-id="65c3cdbe883b895b01e87625">
            <div className="section-background">
              <div className="section-background-content">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/3b5087c6-a3ed-4a4e-9617-8332c38ca134/SIDD8608+full+2.jpg" 
                  alt="Hero Background" 
                  style={{ objectPosition: '49.29% 25.60%', objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className="content-wrapper">
              <div className="content">
                <div className="fluid-engine"></div>
              </div>
            </div>
          </section>

          {/* About / Award Section */}
          <section className="page-section white has-section-divider" data-section-id="64f772c5d0b5be6fe318dd51">
            <div className="content-wrapper">
              <div className="content">
                <div className="sqs-html-content">
                  <p>Considered to be the epitome of Modern Photography and Filmmaking, HOTC has transformed the Indian Wedding landscape on a regular basis.</p>
                  <p>Awarded as the Wedding Filmmaker of the year for four consecutive years at the Weddingsutra awards.</p>
                </div>
                <div className="awards-image">
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/c5ad41a2-0753-4573-a2a1-ca5eeb7457c1/all%2Bawards+copy.png" 
                    alt="Awards" 
                    style={{ width: '100%' }} 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section - Updated with dynamic mapping */}
          <section className="gallery-section section-height--medium" data-section-id="6731024a4888ad0ade5bc9cf">
            <div className="gallery-grid gallery-grid--layout-grid">
              <div 
                className="gallery-grid-wrapper" 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(5, 1fr)', 
                  gap: '3px' 
                }}
              >
                {galleryImages.map((image) => (
                  <figure className="gallery-grid-item" key={image.id}>
                    <div className="gallery-grid-item-wrapper">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover', 
                          objectPosition: image.pos 
                        }}
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
};

export default HouseOnTheClouds;