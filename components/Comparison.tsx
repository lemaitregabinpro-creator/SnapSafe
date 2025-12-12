import React from 'react';
import { Icons } from '../constants';

const FileRow = ({ name, date, bad }: { name: string; date: string; bad?: boolean }) => (
  <div className={`flex items-center justify-between py-2 border-b ${bad ? 'border-gray-200/10' : 'border-gray-700'} text-xs md:text-sm`}>
    <div className="flex items-center gap-2">
      {bad ? <span className="text-gray-500"><Icons.FileImage /></span> : <Icons.Folder />}
      <span className={bad ? 'text-gray-400 font-mono' : 'text-gray-200'}>{name}</span>
    </div>
    <span className={bad ? 'text-red-400' : 'text-green-400 font-mono'}>{date}</span>
  </div>
);

const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-snap-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
          Ne tombez pas dans le piège de <span className="text-red-500 underline decoration-4 underline-offset-4">l'export gratuit</span>.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* BAD SIDE */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-900 border border-red-900/50 rounded-lg p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4 text-red-500 font-bold uppercase tracking-widest text-sm">
                <Icons.XCircle />
                CE QUI SE PASSE AVEC L'EXPORT GRATUIT*
              </div>
              
              <div className="bg-gray-800/50 rounded p-4 font-mono text-xs text-gray-400 mb-4 border border-red-500/20">
                &gt; Error: Metadata corrupted<br/>
                &gt; Warning: Timestamp lost (Default: 01/01/1970)<br/>
                &gt; Status: UNUSABLE
              </div>

              <div className="space-y-1 mb-4">
                <FileRow name="IMG_9283_x_Export.jpg" date="24/10/2023 (Today)" bad />
                <FileRow name="random_hash_291.mp4" date="24/10/2023 (Today)" bad />
                <FileRow name="snap_backup_final.json" date="ERROR" bad />
                <FileRow name="IMG_0021.jpg" date="01/01/1970" bad />
                <FileRow name="temp_file_corrupt" date="UNKNOWN" bad />
              </div>
              <p className="mt-auto text-red-400 text-sm font-semibold text-center italic">
                "C'est le bordel complet. Impossible de retrouver la photo de mon diplôme."
              </p>
              <p className="mt-4 text-gray-500 text-xs text-center italic">
                *Illustration des problèmes courants : métadonnées perdues, dates réinitialisées et fichiers en vrac.
              </p>
            </div>
          </div>

          {/* GOOD SIDE */}
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-snap-yellow to-yellow-600 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-900 border border-yellow-500/50 rounded-lg p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4 text-snap-yellow font-bold uppercase tracking-widest text-sm">
                <Icons.CheckCircle />
                Dossier SnapSafe
              </div>

              <div className="bg-gray-800/50 rounded p-4 font-mono text-xs text-green-400 mb-4 border border-green-500/20">
                &gt; Success: Metadata preserved<br/>
                &gt; Sorting: Chronological<br/>
                &gt; Status: PERFECT
              </div>

              <div className="space-y-1 mb-4">
                <FileRow name="2016 - Été" date="07/2016" />
                <FileRow name="2017 - Anniversaire" date="03/2017" />
                <FileRow name="2018 - Voyage Japon" date="09/2018" />
                <FileRow name="2019 - Université" date="11/2019" />
                <FileRow name="2023 - Soirées" date="12/2023" />
              </div>

              <p className="mt-auto text-snap-yellow text-sm font-semibold text-center italic">
                "Tout est trié. Mes métadonnées GPS et dates sont exactes. C'est magique."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;