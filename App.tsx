import React from 'react';
import StickyBanner from './components/StickyBanner';
import Comparison from './components/Comparison';
import { Icons, FAQ_ITEMS, LEMON_SQUEEZY_URL } from './constants';

const App: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <StickyBanner />

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-snap-yellow/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1 text-yellow-400 text-sm font-semibold mb-6">
            <Icons.Alert />
            <span>Attention : Vos souvenirs sont en danger</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Snapchat ne vous rendra pas vos souvenirs. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Juste des fichiers en désordre et sans date.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Leur export officiel casse les dates, mélange tout et plante. <span className="text-white font-bold">SnapSafe</span> est le seul outil qui télécharge <span className="underline decoration-yellow-400 decoration-2 underline-offset-2">VOS 10 000 photos</span> en gardant la chronologie parfaite.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-16">
            <a 
              href={LEMON_SQUEEZY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-snap-yellow text-black text-lg font-black uppercase tracking-wider rounded-lg shadow-[0_0_20px_rgba(255,252,0,0.4)] hover:shadow-[0_0_30px_rgba(255,252,0,0.6)] hover:scale-105 transition-all transform text-center"
            >
              Sauver mes 10 ans de souvenirs (15€)
            </a>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-500">Disponible sur Windows.</span>
              <a 
                href="./mac.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-snap-yellow hover:text-yellow-300 underline underline-offset-2 transition-colors"
              >
                Utilisateur Mac ? Cliquez ici pour être prévenu.
              </a>
            </div>
          </div>

          <img 
            src="./app_in_action.png" 
            alt="SnapSafe en action"
            className="max-w-2xl mx-auto mt-16 rounded-xl border-2 border-slate-700 shadow-2xl shadow-yellow-500/10"
          />
        </div>
      </section>

      {/* PROOF SECTION */}
      <Comparison />

      {/* VALUE SECTION */}
      <section className="py-24 bg-gradient-to-b from-snap-dark to-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            Combien valent <span className="text-snap-yellow">150 heures</span> de votre vie ?
          </h2>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div className="text-center">
                    <div className="text-5xl font-black text-gray-700 mb-2">150h</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Clics manuels</div>
                </div>
                <div className="text-4xl text-gray-600 font-bold hidden md:block">VS</div>
                <div className="text-center">
                    <div className="text-5xl font-black text-snap-yellow mb-2">1 Nuit</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Avec SnapSafe</div>
                </div>
            </div>
            <p className="mt-8 text-xl text-gray-300 leading-relaxed">
              Le faire à la main prendrait des semaines de clics douloureux. Notre automate le fait pendant que vous dormez. Pour le prix de deux cafés, vous récupérez votre temps <span className="font-bold text-white">ET</span> vos souvenirs.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
            Comment ça marche
          </h2>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Étape 1 : Demandez vos données Snapchat
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Connectez-vous à votre compte sur accounts.snapchat.com, allez dans 'Mes Données', et demandez votre archive. Vous recevrez un email avec un lien vers votre fichier .zip.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Étape 2 : Lancez SnapSafe
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Ouvrez SnapSafe, entrez votre clé de licence, et glissez simplement le fichier .zip dans l'application.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Étape 3 : Récupérez vos souvenirs
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Laissez la magie opérer. Retrouvez vos souvenirs triés et réparés dans un dossier sur votre ordinateur, prêts à être transférés sur votre téléphone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-snap-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-snap-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-lg mx-auto px-4 relative z-10">
          <div className="bg-card border-2 border-snap-yellow shadow-[0_0_40px_rgba(255,252,0,0.15)] rounded-2xl p-8 md:p-12 text-center transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white font-bold px-4 py-1 rounded-full text-sm uppercase tracking-widest shadow-lg">
              Offre limitée
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Licence À Vie</h3>
            <p className="text-gray-400 text-sm mb-8">Paiement unique. Sauvegardes illimitées.</p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-4xl text-red-500 line-through font-bold opacity-70 decoration-2">30€</span>
              <span className="text-7xl font-black text-snap-yellow">15€</span>
            </div>

            <ul className="text-left space-y-4 mb-10 text-gray-300">
              <li className="flex items-center gap-3">
                <Icons.CheckCircle /> <span>Téléchargement illimité</span>
              </li>
              <li className="flex items-center gap-3">
                <Icons.CheckCircle /> <span>Organisation par Année/Mois</span>
              </li>
              <li className="flex items-center gap-3">
                <Icons.CheckCircle /> <span>Conservation des dates (Méta)</span>
              </li>
              <li className="flex items-center gap-3">
                <Icons.CheckCircle /> <span>Mode Sécurisé (Anti-Ban)</span>
              </li>
              <li className="flex items-center gap-3">
                <Icons.CheckCircle /> <span>Support prioritaire 7j/7</span>
              </li>
            </ul>

            <a 
              href={LEMON_SQUEEZY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 bg-snap-yellow text-black text-xl font-black uppercase tracking-wider rounded-lg shadow-lg hover:bg-yellow-300 transition-colors mb-4"
            >
              Profiter de l'offre à -50%
            </a>
            
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <Icons.Lock />
              <span>Paiement sécurisé via LemonSqueezy</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2">{item.question}</h3>
                <p className="text-gray-400 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-black text-center text-gray-600 text-sm border-t border-gray-900">
        <p className="mb-4">&copy; {new Date().getFullYear()} SnapSafe Backup. Tous droits réservés.</p>
        <div className="flex justify-center gap-6">
          <a href="./mentions.html" className="hover:text-gray-400">Mentions Légales</a>
          <a href="./confidentialite.html" className="hover:text-gray-400">Confidentialité</a>
          <a href="mailto:support@snapsafe.app" className="hover:text-gray-400">Contact</a>
        </div>
        <p className="mt-8 text-xs opacity-50 max-w-lg mx-auto px-4">
          Ce site n'est pas affilié à Snap Inc. Snapchat est une marque déposée de Snap Inc. 
          SnapSafe est un outil tiers indépendant pour la gestion de fichiers locaux.
        </p>
      </footer>
    </div>
  );
};

export default App;