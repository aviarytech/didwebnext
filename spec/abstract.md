## Abstract

The `did:tdw` (Trust DID Web) method is an enhancement to the
`did:web` protocol, providing a complementary web-based DID method that addresses limitations
of `did:web`. Its features include:

- Ongoing publishing of all DID Document (DIDDoc) versions for a DID instead of,
  or alongside a `did:web` DID/DIDDoc.
- The same DID-to-HTTPS transformation as `did:web`.
- The ability to resolve the full history of the DID using a verifiable chain of
  updates to the DIDDoc from genesis to deactivation.
- A [[def: self-certifying identifier]] (SCID) for the DID that is globally
  unique, embedded in the DID, and derived from the initial DIDDoc. The SCID
  enables [[ref: DID portability]], such as moving the DID's web location (and
  so changing the DID string itself) while retaining a connection to the
  predecessor DID(s) and the DID's verifiable history.
- DIDDoc updates include a proof signed by the DID Controller(s) *authorized* to
  update the DID.
- An optional mechanism for publishing "pre-rotation" keys to prevent the loss of
  control of a DID in cases where an active private key is compromised.
- DID URL path handling that defaults (but can be overridden) to automatically
  resolving `<did>/path/to/file` by using a comparable DID-to-HTTPS translation
  as for the DIDDoc.
- A DID URL path `<did>/whois` that defaults to automatically returning (if
  published by the DID controller) a [[ref: Verifiable Presentation]] containing
  [[ref: Verifiable Credentials]] with the DID as the `credentialSubject`,
  signed by the DID.

Combined, the additional features enable greater trust and security without
compromising the simplicity of `did:web`. The incorporation of the DID Core
compatible "/whois" path, drawing inspiration from the traditional WHOIS
protocol [[spec:rfc3912]], offers an easy-to-use, decentralized, trust registry.
The `did:tdw` method aims to establish a more trusted and secure web environment by
providing robust verification processes and enabling transparency and
authenticity in the management of decentralized digital identities.
