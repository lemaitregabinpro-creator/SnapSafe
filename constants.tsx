import React from 'react';

// Icons as SVG components for zero-dependency
export const Icons = {
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  Alert: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  ),
  XCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
  ),
  Lock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  ),
  Folder: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFFC00" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>
  ),
  FileImage: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="10" cy="12" r="2"/><path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"/></svg>
  )
};

export const FAQ_ITEMS = [
  {
    question: "Est-ce que SnapSafe risque de bannir mon compte ?",
    answer: "Non. Contrairement aux bots illégaux, SnapSafe agit comme un navigateur standard. Nous avons intégré un système de 'Délai Humain' qui limite la vitesse de téléchargement pour rester sous les radars de Snapchat. C'est 100% sécurisé."
  },
  {
    question: "Pourquoi ne pas utiliser l'export officiel gratuit ?",
    answer: "L'export officiel (My Data) est un cauchemar. Il vous donne des liens JSON brisés, supprime les dates de prise de vue (tout est daté au jour du téléchargement) et mélange vidéos et photos. C'est inexploitable pour restaurer une galerie."
  },
  {
    question: "Ça marche sur Mac et Windows ?",
    answer: "Pour l'instant, SnapSafe est disponible sur Windows. La version macOS est notre priorité n°1 et arrive très bientôt. Vous pouvez vous inscrire sur notre liste d'attente pour être le premier prévenu de sa sortie !"
  },
  {
    question: "J'ai 50 000 snaps, ça va prendre combien de temps ?",
    answer: "Environ 4 à 6 heures en arrière-plan. Vous lancez le truc avant de dormir, et au réveil, vos 10 ans de souvenirs sont triés par année et mois sur votre disque dur."
  }
];

export const LEMON_SQUEEZY_URL = "https://snapsafe.lemonsqueezy.com/buy/bbac342c-f3f7-4ee7-9c8e-73c2e5a4b608";