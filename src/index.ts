import { NativeModules } from 'react-native';
const { Cfddlc } = NativeModules;

export interface AdaptorPair {
  signature: string;
  proof: string;
}

/** Add signatures to a refund transaction */
export interface AddSignaturesToRefundTxRequest {
  refundTxHex: string;
  signatures: string[];
  fundTxId: string;
  fundVout?: number;
  localFundPubkey: string;
  remoteFundPubkey: string;
}

export interface AddSignaturesToRefundTxResponse {
  hex: string;
}

/** Add a signature to fund transaction */
export interface AddSignatureToFundTransactionRequest {
  fundTxHex: string;
  signature: string;
  prevTxId: string;
  prevVout: number;
  pubkey: string;
}

export interface AddSignatureToFundTransactionResponse {
  hex: string;
}

/** Create an adaptor signature for a CET */
export interface CreateCetAdaptorSignatureRequest {
  cetHex: string;
  privkey: string;
  fundTxId: string;
  fundVout?: number;
  localFundPubkey: string;
  remoteFundPubkey: string;
  oraclePubkey: string;
  oracleRValues: string[];
  fundInputAmount: bigint | number;
  messages: string[];
}

export interface CreateCetAdaptorSignatureResponse {
  signature: string;
  proof: string;
}

/** Create an adaptor signature for a CET */
export interface CreateCetAdaptorSignaturesRequest {
  cetsHex: string[];
  privkey: string;
  fundTxId: string;
  fundVout?: number;
  localFundPubkey: string;
  remoteFundPubkey: string;
  oraclePubkey: string;
  oracleRValues: string[];
  fundInputAmount: bigint | number;
  messagesList: Messages[];
}

export interface CreateCetAdaptorSignaturesResponse {
  adaptorPairs: AdaptorPair[];
}

/** Create a CET */
export interface CreateCetRequest {
  localFundPubkey: string;
  remoteFundPubkey: string;
  localFinalAddress: string;
  remoteFinalAddress: string;
  localPayout: bigint | number;
  remotePayout: bigint | number;
  fundTxId: string;
  fundVout?: number;
  lockTime: bigint | number;
}

export interface CreateCetResponse {
  hex: string;
}

/** Create Dlc transactions */
export interface CreateDlcTransactionsRequest {
  payouts: PayoutRequest[];
  localFundPubkey: string;
  localFinalScriptPubkey: string;
  remoteFundPubkey: string;
  remoteFinalScriptPubkey: string;
  localInputAmount: bigint | number;
  localCollateralAmount: bigint | number;
  remoteInputAmount: bigint | number;
  remoteCollateralAmount: bigint | number;
  refundLocktime: bigint | number;
  localInputs: TxInInfoRequest[];
  localChangeScriptPubkey: string;
  remoteInputs: TxInInfoRequest[];
  remoteChangeScriptPubkey: string;
  feeRate: number;
  cetLockTime?: bigint | number;
  fundLockTime?: bigint | number;
  optionDest?: string;
  optionPremium?: bigint | number;
}

export interface CreateDlcTransactionsResponse {
  fundTxHex: string;
  cetsHex: string[];
  refundTxHex: string;
}

/** Create a fund transaction */
export interface CreateFundTransactionRequest {
  localPubkey: string;
  remotePubkey: string;
  outputAmount: bigint | number;
  localInputs: TxInRequest[];
  localChange: TxOutRequest;
  remoteInputs: TxInRequest[];
  remoteChange: TxOutRequest;
  feeRate: bigint | number;
  optionDest?: string;
  optionPremium?: bigint | number;
}

export interface CreateFundTransactionResponse {
  hex: string;
}

/** Create a refund transaction */
export interface CreateRefundTransactionRequest {
  localFinalScriptPubkey: string;
  remoteFinalScriptPubkey: string;
  localAmount: bigint | number;
  remoteAmount: bigint | number;
  lockTime: bigint | number;
  fundTxId: string;
  fundVout?: number;
}

export interface CreateRefundTransactionResponse {
  hex: string;
}

export interface ErrorResponse {
  error: InnerErrorResponse;
}

/** Get a signature for a fund transaction input */
export interface GetRawFundTxSignatureRequest {
  fundTxHex: string;
  privkey: string;
  prevTxId: string;
  prevVout: number;
  amount: bigint | number;
}

export interface GetRawFundTxSignatureResponse {
  hex: string;
}

/** Get a signature for a CET */
export interface GetRawRefundTxSignatureRequest {
  refundTxHex: string;
  privkey: string;
  fundTxId: string;
  fundVout?: number;
  localFundPubkey: string;
  remoteFundPubkey: string;
  fundInputAmount: bigint | number;
}

export interface GetRawRefundTxSignatureResponse {
  hex: string;
}

export interface InnerErrorResponse {
  code: number;
  type: string;
  message: string;
}

export interface Messages {
  messages: string[];
}

export interface PayoutRequest {
  local: bigint | number;
  remote: bigint | number;
}

/** Sign a CET */
export interface SignCetRequest {
  cetHex: string;
  fundPrivkey: string;
  fundTxId: string;
  fundVout?: number;
  localFundPubkey: string;
  remoteFundPubkey: string;
  fundInputAmount: bigint | number;
  adaptorSignature: string;
  oracleSignatures: string[];
}

export interface SignCetResponse {
  hex: string;
}

/** Sign a fund transaction input */
export interface SignFundTransactionRequest {
  fundTxHex: string;
  privkey: string;
  prevTxId: string;
  prevVout: number;
  amount: bigint | number;
}

export interface SignFundTransactionResponse {
  hex: string;
}

export interface TxInInfoRequest {
  txid: string;
  vout: number;
  redeemScript?: string;
  maxWitnessLength: number;
}

export interface TxInRequest {
  txid: string;
  vout: number;
}

export interface TxOutRequest {
  amount: bigint | number;
  address: string;
}

/** Verify a signature for a CET */
export interface VerifyCetAdaptorSignatureRequest {
  cetHex: string;
  adaptorSignature: string;
  adaptorProof: string;
  messages: string[];
  localFundPubkey: string;
  remoteFundPubkey: string;
  oraclePubkey: string;
  oracleRValues: string[];
  fundTxId: string;
  fundVout?: number;
  fundInputAmount: bigint | number;
  verifyRemote: boolean;
}

export interface VerifyCetAdaptorSignatureResponse {
  valid: boolean;
}

/** Verify a set of signatures for a set of CET */
export interface VerifyCetAdaptorSignaturesRequest {
  cetsHex: string[];
  adaptorPairs: AdaptorPair[];
  messagesList: Messages[];
  localFundPubkey: string;
  remoteFundPubkey: string;
  oraclePubkey: string;
  oracleRValues: string[];
  fundTxId: string;
  fundVout?: number;
  fundInputAmount: bigint | number;
  verifyRemote: boolean;
}

export interface VerifyCetAdaptorSignaturesResponse {
  valid: boolean;
}

/** Verify a signature for a mutual closing transaction */
export interface VerifyFundTxSignatureRequest {
  fundTxHex: string;
  signature: string;
  pubkey: string;
  prevTxId: string;
  prevVout: number;
  fundInputAmount: bigint | number;
}

export interface VerifyFundTxSignatureResponse {
  valid: boolean;
}

/** Verify a signature for a refund transaction */
export interface VerifyRefundTxSignatureRequest {
  refundTxHex: string;
  signature: string;
  localFundPubkey: string;
  remoteFundPubkey: string;
  fundTxId: string;
  fundVout?: number;
  fundInputAmount: bigint | number;
  verifyRemote: boolean;
}

export interface VerifyRefundTxSignatureResponse {
  valid: boolean;
}

async function handleCall<T1, T2>(
  func: (arg: string) => Promise<string>,
  request: T1
): Promise<T2> {
  return JSON.parse(await func(JSON.stringify(request)));
}

function CreateFundTransaction(
  request: CreateFundTransactionRequest
): Promise<CreateFundTransactionResponse> {
  return handleCall<
    CreateFundTransactionRequest,
    CreateFundTransactionResponse
  >(Cfddlc.CreateFundTransaction, request);
}

function SignFundTransaction(
  request: SignFundTransactionRequest
): Promise<SignFundTransactionResponse> {
  return handleCall<SignFundTransactionRequest, SignFundTransactionResponse>(
    Cfddlc.SignFundTransaction,
    request
  );
}

function GetRawFundTxSignature(
  request: GetRawFundTxSignatureRequest
): Promise<GetRawFundTxSignatureResponse> {
  return handleCall<
    GetRawFundTxSignatureRequest,
    GetRawFundTxSignatureResponse
  >(Cfddlc.GetRawFundTxSignature, request);
}

function AddSignatureToFundTransaction(
  request: AddSignatureToFundTransactionRequest
): Promise<AddSignatureToFundTransactionResponse> {
  return handleCall<
    AddSignatureToFundTransactionRequest,
    AddSignatureToFundTransactionResponse
  >(Cfddlc.AddSignatureToFundTransaction, request);
}

function VerifyFundTxSignature(
  request: VerifyFundTxSignatureRequest
): Promise<VerifyFundTxSignatureResponse> {
  return handleCall<
    VerifyFundTxSignatureRequest,
    VerifyFundTxSignatureResponse
  >(Cfddlc.VerifyFundTxSignature, request);
}

function CreateCet(request: CreateCetRequest): Promise<CreateCetResponse> {
  return handleCall<CreateCetRequest, CreateCetResponse>(
    Cfddlc.CreateCet,
    request
  );
}

function CreateRefundTransaction(
  request: CreateRefundTransactionRequest
): Promise<CreateRefundTransactionResponse> {
  return handleCall<
    CreateRefundTransactionRequest,
    CreateRefundTransactionResponse
  >(Cfddlc.CreateRefundTransaction, request);
}

function CreateDlcTransactions(
  request: CreateDlcTransactionsRequest
): Promise<CreateDlcTransactionsResponse> {
  return handleCall<
    CreateDlcTransactionsRequest,
    CreateDlcTransactionsResponse
  >(Cfddlc.CreateDlcTransactions, request);
}

function CreateCetAdaptorSignature(
  request: CreateCetAdaptorSignatureRequest
): Promise<CreateCetAdaptorSignatureResponse> {
  return handleCall<
    CreateCetAdaptorSignatureRequest,
    CreateCetAdaptorSignatureResponse
  >(Cfddlc.CreateCetAdaptorSignature, request);
}

function CreateCetAdaptorSignatures(
  request: CreateCetAdaptorSignaturesRequest
): Promise<CreateCetAdaptorSignaturesResponse> {
  return handleCall<
    CreateCetAdaptorSignaturesRequest,
    CreateCetAdaptorSignaturesResponse
  >(Cfddlc.CreateCetAdaptorSignatures, request);
}

function SignCet(request: SignCetRequest): Promise<SignCetResponse> {
  return handleCall<SignCetRequest, SignCetResponse>(Cfddlc.SignCet, request);
}

function VerifyCetAdaptorSignature(
  request: VerifyCetAdaptorSignatureRequest
): Promise<VerifyCetAdaptorSignatureResponse> {
  return handleCall<
    VerifyCetAdaptorSignatureRequest,
    VerifyCetAdaptorSignatureResponse
  >(Cfddlc.VerifyCetAdaptorSignature, request);
}

function VerifyCetAdaptorSignatures(
  request: VerifyCetAdaptorSignaturesRequest
): Promise<VerifyCetAdaptorSignaturesResponse> {
  return handleCall<
    VerifyCetAdaptorSignaturesRequest,
    VerifyCetAdaptorSignaturesResponse
  >(Cfddlc.VerifyCetAdaptorSignatures, request);
}
async function GetRawRefundTxSignature(
  request: GetRawRefundTxSignatureRequest
): Promise<GetRawRefundTxSignatureResponse> {
  return handleCall<
    GetRawRefundTxSignatureRequest,
    GetRawRefundTxSignatureResponse
  >(Cfddlc.GetRawRefundTxSignature, request);
}
async function AddSignaturesToRefundTx(
  request: AddSignaturesToRefundTxRequest
): Promise<AddSignaturesToRefundTxResponse> {
  return handleCall<
    AddSignaturesToRefundTxRequest,
    AddSignaturesToRefundTxResponse
  >(Cfddlc.AddSignaturesToRefundTx, request);
}
async function VerifyRefundTxSignature(
  request: VerifyRefundTxSignatureRequest
): Promise<VerifyRefundTxSignatureResponse> {
  return handleCall<
    VerifyRefundTxSignatureRequest,
    VerifyRefundTxSignatureResponse
  >(Cfddlc.VerifyRefundTxSignature, request);
}

export default {
  CreateFundTransaction,
  SignFundTransaction,
  CreateCetAdaptorSignatures,
  GetRawFundTxSignature,
  AddSignatureToFundTransaction,
  VerifyFundTxSignature,
  CreateCet,
  CreateRefundTransaction,
  CreateDlcTransactions,
  CreateCetAdaptorSignature,
  SignCet,
  VerifyCetAdaptorSignature,
  VerifyCetAdaptorSignatures,
  GetRawRefundTxSignature,
  AddSignaturesToRefundTx,
  VerifyRefundTxSignature,
};
