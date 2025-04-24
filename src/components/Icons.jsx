export const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 19L5 12L12 5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const KSFLogo = ({ color = "#0e2909" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M100 0C44.8 0 0 44.8 0 100C0 155.2 44.8 200 100 200C155.2 200 200 155.2 200 100C200 44.8 155.2 0 100 0Z"
      fill={color}
    />
    <path
      d="M100 30C61.4 30 30 61.4 30 100C30 138.6 61.4 170 100 170C138.6 170 170 138.6 170 100C170 61.4 138.6 30 100 30ZM100 150C72.4 150 50 127.6 50 100C50 72.4 72.4 50 100 50C127.6 50 150 72.4 150 100C150 127.6 127.6 150 100 150Z"
      fill="#34c759"
    />
    <path d="M75 80H65V120H75V105H85V95H75V80Z" fill="#34c759" />
    <path
      d="M95 80C90 80 85 85 85 90V110C85 115 90 120 95 120H105C110 120 115 115 115 110V90C115 85 110 80 105 80H95ZM105 110H95V90H105V110Z"
      fill="#34c759"
    />
    <path d="M125 80H115V90H125V120H135V90H145V80H125Z" fill="#34c759" />
  </svg>
)
