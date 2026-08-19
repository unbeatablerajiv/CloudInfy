import { MessageCircle, Send, X } from 'lucide-react';
import { useState } from 'react';
import { salesforceOverviewSource, salesforceProducts } from '../data/salesforceKnowledge';
import cloudinfyFavicon from '../assets/cloudinfy-favicon.png';

function answerFor(question) {
  const message = question.toLowerCase();
  const matchedProduct = salesforceProducts.find(({ terms }) => terms.some((term) => message.includes(term)));
  if (matchedProduct) return `${matchedProduct.summary} Want to discuss whether ${matchedProduct.name} is the right fit for your team?`;
  if (message.includes('support') || message.includes('maint')) return 'CloudInfy provides responsive Salesforce support and maintenance to keep your platform healthy, secure, and continuously improving. Tell us what needs attention and we’ll help you map the next step.';
  if (message.includes('work') || message.includes('process') || message.includes('client')) return 'Our work starts with discovery: we understand your business goals and processes, shape a practical Salesforce roadmap, then stay accountable through delivery, adoption, and ongoing improvement.';
  if (message.includes('service') || message.includes('need') || message.includes('help')) return 'We can help with Salesforce consulting, implementation, customization, custom development, integrations, automation, data migration, and ongoing support. Share the challenge you’re solving and we’ll point you in the right direction.';
  return 'Thanks for sharing. CloudInfy can help turn that business need into a practical Salesforce plan. For a tailored answer, start a conversation with our team and include a little context about your goals.';
}

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'Hi, I’m CloudInfy’s virtual assistant. I can help you explore Salesforce services or find the right next step.' }]);

  const send = (text = input) => {
    const question = text.trim();
    if (!question) return;
    setMessages((current) => [...current, { role: 'user', text: question }, { role: 'assistant', text: answerFor(question) }]);
    setInput('');
  };

  return <aside className={`assistant-widget ${open ? 'is-open' : ''}`} aria-label="CloudInfy virtual assistant">
    {open && <section className="assistant-panel" aria-live="polite">
      <header className="assistant-header"><span className="assistant-avatar"><img src={cloudinfyFavicon} alt="CloudInfy"/></span><div><strong>CloudInfy Assistant</strong><small><i/> Available to help</small></div><button onClick={() => setOpen(false)} aria-label="Close assistant"><X size={18}/></button></header>
      <div className="assistant-messages">{messages.map((message, index) => <div className={`assistant-message ${message.role}`} key={`${message.role}-${index}`}>{message.text}</div>)}</div>
      <div className="assistant-compose"><input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') send(); }} placeholder="Ask a question…" aria-label="Ask the assistant"/><button onClick={() => send()} aria-label="Send message"><Send size={17}/></button></div>
      <a className="assistant-handoff" href="https://wa.me/918197299055" target="_blank" rel="noreferrer"><MessageCircle size={15}/> Talk to a Salesforce expert on WhatsApp</a>
      <a className="assistant-source" href={salesforceOverviewSource} target="_blank" rel="noreferrer">Salesforce product overview ↗</a>
    </section>}
    <button className="assistant-launcher" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close CloudInfy assistant' : 'Open CloudInfy assistant'}>{open ? <X size={22}/> : <><MessageCircle size={22}/><span>Ask CloudInfy</span></>}</button>
  </aside>;
}
