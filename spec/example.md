## `did:tdw` Example

The following shows the evolution of a `did:tdw` from inception through several
versions, showing the DID, DIDDoc, [[ref: DID Log]], and some of the
intermediate data structures.

In the following, all of the data for the [[ref: DID log entries]] are displayed
as prettified JSON for readability. In the log itself, the JSON has all
whitespace removed, and each line ends with a `CR`.

### DID Creation Data

These examples show the important structures used in the [Create (Register)](#create-register) operation for a `did:tdw` DID.

#### DIDDoc with SCID Placeholders

This is the version of the DIDDoc that the [[ref: DID Controller]] constructs
(however they see fit) and passes into the [SCID Generation Process](#scid-generation-and-validation).

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/multikey/v1"
  ],
  "id": "did:tdw:example.com:{SCID}",
  "controller": "did:tdw:example.com:{SCID}",
  "authentication": [
    "did:tdw:example.com:{SCID}#y4SDXopT"
  ],
  "assertionMethod": [
    "did:tdw:example.com:{SCID}#5b48Zj6B"
  ],
  "verificationMethod": [
    {
      "id": "did:tdw:example.com:{SCID}#y4SDXopT",
      "controller": "did:tdw:example.com:{SCID}",
      "type": "Multikey",
      "publicKeyMultibase": "z6Mksta2t7db1WSx2JBorfYFcJnaJMBKUyupD2qPy4SDXopT"
    },
    {
      "id": "did:tdw:example.com:{SCID}#5b48Zj6B",
      "controller": "did:tdw:example.com:{SCID}",
      "type": "Multikey",
      "publicKeyMultibase": "z6Mkw1KSvGWNAwSwWbcpwPgFARX4vKPa1xvcDMsJ5b48Zj6B"
    }
  ]
}
```

#### DIDDoc with SCID In Place

After the SCID is generated, the `{SCID}` placeholders are replaced by the generated [[ref: SCID]] value.

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/multikey/v1"
  ],
  "id": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
  "controller": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
  "authentication": [
    "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT"
  ],
  "assertionMethod": [
    "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B"
  ],
  "verificationMethod": [
    {
      "id": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT",
      "controller": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
      "type": "Multikey",
      "publicKeyMultibase": "z6Mksta2t7db1WSx2JBorfYFcJnaJMBKUyupD2qPy4SDXopT"
    },
    {
      "id": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B",
      "controller": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
      "type": "Multikey",
      "publicKeyMultibase": "z6Mkw1KSvGWNAwSwWbcpwPgFARX4vKPa1xvcDMsJ5b48Zj6B"
    }
  ]
}
```

#### Entry Hash Generation Input

The first item in the entry hashing input for Version 1 of the DIDDoc is SCID of
the DID. The fifth item, containing the first version DIDDoc content is the full
DIDDoc (as indicated by the `value` item).

```json
[
  "4c99uuenu8gk6n3bgf09fuf350gx",
  1,
  "2024-04-15T19:56:18Z",
  {
    "method": "did:tdw:1",
    "scid": "4c99uuenu8gk6n3bgf09fuf350gx"
  },
  {
    "value": {
      "@context": [
        "https://www.w3.org/ns/did/v1",
        "https://w3id.org/security/multikey/v1"
      ],
      "id": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
      "controller": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
      "authentication": [
        "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT"
      ],
      "assertionMethod": [
        "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B"
      ],
      "verificationMethod": [
        {
          "id": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT",
          "controller": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
          "type": "Multikey",
          "publicKeyMultibase": "z6Mksta2t7db1WSx2JBorfYFcJnaJMBKUyupD2qPy4SDXopT"
        },
        {
          "id": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B",
          "controller": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
          "type": "Multikey",
          "publicKeyMultibase": "z6Mkw1KSvGWNAwSwWbcpwPgFARX4vKPa1xvcDMsJ5b48Zj6B"
        }
      ]
    }
  }
]
```

#### First Log Entry

The following is the JSON prettified version of the entry log file that is published
as the `did.jsonl` file. When published, all extraneous whitespace is removed, as
shown in the block below the pretty-printed version.

```json
[
  "4fbja27mgf0bumtbg2b4hbzqc2ux9a9crrqx7w6cfnd97k9u7k5g",
  1,
  "2024-04-15T19:56:18Z",
  {
    "method": "did:tdw:1",
    "scid": "4c99uuenu8gk6n3bgf09fuf350gx"
  },
  {
    "value": {
      "@context": [
        "https://www.w3.org/ns/did/v1",
        "https://w3id.org/security/multikey/v1"
      ],
      "id": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
      "controller": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
      "authentication": [
        "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT"
      ],
      "assertionMethod": [
        "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B"
      ],
      "verificationMethod": [
        {
          "id": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT",
          "controller": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
          "type": "Multikey",
          "publicKeyMultibase": "z6Mksta2t7db1WSx2JBorfYFcJnaJMBKUyupD2qPy4SDXopT"
        },
        {
          "id": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B",
          "controller": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
          "type": "Multikey",
          "publicKeyMultibase": "z6Mkw1KSvGWNAwSwWbcpwPgFARX4vKPa1xvcDMsJ5b48Zj6B"
        }
      ]
    }
  },
  [
    {
      "type": "DataIntegrityProof",
      "cryptosuite": "eddsa-jcs-2022",
      "verificationMethod": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT",
      "created": "2024-04-15T19:56:18Z",
      "proofPurpose": "authentication",
      "challenge": "4fbja27mgf0bumtbg2b4hbzqc2ux9a9crrqx7w6cfnd97k9u7k5g",
      "proofValue": "z4vP3KptRsxFcjpatqHNpywvwV5AfmAYhkHsMbF8K1gKqRA7WZuoyLheF9tabMu2HCXPnvNEKijfMqpRqkfKZRAHi"
    }
  ]
]
```

The same content as it is found in the `did.jsonl` file:

```json
["4fbja27mgf0bumtbg2b4hbzqc2ux9a9crrqx7w6cfnd97k9u7k5g",1,"2024-04-15T19:56:18Z",{"method":"did:tdw:1","scid":"4c99uuenu8gk6n3bgf09fuf350gx"},{"value":{"@context":["https://www.w3.org/ns/did/v1","https://w3id.org/security/multikey/v1"],"id":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx","controller":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx","authentication":["did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT"],"assertionMethod":["did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B"],"verificationMethod":[{"id":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT","controller":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx","type":"Multikey","publicKeyMultibase":"z6Mksta2t7db1WSx2JBorfYFcJnaJMBKUyupD2qPy4SDXopT"},{"id":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B","controller":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx","type":"Multikey","publicKeyMultibase":"z6Mkw1KSvGWNAwSwWbcpwPgFARX4vKPa1xvcDMsJ5b48Zj6B"}]}},[{"type":"DataIntegrityProof","cryptosuite":"eddsa-jcs-2022","verificationMethod":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT","created":"2024-04-15T19:56:18Z","proofPurpose":"authentication","challenge":"4fbja27mgf0bumtbg2b4hbzqc2ux9a9crrqx7w6cfnd97k9u7k5g","proofValue":"z4vP3KptRsxFcjpatqHNpywvwV5AfmAYhkHsMbF8K1gKqRA7WZuoyLheF9tabMu2HCXPnvNEKijfMqpRqkfKZRAHi"}]]
```

#### `did:web` Version of DIDDoc

As noted in the [publishing a parallel `did:web`
DID](#publishing-a-parallel-didweb-did) section of this specification, here is
what the `did:web` DIDDoc looks like for the `did:tdw` above.

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/multikey/v1"
  ],
  "id": "did:web:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
  "controller": "did:web:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
  "alsoKnownAs": ["did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx"],
  "authentication": [
    "did:web:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT"
  ],
  "assertionMethod": [
    "did:web:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B"
  ],
  "verificationMethod": [
    {
      "id": "did:web:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT",
      "controller": "did:web:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
      "type": "Multikey",
      "publicKeyMultibase": "z6Mksta2t7db1WSx2JBorfYFcJnaJMBKUyupD2qPy4SDXopT"
    },
    {
      "id": "did:web:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B",
      "controller": "did:web:example.com:4c99uuenu8gk6n3bgf09fuf350gx",
      "type": "Multikey",
      "publicKeyMultibase": "z6Mkw1KSvGWNAwSwWbcpwPgFARX4vKPa1xvcDMsJ5b48Zj6B"
    }
  ]
}
```

### Version 2 of the DIDDoc

Time passes, and the [[ref: DID Controller]] of the `did:tdw` DID decides to
update its DID to a new version, version 2.

#### Target Version 2 DIDDoc

The [[ref: DID Controller]] constructs the new target DIDDoc (below) in
preparation for passing it into the process to [Update](#update-rotate) the `did:tdw`
DID.

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/multikey/v1",
    "https://identity.foundation/linked-vp/contexts/v1"
  ],
  "id": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx",
  "controller": [
    "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"
  ],
  "authentication": [
    "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#CpsUrTh3"
  ],
  "assertionMethod": [
    "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#gJqvqaYD"
  ],
  "verificationMethod": [
    {
      "id": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#CpsUrTh3",
      "controller": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx",
      "type": "Multikey",
      "publicKeyMultibase": "z6MkuocstfAaHsJgRnQgfQdtJiECuWEMDAbQV61aCpsUrTh3"
    },
    {
      "id": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#gJqvqaYD",
      "controller": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx",
      "type": "Multikey",
      "publicKeyMultibase": "z6MksNvDtgMutKMzjezRqj8JbYuCHNjHR5HBaF2ogJqvqaYD"
    }
  ],
  "service": [
    {
      "id": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#whois",
      "type": "LinkedVerifiablePresentation",
      "serviceEndpoint": [
        "https://example.com/docs/4c99uuenu8gk6n3bgf09fuf350gx/whois.json"
      ]
    }
  ]
}
```

#### Version 2 Entry Hashing Input

The first item in the entry hashing input for Version 2 of the DIDDoc is the
entry hash generated for the Version 1 of the DIDDoc. The fifth item, containing the new
version DIDDoc content is in the form of a [[spec:rfc6902]] JSON Patch (as
indicated by the `patch` item), and are the set of operations to transition the
DIDDoc from version 1 to this new version 2 DIDDoc.

```json
[
  "53vtcxfvmvwfzyfw4b9cjeygccwbhm8j1v90by5k66jt4ahbhu50",
  2,
  "2024-04-15T19:56:18Z",
  {},
  {
    "patch": [
      {
        "op": "replace",
        "path": "/verificationMethod/1/publicKeyMultibase",
        "value": "z6MksNvDtgMutKMzjezRqj8JbYuCHNjHR5HBaF2ogJqvqaYD"
      },
      {
        "op": "replace",
        "path": "/verificationMethod/1/controller",
        "value": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"
      },
      {
        "op": "replace",
        "path": "/verificationMethod/1/id",
        "value": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#gJqvqaYD"
      },
      {
        "op": "replace",
        "path": "/verificationMethod/0/publicKeyMultibase",
        "value": "z6MkuocstfAaHsJgRnQgfQdtJiECuWEMDAbQV61aCpsUrTh3"
      },
      {
        "op": "replace",
        "path": "/verificationMethod/0/controller",
        "value": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"
      },
      {
        "op": "replace",
        "path": "/verificationMethod/0/id",
        "value": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#CpsUrTh3"
      },
      {
        "op": "replace",
        "path": "/assertionMethod/0",
        "value": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#gJqvqaYD"
      },
      {
        "op": "replace",
        "path": "/authentication/0",
        "value": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#CpsUrTh3"
      },
      {
        "op": "replace",
        "path": "/controller",
        "value": [
          "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"
        ]
      },
      {
        "op": "replace",
        "path": "/id",
        "value": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"
      },
      {
        "op": "add",
        "path": "/@context/2",
        "value": "https://identity.foundation/linked-vp/contexts/v1"
      },
      {
        "op": "add",
        "path": "/service",
        "value": [
          {
            "id": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#whois",
            "type": "LinkedVerifiablePresentation",
            "serviceEndpoint": [
              "https://example.com/docs/4c99uuenu8gk6n3bgf09fuf350gx/whois.json"
            ]
          }
        ]
      }
    ]
  }
]
```

#### Log File For Version 2

The new version 2 `did.jsonl` file contains two entries, one for each version
of the DIDDoc. The data integrity proof on the version 2 entry **MUST** be from
an `authentication` key from the version 1 DIDDoc.

```json
["4fbja27mgf0bumtbg2b4hbzqc2ux9a9crrqx7w6cfnd97k9u7k5g",1,"2024-04-15T19:56:18Z",{"method":"did:tdw:1","scid":"4c99uuenu8gk6n3bgf09fuf350gx"},{"value":{"@context":["https://www.w3.org/ns/did/v1","https://w3id.org/security/multikey/v1"],"id":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx","controller":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx","authentication":["did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT"],"assertionMethod":["did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B"],"verificationMethod":[{"id":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT","controller":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx","type":"Multikey","publicKeyMultibase":"z6Mksta2t7db1WSx2JBorfYFcJnaJMBKUyupD2qPy4SDXopT"},{"id":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B","controller":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx","type":"Multikey","publicKeyMultibase":"z6Mkw1KSvGWNAwSwWbcpwPgFARX4vKPa1xvcDMsJ5b48Zj6B"}]}},[{"type":"DataIntegrityProof","cryptosuite":"eddsa-jcs-2022","verificationMethod":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT","created":"2024-04-15T19:56:18Z","proofPurpose":"authentication","challenge":"4fbja27mgf0bumtbg2b4hbzqc2ux9a9crrqx7w6cfnd97k9u7k5g","proofValue":"z4vP3KptRsxFcjpatqHNpywvwV5AfmAYhkHsMbF8K1gKqRA7WZuoyLheF9tabMu2HCXPnvNEKijfMqpRqkfKZRAHi"}]]
["53vtcxfvmvwfzyfw4b9cjeygccwbhm8j1v90by5k66jt4ahbhu50",2,"2024-04-15T19:56:18Z",{},{"patch":[{"op":"replace","path":"/verificationMethod/1/publicKeyMultibase","value":"z6MksNvDtgMutKMzjezRqj8JbYuCHNjHR5HBaF2ogJqvqaYD"},{"op":"replace","path":"/verificationMethod/1/controller","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"},{"op":"replace","path":"/verificationMethod/1/id","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#gJqvqaYD"},{"op":"replace","path":"/verificationMethod/0/publicKeyMultibase","value":"z6MkuocstfAaHsJgRnQgfQdtJiECuWEMDAbQV61aCpsUrTh3"},{"op":"replace","path":"/verificationMethod/0/controller","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"},{"op":"replace","path":"/verificationMethod/0/id","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#CpsUrTh3"},{"op":"replace","path":"/assertionMethod/0","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#gJqvqaYD"},{"op":"replace","path":"/authentication/0","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#CpsUrTh3"},{"op":"replace","path":"/controller","value":["did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"]},{"op":"replace","path":"/id","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"},{"op":"add","path":"/@context/2","value":"https://identity.foundation/linked-vp/contexts/v1"},{"op":"add","path":"/service","value":[{"id":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#whois","type":"LinkedVerifiablePresentation","serviceEndpoint":["https://example.com/docs/4c99uuenu8gk6n3bgf09fuf350gx/whois.json"]}]}]},[{"type":"DataIntegrityProof","cryptosuite":"eddsa-jcs-2022","verificationMethod":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT","created":"2024-04-15T19:56:18Z","proofPurpose":"authentication","challenge":"53vtcxfvmvwfzyfw4b9cjeygccwbhm8j1v90by5k66jt4ahbhu50","proofValue":"z47viJruDDnAfpL6Zo3bowUB9Eumx1w7Qa8UwH6K1Df1Db6pExBMRvzdy9YgL452t3v5FmrKAnDGF7aQYgtG7bbga"}]]
```

### Version 3

#### Version 3 Target DIDDoc

Here is the target update for the version 3 DIDDoc, as constructed by the DID Controller. It is the data used as input to the `did:tdw` log entry generation process.

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/multikey/v1",
    "https://identity.foundation/linked-vp/contexts/v1",
    "https://didcomm.org/messaging/v2"
  ],
  "id": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx",
  "controller": [
    "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"
  ],
  "authentication": [
    "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#CZSeAWLE"
  ],
  "assertionMethod": [
    "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#9vYyiXiJ"
  ],
  "keyAgreement": [
    "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#qnYZ6fWH"
  ],
  "verificationMethod": [
    {
      "id": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#CZSeAWLE",
      "controller": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx",
      "type": "Multikey",
      "publicKeyMultibase": "z6Mkq7Qoa2LCvLCUiq9W2J9vXH1ooDqSX2ehWGUzCZSeAWLE"
    },
    {
      "id": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#9vYyiXiJ",
      "controller": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx",
      "type": "Multikey",
      "publicKeyMultibase": "z6Mkr2D4ixckmQx8tAVvXEhMuaMhzahxe61qJt7G9vYyiXiJ"
    },
    {
      "id": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#qnYZ6fWH",
      "controller": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx",
      "type": "Multikey",
      "publicKeyMultibase": "z6LSdYjdAE7ZY1Gh5VPAxDJdgbg45Lq6im3N9o6HqnYZ6fWH"
    }
  ],
  "service": [
    {
      "id": "did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#whois",
      "type": "LinkedVerifiablePresentation",
      "serviceEndpoint": [
        "https://example.com/docs/4c99uuenu8gk6n3bgf09fuf350gx/whois.json"
      ]
    },
    {
      "id": "did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#didcomm",
      "type": "DIDCommMessaging",
      "serviceEndpoint": {
        "uri": "https://example.com/didcomm",
        "accept": [
          "didcomm/v2",
          "didcomm/aip2;env=rfc587"
        ],
        "routingKeys": [
          "did:example:somemediator#somekey"
        ]
      }
    }
  ]
}
```

#### Log File For Version 3

The new version 3 `did.jsonl` file contains three entries, one for each version
of the DIDDoc. The data integrity proof on the version 3 entry **MUST** be from
an `authentication` key from the version 2 DIDDoc.

```json
["4fbja27mgf0bumtbg2b4hbzqc2ux9a9crrqx7w6cfnd97k9u7k5g",1,"2024-04-15T19:56:18Z",{"method":"did:tdw:1","scid":"4c99uuenu8gk6n3bgf09fuf350gx"},{"value":{"@context":["https://www.w3.org/ns/did/v1","https://w3id.org/security/multikey/v1"],"id":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx","controller":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx","authentication":["did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT"],"assertionMethod":["did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B"],"verificationMethod":[{"id":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT","controller":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx","type":"Multikey","publicKeyMultibase":"z6Mksta2t7db1WSx2JBorfYFcJnaJMBKUyupD2qPy4SDXopT"},{"id":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#5b48Zj6B","controller":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx","type":"Multikey","publicKeyMultibase":"z6Mkw1KSvGWNAwSwWbcpwPgFARX4vKPa1xvcDMsJ5b48Zj6B"}]}},[{"type":"DataIntegrityProof","cryptosuite":"eddsa-jcs-2022","verificationMethod":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT","created":"2024-04-15T19:56:18Z","proofPurpose":"authentication","challenge":"4fbja27mgf0bumtbg2b4hbzqc2ux9a9crrqx7w6cfnd97k9u7k5g","proofValue":"z4vP3KptRsxFcjpatqHNpywvwV5AfmAYhkHsMbF8K1gKqRA7WZuoyLheF9tabMu2HCXPnvNEKijfMqpRqkfKZRAHi"}]]
["53vtcxfvmvwfzyfw4b9cjeygccwbhm8j1v90by5k66jt4ahbhu50",2,"2024-04-15T19:56:18Z",{},{"patch":[{"op":"replace","path":"/verificationMethod/1/publicKeyMultibase","value":"z6MksNvDtgMutKMzjezRqj8JbYuCHNjHR5HBaF2ogJqvqaYD"},{"op":"replace","path":"/verificationMethod/1/controller","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"},{"op":"replace","path":"/verificationMethod/1/id","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#gJqvqaYD"},{"op":"replace","path":"/verificationMethod/0/publicKeyMultibase","value":"z6MkuocstfAaHsJgRnQgfQdtJiECuWEMDAbQV61aCpsUrTh3"},{"op":"replace","path":"/verificationMethod/0/controller","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"},{"op":"replace","path":"/verificationMethod/0/id","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#CpsUrTh3"},{"op":"replace","path":"/assertionMethod/0","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#gJqvqaYD"},{"op":"replace","path":"/authentication/0","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#CpsUrTh3"},{"op":"replace","path":"/controller","value":["did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"]},{"op":"replace","path":"/id","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx"},{"op":"add","path":"/@context/2","value":"https://identity.foundation/linked-vp/contexts/v1"},{"op":"add","path":"/service","value":[{"id":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#whois","type":"LinkedVerifiablePresentation","serviceEndpoint":["https://example.com/docs/4c99uuenu8gk6n3bgf09fuf350gx/whois.json"]}]}]},[{"type":"DataIntegrityProof","cryptosuite":"eddsa-jcs-2022","verificationMethod":"did:tdw:example.com:4c99uuenu8gk6n3bgf09fuf350gx#y4SDXopT","created":"2024-04-15T19:56:18Z","proofPurpose":"authentication","challenge":"53vtcxfvmvwfzyfw4b9cjeygccwbhm8j1v90by5k66jt4ahbhu50","proofValue":"z47viJruDDnAfpL6Zo3bowUB9Eumx1w7Qa8UwH6K1Df1Db6pExBMRvzdy9YgL452t3v5FmrKAnDGF7aQYgtG7bbga"}]]
["3nxcvupjdbetntt80ggnbxurkrz9bhh93nqega3ek5ex8xpfurb0",3,"2024-04-15T19:56:18Z",{},{"patch":[{"op":"add","path":"/service/1","value":{"id":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#didcomm","type":"DIDCommMessaging","serviceEndpoint":{"uri":"https://example.com/didcomm","accept":["didcomm/v2","didcomm/aip2;env=rfc587"],"routingKeys":["did:example:somemediator#somekey"]}}},{"op":"replace","path":"/verificationMethod/1/publicKeyMultibase","value":"z6Mkr2D4ixckmQx8tAVvXEhMuaMhzahxe61qJt7G9vYyiXiJ"},{"op":"replace","path":"/verificationMethod/1/id","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#9vYyiXiJ"},{"op":"replace","path":"/verificationMethod/0/publicKeyMultibase","value":"z6Mkq7Qoa2LCvLCUiq9W2J9vXH1ooDqSX2ehWGUzCZSeAWLE"},{"op":"replace","path":"/verificationMethod/0/id","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#CZSeAWLE"},{"op":"add","path":"/verificationMethod/2","value":{"id":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#qnYZ6fWH","controller":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx","type":"Multikey","publicKeyMultibase":"z6LSdYjdAE7ZY1Gh5VPAxDJdgbg45Lq6im3N9o6HqnYZ6fWH"}},{"op":"replace","path":"/assertionMethod/0","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#9vYyiXiJ"},{"op":"replace","path":"/authentication/0","value":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#CZSeAWLE"},{"op":"add","path":"/@context/3","value":"https://didcomm.org/messaging/v2"},{"op":"add","path":"/keyAgreement","value":["did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#qnYZ6fWH"]}]},[{"type":"DataIntegrityProof","cryptosuite":"eddsa-jcs-2022","verificationMethod":"did:tdw:migrated.example.com:4c99uuenu8gk6n3bgf09fuf350gx#CpsUrTh3","created":"2024-04-15T19:56:18Z","proofPurpose":"authentication","challenge":"3nxcvupjdbetntt80ggnbxurkrz9bhh93nqega3ek5ex8xpfurb0","proofValue":"zedM9gUK9KvMLEXLePemFB2W5jBtscHN9WRPcxmkuRanPHsvK76M1mKHUKqJtApcdSsykRZtoHPJLiagJo3KKJsU"}]]
```

And so on...
