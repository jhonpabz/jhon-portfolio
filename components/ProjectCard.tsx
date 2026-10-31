'use client';
import { useState } from 'react';
import { ArrowUpRight, Github, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';
export const ProjectCard = ({imgSrc, images, title, description, stacks, siteUrl, githubUrl, video}: ComponentsPropsNamespace.ProjectCardProps) => {
 const gallery = images?.length ? images : imgSrc ? [{src: imgSrc, alt: `${title} preview`}] : [];
 const [index, setIndex] = useState(0);
 const [showVideo, setShowVideo] = useState(Boolean(video));
 const activeIndex = Math.min(index, Math.max(0, gallery.length - 1));
 const change = (next: number) => { setIndex((next + gallery.length) % gallery.length); setShowVideo(false); };
 return <article className="project-card" aria-label={title}>
  <div className="project-media" role="region" aria-label={`${title} gallery`} onKeyDown={e=>{if(gallery.length>1 && (e.key==='ArrowRight'||e.key==='ArrowLeft')){e.preventDefault();change(activeIndex+(e.key==='ArrowRight'?1:-1));}}} tabIndex={gallery.length>1?0:undefined}>
   {showVideo && video ? <video src={video} controls preload="none" playsInline aria-label={`${title} video`}/> : gallery[activeIndex] ? <Image src={gallery[activeIndex].src} alt={gallery[activeIndex].alt} fill sizes="(max-width: 767px) 100vw, 50vw"/> : <span className="empty-preview">{title}</span>}
   {!showVideo && gallery.length>1 && <div className="gallery-controls"><button aria-label={`Previous image of ${title}`} onClick={()=>change(activeIndex-1)}><ChevronLeft size={18}/></button><span aria-live="polite">{activeIndex+1} / {gallery.length}</span><button aria-label={`Next image of ${title}`} onClick={()=>change(activeIndex+1)}><ChevronRight size={18}/></button></div>}
  </div>
  {(gallery.length>1 || (video && gallery.length>0)) && <div className="gallery-thumbnails" aria-label={`${title} media selection`}>{video && <button className="video-thumbnail" aria-label={`Play ${title} video`} aria-pressed={showVideo} onClick={()=>setShowVideo(true)}><Play size={18}/><span>Video</span></button>}{gallery.map((item,i)=><button key={i} aria-label={`Show image ${i+1} of ${title}`} aria-pressed={!showVideo && activeIndex===i} onClick={()=>change(i)}><Image src={item.src} alt="" fill sizes="72px"/></button>)}</div>}
  <div className="project-info"><div className="project-title"><h3>{title}</h3><div>{githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${title} code on GitHub`}><Github size={19}/></a>}{siteUrl && <a href={siteUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${title}`}><ArrowUpRight size={22}/></a>}</div></div><p>{description}</p><div className="tags">{stacks?.map(s=><span key={s}>{s}</span>)}</div></div>
 </article>;
};
