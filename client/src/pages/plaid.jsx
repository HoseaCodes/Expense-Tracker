import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const Plaid = ({ linkToken, setLinkToken, plaidData, setPlaidData }) => {


    const generateToken = async () => {
        const response = await fetch('/plaid/create_link_token', {
            method: 'POST',
        });
        const data = await response.json();
        setLinkToken(data.link_token);
    };

    useEffect(() => {
        generateToken();
    }, []);
    return linkToken != null ? <PlaidButton plaidData={plaidData} setPlaidData={setPlaidData} linkToken={linkToken} /> : <></>;
};



const PlaidButton = ({ linkToken, setPlaidData }) => {
    const onSuccess = React.useCallback((public_token, metadata) => {
        // send public_token to server

        const exchangeToken = async () => {

            const response = await fetch('/plaid/plaid_token_exchange', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ public_token }),
            })
            const data = await response.json();

            setPlaidData(data);
        }

        exchangeToken();

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