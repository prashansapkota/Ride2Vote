export const sharedStyles = {
  // Layout
  pageContainer: {
    minHeight: '100vh',
    background: 'var(--gradient-primary)',
    padding: '40px 20px',
  },

  contentCard: {
    background: 'var(--pure-white)',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: 'var(--shadow-lg)',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },

  // Typography
  pageTitle: {
    color: 'var(--primary-blue)',
    fontSize: '32px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '30px',
  },

  sectionTitle: {
    color: 'var(--primary-blue)',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
  },

  // Form Elements
  formGroup: {
    marginBottom: '24px',
  },

  input: {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid var(--gray-200)',
    borderRadius: '8px',
    fontSize: '16px',
    background: 'var(--gray-100)',
    transition: 'all 0.3s ease',
  },

  // Buttons
  primaryButton: {
    background: 'var(--gradient-primary)',
    color: 'var(--pure-white)',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  secondaryButton: {
    background: 'transparent',
    color: 'var(--primary-blue)',
    padding: '12px 24px',
    borderRadius: '8px',
    border: '2px solid var(--primary-blue)',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  // Cards
  card: {
    background: 'var(--pure-white)',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: 'var(--shadow-md)',
    marginBottom: '20px',
    border: '1px solid var(--gray-200)',
  },

  // Grid and Flex layouts
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '24px',
  },

  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // Spacing
  section: {
    marginBottom: '40px',
  },

  // Animations
  hoverLift: {
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-4px)',
    }
  },

  // Responsive
  responsive: {
    maxWidth: '100%',
    height: 'auto',
  }
}; 