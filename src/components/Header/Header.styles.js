export const headerStyles = {
    wrapper: {
      width: '100%',
      backgroundColor: '#fff',
      borderBottom: '1px solid #eee',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1100,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
    },
    mainHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      '@media (max-width: 600px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
  };
  