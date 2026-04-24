"use client";

export function LineupSection() {
  const artists = [
    {
      name: "KINETIC VOID",
      stage: "HEADLINER // STAGE ALPHA",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsduTCz0b2U4YX9OpkePPpIsZ5IqFRoU-NBgWcg25SKKu5SYRLmQuqNQ2S3g9RHyZluy7BhvJaGPv6DyWX33vNndnPERXWFXGOigApW4P3mNiiIZM9v1gwGgBTFZ9LG1hor8mQMdhYULooQKHuvTzPcVHd3q63rwHVvUHzV6XAB9gtNRcgq90gSY1X5rXyNIpjyuPlY6cqAbxAD3qqAj2VWare2nSaY6qH9vVRXNMXNToBti9UShVcuHJlSYpHj9K3uzKtByoAkbo",
      large: true
    },
    {
      name: "NEURAL NET",
      stage: "NEURAL NET",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHRlpmVK8IrEJBJ7cJUpaeiRrzrtmBaiHGz5JQ2wfYioA0njFUq_HPFbz5FM4WR7TqcHVzChLPXno6HXN8bxXtZLxTgRZBNKqR_uOBQ7KNRHWZPsmG2lF9i63ViZXiOkoMpsw_p8dsXZtmW0t5hG12hCANHBARrxQGgGXHRzM3qALCENLaSBW7S-NhWJ_MJFR8h3BzqO3K19BR4hM2CIJeq6ekptj4bm4pmohdFKJVNsfexJhkjCnuNRVoQl_b7cRFIwhSI3cT-yk",
      large: false
    },
    {
      name: "SYNKRO",
      stage: "SYNKRO",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuN6VqDXYXORrjPZ2CoINu18wtAzfNLJ6pW4G3YC-DNvNNcxQSUeMlhNAuPPeYv8bFc1QPSZAGa7phLwxIl2rmLXY-e2NM9CUib8xDko8zIsT_FOg5ueHCP-1X4sZ6bpTZRtF585RzEE8eMll_4tyYiYqsRSSJ3A_qt0gSm9B3qtfAb5pLjOYz6EkZYmEGJegIXwrlcWjhgpot_8YOiqoq1pkQv7SJWFPp3ixBr_MZ5mVwVMrenC0sLwRG88W4jaH4628n07axKkg",
      large: false
    }
  ];

  return (
    <section className="py-section-gap px-margin w-full max-w-container-max mx-auto" id="lineup">
      <div className="grid grid-cols-12 gap-gutter mb-stack-lg">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-h2-headline text-h2-headline text-on-surface uppercase border-t border-cyan-400/30 pt-4">
            LINE-UP<br/>
            <span className="text-primary-container text-h3-subhead font-h3-subhead">FASE 01</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
          <p className="font-body-md text-body-md text-outline">
            Transmitindo dados brutos do underground. Headliners ancorados, coordenadas bloqueadas.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter auto-rows-[250px]">
        {/* Artist Card 1 (Large) */}
        <div className="col-span-12 md:col-span-8 row-span-2 group relative overflow-hidden bg-surface-container-lowest clip-corner brutalist-border">
          <img 
            alt={artists[0].name} 
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500 scale-105 group-hover:scale-100" 
            src={artists[0].image} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full border-t border-transparent group-hover:border-cyan-400/50 transition-colors">
            <span className="font-label-mono text-label-mono text-cyan-400 block mb-2">{artists[0].stage}</span>
            <h3 className="font-h3-subhead text-h3-subhead text-white uppercase m-0">{artists[0].name}</h3>
          </div>
        </div>

        {/* Artist Card 2 */}
        <div className="col-span-12 md:col-span-4 row-span-1 group relative overflow-hidden bg-surface-container-lowest border-t border-l border-cyan-400/30">
          <img 
            alt={artists[1].name} 
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500 scale-105 group-hover:scale-100" 
            src={artists[1].image} 
          />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="font-h3-subhead text-h3-subhead text-white uppercase text-2xl">{artists[1].name}</h3>
          </div>
        </div>

        {/* Artist Card 3 */}
        <div className="col-span-12 md:col-span-4 row-span-1 group relative overflow-hidden bg-surface-container-lowest border-b border-r border-purple-500/30">
          <img 
            alt={artists[2].name} 
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500 scale-105 group-hover:scale-100" 
            src={artists[2].image} 
          />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="font-h3-subhead text-h3-subhead text-white uppercase text-2xl">{artists[2].name}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
