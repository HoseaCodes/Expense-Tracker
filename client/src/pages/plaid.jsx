import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const Plaid = () => {
    const [linkToken, setLinkToken] = useState(null);

    const generateToken = async () => {
        const response = await fetch('/create_link_token', {
            method: 'POST',
        });
        const data = await response.json();
        setLinkToken(data.link_token);
    };

    useEffect(() => {
        generateToken();
    }, []);
    return linkToken != null ? <PlaidButton linkToken={linkToken} /> : <></>;
};



const PlaidButton = ({ linkToken }) => {
    const onSuccess = React.useCallback((public_token, metadata) => {
        // send public_token to server
        const response = fetch('/plaid_token_exchange', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ public_token }),
        });
        // Handle response ...
    }, []);
    const config = {
        token: linkToken,
        onSuccess,
    };
    const { open, ready } = usePlaidLink(config);
    return (
        <>
            <button type="button" class="btn btn-outline-dark"
                onClick={() => open()} disabled={!ready}>
                Connect Account
            </button>
        </>
    );
};
export default Plaid;