const socials = [
  { href: 'https://linkedin.com/in/ziad-abdo-495574369', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'https://github.com/zi823', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://x.com/zizo42230', icon: 'fab fa-twitter', label: 'Twitter' },
  { href: 'https://www.instagram.com/zizo42230/', icon: 'fab fa-instagram', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <p>&copy; 2026 Ziad Abdelhalim. All Rights Reserved.</p>
        <p>With My Best Wishes and Hoping to Have a Work Together</p>
      </div>
    </footer>
  )
}
