import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-snap-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
          La Preuve Visuelle
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            className="comparison-swiper"
            style={{
              '--swiper-navigation-color': '#FFFC00',
              '--swiper-pagination-color': '#FFFC00',
            } as React.CSSProperties}
          >
            {/* Slide 1 - Le Problème */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center min-h-[500px]">
                <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-6 text-center">
                  ❌ L'Export Gratuit de Snapchat
                </h3>
                <div className="w-full max-w-4xl mb-4 rounded-lg overflow-hidden border-2 border-red-500/30 shadow-2xl">
                  <img 
                    src="./chaos.png" 
                    alt="Dossier en vrac avec fichiers illisibles" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-gray-400 text-center leading-relaxed text-lg max-w-2xl">
                  Des noms de fichiers illisibles et des dates réinitialisées. Retrouver un souvenir est impossible.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 2 - Étape 1 */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center min-h-[500px]">
                <h3 className="text-2xl md:text-3xl font-bold text-snap-yellow mb-6 text-center">
                  ✅ Étape 1 : Un dossier unique pour tout centraliser
                </h3>
                <div className="w-full max-w-4xl mb-4 rounded-lg overflow-hidden border-2 border-yellow-500/30 shadow-2xl">
                  <img 
                    src="./resultat_01.png" 
                    alt="Dossier principal SnapSafe_Work_In_Progress" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 - Étape 2 */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center min-h-[500px]">
                <h3 className="text-2xl md:text-3xl font-bold text-snap-yellow mb-6 text-center">
                  ✅ Étape 2 : Vos souvenirs triés par année
                </h3>
                <div className="w-full max-w-4xl mb-4 rounded-lg overflow-hidden border-2 border-yellow-500/30 shadow-2xl">
                  <img 
                    src="./resultat_02.png" 
                    alt="Sous-dossiers par année" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 - Étape 3 */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center min-h-[500px]">
                <h3 className="text-2xl md:text-3xl font-bold text-snap-yellow mb-6 text-center">
                  ✅ Étape 3 : Une organisation parfaite par mois
                </h3>
                <div className="w-full max-w-4xl mb-4 rounded-lg overflow-hidden border-2 border-yellow-500/30 shadow-2xl">
                  <img 
                    src="./resultat_03.png" 
                    alt="Sous-dossiers par mois" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 5 - Étape 4 */}
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center min-h-[500px]">
                <h3 className="text-2xl md:text-3xl font-bold text-snap-yellow mb-6 text-center">
                  ✅ Étape 4 : Chaque fichier retrouve son nom et sa date
                </h3>
                <div className="w-full max-w-4xl mb-4 rounded-lg overflow-hidden border-2 border-yellow-500/30 shadow-2xl">
                  <img 
                    src="./resultat_04.png" 
                    alt="Fichiers finaux avec noms clairs" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <style>{`
        /* Container principal */
        .comparison-swiper {
          padding-bottom: 50px;
          width: 100%;
          position: relative;
        }
        
        /* Wrapper Swiper - gestion du positionnement */
        .comparison-swiper .swiper-wrapper {
          position: relative;
          width: 100%;
          height: auto;
        }
        
        /* Styles critiques pour éviter la superposition - toutes les slides sont cachées par défaut */
        .comparison-swiper .swiper-slide {
          width: 100% !important;
          height: auto !important;
          opacity: 0 !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          transition: opacity 0.6s ease-in-out !important;
          pointer-events: none !important;
        }
        
        /* Seule la slide active est visible */
        .comparison-swiper .swiper-slide-active {
          opacity: 1 !important;
          position: relative !important;
          pointer-events: auto !important;
        }
        
        /* Contenu de chaque slide */
        .comparison-swiper .swiper-slide > div {
          width: 100%;
        }
        
        /* Navigation buttons */
        .comparison-swiper .swiper-button-next,
        .comparison-swiper .swiper-button-prev {
          background-color: rgba(255, 252, 0, 0.1);
          backdrop-filter: blur(10px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid rgba(255, 252, 0, 0.3);
          transition: all 0.3s ease;
          z-index: 10;
        }
        .comparison-swiper .swiper-button-next:hover,
        .comparison-swiper .swiper-button-prev:hover {
          background-color: rgba(255, 252, 0, 0.2);
          border-color: rgba(255, 252, 0, 0.5);
          transform: scale(1.1);
        }
        .comparison-swiper .swiper-button-next::after,
        .comparison-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
        
        /* Pagination */
        .comparison-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 30px;
          bottom: auto !important;
        }
        .comparison-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 252, 0, 0.5);
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .comparison-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #FFFC00;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Comparison;