const output_component = [
    {
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
    },
    {
        "internalType": "address",
        "name": "seller",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "assetContract",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
    },
    {
        "internalType": "address",
        "name": "currency",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "pricePerToken",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "saleStart",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "saleEnd",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "tokensPerBuyer",
        "type": "uint256"
    },
    {
        "internalType": "enum Market.TokenType",
        "name": "tokenType",
        "type": "uint8"
    }
];

const marketplaceInterface = () => {

    const buyAbi =  {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_listingId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_quantity",
                "type": "uint256"
            }
        ],
        "name": "buy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }

    const getAllListingsAbi = {
        "inputs": [],
        "name": "getAllListings",
        "outputs": [
            {
                "components": output_component,
                "internalType": "struct Market.Listing[]",
                "name": "allListings",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
    const getListingsByUserAbi = {
        "inputs": [
            {
                "internalType": "address",
                "name": "_seller",
                "type": "address"
            }
        ],
        "name": "getListingsBySeller",
        "outputs": [
            {
                "components": output_component,
                "internalType": "struct Market.Listing[]",
                "name": "sellerListings",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }

    const contractUriAbi = {
        "inputs": [],
        "name": '_contractURI',
        "outputs": [
            {
                "internalType": 'string',
                "name": '',
                "type": 'string',
            },
        ],
        "stateMutability": 'view',
        "type": 'function'
    }


    const listNftAbi = 	{
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_assetContract",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_currency",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_pricePerToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_quantity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokensPerBuyer",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_secondsUntilStart",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_secondsUntilEnd",
                    "type": "uint256"
                }
            ],
            "name": "list",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }

        const unlistAbi = {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_listingId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_quantity",
                    "type": "uint256"
                }
            ],
            "name": "unlist",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }

    return {
        buyAbi,
        contractUriAbi,
        getAllListingsAbi,
        getListingsByUserAbi,
        listNftAbi,
        unlistAbi
    }
}

export default marketplaceInterface;