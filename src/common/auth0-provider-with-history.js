import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  // For testing - replace these with your actual values from Auth0 dashboard
  const domain = "dev-2wl8fh0qvyj8l6r4.us.auth0.com";  // Your actual Auth0 domain
  const clientId = "GzNxkRYGwI9Zq49TgXFJXqYUqQhYpInw";  // Your actual client ID

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
