export default function DarkModeToggle({ dark, onToggle }) {
  return (
    <div
      className="dark-mode-toggle"
      id="darkModeToggle"
      role="button"
      tabIndex={0}
      aria-label="Toggle dark mode"
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
    >
      <i className={dark ? 'fas fa-sun' : 'fas fa-moon'}></i>
    </div>
  )
}
