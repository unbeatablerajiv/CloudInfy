import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = () => setOpen(false); window.addEventListener('resize', close); return () => window.removeEventListener('resize', close); }, []);
  const links = [['About','about'],['Services','services'],['Solutions','solutions'],['Clients','clients'],['Contact','contact']];
  return <header className="site-header"><div className="container nav-wrap">
    <a className="brand" href="#top" aria-label="CloudInfy home"><span className="brand-mark"><i/><i/><i/></span><span>Cloud<span>Infy</span></span></a>
    <button className="menu-btn" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}<span className="sr-only">Toggle menu</span></button>
    <nav id="primary-nav" className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">{links.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="btn btn-small" href="#contact" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight size={16}/></a></nav>
  </div></header>;
}
