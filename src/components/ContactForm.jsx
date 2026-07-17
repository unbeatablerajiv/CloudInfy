import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const initial = { first_name:'', last_name:'', email:'', phone:'', company:'', city:'', state:'', description:'' };
export default function ContactForm() {
  const [form, setForm] = useState(initial), [errors, setErrors] = useState({}), [state, setState] = useState('idle');
  const locked = useRef(false);
  const returnUrl = typeof window === 'undefined' ? '' : `${window.location.origin}${window.location.pathname}?submitted=true#contact`;
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('submitted') === 'true') {
      setState('success');
      window.history.replaceState({}, '', `${window.location.pathname}#contact`);
    }
  }, []);
  const update = e => { setForm({...form,[e.target.name]:e.target.value}); setErrors({...errors,[e.target.name]:''}); };
  const submit = e => {
    if (locked.current) { e.preventDefault(); return; }
    const next = {};
    if (!form.first_name.trim()) next.first_name='Please enter your first name.';
    if (!form.last_name.trim()) next.last_name='Please enter your last name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email='Enter a valid business email.';
    if (!form.company.trim()) next.company='Please enter your company.';
    if (!form.description.trim()) next.description='Tell us a little about your goals.';
    if (Object.keys(next).length) { e.preventDefault(); setErrors(next); setState('error'); return; }
    locked.current=true; setState('loading');
  };
  if (state === 'success') return <div className="form-success" role="status"><CheckCircle2/><h3>Thanks for reaching out.</h3><p>Your inquiry has been sent to CloudInfy. Our team will get back to you shortly.</p><button className="text-button" onClick={() => { setState('idle'); setForm(initial); locked.current=false; }}>Send another message</button></div>;
  const field = (name,label,type='text',required=false) => <label>{label}{required && <span aria-hidden="true"> *</span>}<input name={name} type={type} value={form[name]} onChange={update} aria-invalid={!!errors[name]} aria-describedby={`${name}-error`} required={required}/>{errors[name] && <small id={`${name}-error`}>{errors[name]}</small>}</label>;
  return <form className="contact-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D5g000004y08N" method="POST" onSubmit={submit} noValidate>
    <input type="hidden" name="oid" value="00D5g000004y08N"/><input type="hidden" name="retURL" value={returnUrl}/><input type="hidden" name="lead_source" value="Web"/>
    <div className="form-grid">{field('first_name','First name','text',true)}{field('last_name','Last name','text',true)}{field('email','Business email','email',true)}{field('phone','Phone number','tel')}{field('company','Company name','text',true)}{field('city','City')}{field('state','State / Province')}
      <label className="span-2">How can we help? <span aria-hidden="true">*</span><textarea name="description" value={form.description} onChange={update} rows="4" aria-invalid={!!errors.description} required/>{errors.description && <small>{errors.description}</small>}</label>
    </div>{state==='error' && <p className="form-error" role="alert">Please review the highlighted fields.</p>}<button className="btn form-submit" type="submit" name="submit" disabled={state==='loading'}>{state==='loading'?'Sending…':'Send inquiry'}<ArrowRight size={18}/></button>
  </form>;
}
