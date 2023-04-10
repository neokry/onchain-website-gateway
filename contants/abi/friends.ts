export const abi = [
  {
    inputs: [
      { internalType: "address", name: "_ethFS", type: "address" },
      { internalType: "bytes", name: "_urlEncodedHTML", type: "bytes" },
      { internalType: "address", name: "_interactor", type: "address" },
      {
        components: [
          {
            internalType: "enum LibHTMLRenderer.ElementType",
            name: "elementType",
            type: "uint8",
          },
          { internalType: "string", name: "name", type: "string" },
          { internalType: "bytes", name: "data", type: "bytes" },
          { internalType: "bytes", name: "urlEncodedPrefix", type: "bytes" },
          { internalType: "bytes", name: "urlEncodedSuffix", type: "bytes" },
        ],
        internalType: "struct LibHTMLRenderer.ElementRequest[]",
        name: "_elements",
        type: "tuple[]",
      },
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "symbol", type: "string" },
          { internalType: "address", name: "fundsRecipent", type: "address" },
          { internalType: "uint256", name: "maxSupply", type: "uint256" },
          { internalType: "uint16", name: "artistProofCount", type: "uint16" },
        ],
        internalType: "struct ITokenBase.TokenConfig",
        name: "_token",
        type: "tuple",
      },
      {
        components: [
          { internalType: "string", name: "urlEncodedName", type: "string" },
          {
            internalType: "string",
            name: "urlEncodedDescription",
            type: "string",
          },
          {
            internalType: "string",
            name: "urlEncodedPreviewBaseURI",
            type: "string",
          },
        ],
        internalType: "struct IFriends.MetadataConfig",
        name: "_metadata",
        type: "tuple",
      },
      {
        components: [
          { internalType: "uint64", name: "standardPrice", type: "uint64" },
          { internalType: "uint64", name: "interactionPrice", type: "uint64" },
          { internalType: "uint64", name: "startTime", type: "uint64" },
          { internalType: "uint64", name: "endTime", type: "uint64" },
        ],
        internalType: "struct IFriends.SaleConfig",
        name: "_sale",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "FundsSendFailure", type: "error" },
  { inputs: [], name: "InvalidAmount", type: "error" },
  { inputs: [], name: "InvalidPrice", type: "error" },
  { inputs: [], name: "MaxSupplyReached", type: "error" },
  { inputs: [], name: "ProofsMinted", type: "error" },
  { inputs: [], name: "SaleNotActive", type: "error" },
  { inputs: [], name: "SenderNotMinter", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "FUNDS_SEND_GAS_LIMIT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "artistProofsMinted",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "enum LibHTMLRenderer.ElementType",
                name: "elementType",
                type: "uint8",
              },
              { internalType: "string", name: "name", type: "string" },
              { internalType: "bytes", name: "data", type: "bytes" },
              {
                internalType: "bytes",
                name: "urlEncodedPrefix",
                type: "bytes",
              },
              {
                internalType: "bytes",
                name: "urlEncodedSuffix",
                type: "bytes",
              },
            ],
            internalType: "struct LibHTMLRenderer.ElementRequest[]",
            name: "elements",
            type: "tuple[]",
          },
          { internalType: "string", name: "urlEncodedName", type: "string" },
          {
            internalType: "string",
            name: "urlEncodedDescription",
            type: "string",
          },
          {
            internalType: "string",
            name: "urlEncodedPreviewBaseURI",
            type: "string",
          },
          { internalType: "address", name: "ethFS", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        internalType: "struct TokenMetadata.DataURIRequest",
        name: "req",
        type: "tuple",
      },
    ],
    name: "dataURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "elements",
    outputs: [
      {
        internalType: "enum LibHTMLRenderer.ElementType",
        name: "elementType",
        type: "uint8",
      },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "bytes", name: "data", type: "bytes" },
      { internalType: "bytes", name: "urlEncodedPrefix", type: "bytes" },
      { internalType: "bytes", name: "urlEncodedSuffix", type: "bytes" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ethFS",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fundsRecipent",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "urlEncodedPreviewBaseURI",
        type: "string",
      },
      { internalType: "string", name: "tokenId", type: "string" },
    ],
    name: "generatePreviewURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getInteractor",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "interactionData", type: "bytes" },
      { internalType: "bytes", name: "validationData", type: "bytes" },
    ],
    name: "interact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "owner", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "interactionData", type: "bytes" },
      { internalType: "bytes", name: "interactionValidation", type: "bytes" },
    ],
    name: "purchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "safeMintMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      { internalType: "bool", name: "isAllowed", type: "bool" },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenHTML",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;