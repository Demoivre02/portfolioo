import { contactsData } from '../data/contactsData'
import { socialsData } from '../data/socialsData'
import { FaGithub, FaLinkedinIn, FaXTwitter, FaRegPenToSquare } from 'react-icons/fa6'

const norm = (u) => (!u ? '' : /^https?:\/\//i.test(u) ? u : `https://${u}`)

export default function Contact() {
  const socials = [
    { url: socialsData.github, icon: <FaGithub />, label: 'GitHub' },
    { url: socialsData.linkedIn, icon: <FaLinkedinIn />, label: 'LinkedIn' },
    { url: socialsData.twitter, icon: <FaXTwitter />, label: 'X' },
    { url: socialsData.blogger, icon: <FaRegPenToSquare />, label: 'Blog' },
  ].filter((s) => s.url)

  const primaryPhone = (contactsData.phone || '').split(',')[0].trim()

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="eyebrow reveal">Contact</div>
        <h2 className="h2 reveal">Let us talk</h2>
        <div className="contact-box reveal">
          <p className="lede">
            Open to Site Reliability, DevSecOps and Cloud Engineering roles, remote or hybrid.
            The fastest way to reach me is email.
          </p>
          <dl className="contact-rows">
            <div className="crow">
              <dt>Email</dt>
              <dd><a href={`mailto:${contactsData.email}`}>{contactsData.email}</a></dd>
            </div>
            {primaryPhone && (
              <div className="crow">
                <dt>Phone</dt>
                <dd><a href={`tel:${primaryPhone.replace(/\s/g, '')}`}>{primaryPhone}</a></dd>
              </div>
            )}
            <div className="crow">
              <dt>Location</dt>
              <dd>{contactsData.address}</dd>
            </div>
          </dl>
          <div className="socials">
            {socials.map((s) => (
              <a className="soc" key={s.label} href={norm(s.url)} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
