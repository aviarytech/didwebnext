import jsonld from "jsonld";
import didContext from 'did-context';
import ed25519Ctx from 'ed25519-signature-2020-context';
import secCtx from '@digitalbazaar/security-context';
import multikeyContext from '@digitalbazaar/multikey-context';
import * as Ed25519Multikey from '@digitalbazaar/ed25519-multikey';
import dataIntegrityCtx from '@digitalbazaar/data-integrity-context';
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import {createHash} from 'node:crypto';
import {JsonLdDocumentLoader} from 'jsonld-document-loader';
import { VerificationMethod } from "./interfaces";
import { canonicalize } from 'json-canonicalize';
import {cryptosuite as eddsa2022CryptoSuite} from
  '@digitalbazaar/eddsa-2022-cryptosuite';
import { createVMID } from "./method";
import jsigs from 'jsonld-signatures';

const {purposes: {AssertionProofPurpose}} = jsigs;

const jdl = new JsonLdDocumentLoader();
  
jdl.addStatic(
  didContext.constants.DID_CONTEXT_URL,
  didContext.contexts.get(didContext.constants.DID_CONTEXT_URL)
)
jdl.addStatic(ed25519Ctx.CONTEXT_URL, ed25519Ctx.CONTEXT);
jdl.addStatic(secCtx.SECURITY_CONTEXT_V1_URL, secCtx.contexts.get(secCtx.SECURITY_CONTEXT_V1_URL));
jdl.addStatic(secCtx.SECURITY_CONTEXT_V2_URL, secCtx.contexts.get(secCtx.SECURITY_CONTEXT_V2_URL));
jdl.addStatic(dataIntegrityCtx.CONTEXT_URL, dataIntegrityCtx.CONTEXT);
jdl.addStatic(multikeyContext.CONTEXT_URL, multikeyContext.CONTEXT);

const documentLoader = jdl.build();

export const hash = (input: string) => {
  return createHash('sha256').update(input).digest();
}

export async function canonize(input: any) {
  return await jsonld.canonize(input, {
    algorithm: 'URDNA2015',
    format: 'application/n-quads',
    documentLoader,
    useNative: false
  });
}

export async function canonizeProof(proof: any) {
  // `jws`,`signatureValue`,`proofValue` must not be included in the proof
  const { jws, signatureValue, proofValue, ...rest } = proof;
  return await canonize(rest);
}

export async function createVerifyData({ document, proof }: any) {
  // concatenate hash of c14n proof options and hash of c14n document
  if (!proof['@context']) {
    proof['@context'] = document['@context']
  }

  const c14nProofOptions = await canonizeProof(proof);
  const c14nDocument = await canonize(document);
  const proofHash = hash(c14nProofOptions);
  const docHash = hash(c14nDocument);
  return Buffer.concat([proofHash, docHash]);
}

export const signDocument = async (doc: any, vm: VerificationMethod) => {
  const keyPair = await Ed25519Multikey.from({
    '@context': 'https://w3id.org/security/multikey/v1',
    type: 'Multikey',
    controller: doc.id,
    id: createVMID(doc.id, vm),
    publicKeyMultibase: vm.publicKeyMultibase,
    secretKeyMultibase: vm.secretKeyMultibase
  });
  const suite = new DataIntegrityProof({
    signer: keyPair.signer(), cryptosuite: eddsa2022CryptoSuite
  });
  
  const signedDoc = await jsigs.sign(doc, {
    suite,
    purpose: new AssertionProofPurpose(),
    documentLoader
  });
  return signedDoc;
}