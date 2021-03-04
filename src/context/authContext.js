import React, { createContext, useCallback, useState, useContext } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@DeliveryCenterAuthUser');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email }) => {
    const user = {
      email
    }

    localStorage.setItem('@DeliveryCenterAuthUser', JSON.stringify(user));

    setData({ user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@DeliveryCenterAuthUser');

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
