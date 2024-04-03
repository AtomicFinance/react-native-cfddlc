import { NativeModules } from "react-native";
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
  localInputAmount: (bigint | number);
  localCollateralAmount: (bigint | number);
  localPayoutSerialId: (bigint | number);
  localChangeSerialId: (bigint | number);
  remoteInputAmount: (bigint | number);
  remoteCollateralAmount: (bigint | number);
  remotePayoutSerialId: (bigint | number);
  remoteChangeSerialId: (bigint | number);
  refundLocktime: (bigint | number);
  localInputs: TxInInfoRequest[];
  localChangeScriptPubkey: string;
  remoteInputs: TxInInfoRequest[];
  remoteChangeScriptPubkey: string;
  feeRate: number;
  cetLockTime?: (bigint | number);
  fundLockTime?: (bigint | number);
  fundOutputSerialId?: (bigint | number);
  optionDest?: string;
  optionPremium?: (bigint | number);
}

export interface CreateDlcTransactionsResponse {
  fundTxHex: string;
  cetsHex: string[];
  refundTxHex: string;
}

/** Create Batch Dlc transactions */
export interface CreateBatchDlcTransactionsRequest {
  localPayouts: (bigint | number)[];
  remotePayouts: (bigint | number)[];
  numPayouts: (bigint | number)[];
  localFundPubkeys: string[];
  localFinalScriptPubkeys: string[];
  remoteFundPubkeys: string[];
  remoteFinalScriptPubkeys: string[];
  localInputAmount: (bigint | number);
  localCollateralAmounts: (bigint | number)[];
  localPayoutSerialIds: (bigint | number)[];
  localChangeSerialId: (bigint | number);
  remoteInputAmount: (bigint | number);
  remoteCollateralAmounts: (bigint | number)[];
  remotePayoutSerialIds: (bigint | number)[];
  remoteChangeSerialId: (bigint | number);
  refundLocktimes: (bigint | number)[];
  localInputs: TxInInfoRequest[];
  localChangeScriptPubkey: string;
  remoteInputs: TxInInfoRequest[];
  remoteChangeScriptPubkey: string;
  feeRate: number;
  cetLockTime?: (bigint | number);
  fundLockTime?: (bigint | number);
  fundOutputSerialIds?: (bigint | number)[];
}

export interface CreateBatchDlcTransactionsResponse {
  fundTxHex: string;
  cetsHexList: string[];
  refundTxHexList: string[];
}

/** Create a fund transaction */
export interface CreateFundTransactionRequest {
  localPubkey: string;
  remotePubkey: string;
  outputAmount: (bigint | number);
  localInputs: TxInInfoRequest[];
  localChange: TxOutRequest;
  remoteInputs: TxInInfoRequest[];
  remoteChange: TxOutRequest;
  feeRate: (bigint | number);
  optionDest?: string;
  optionPremium?: (bigint | number);
  lockTime?: (bigint | number);
  localSerialId?: (bigint | number);
  remoteSerialId?: (bigint | number);
  outputSerialId?: (bigint | number);
}

export interface CreateFundTransactionResponse {
  hex: string;
}

/** Create a batch fund transaction */
export interface CreateBatchFundTransactionRequest {
  localPubkeys: string[];
  remotePubkeys: string[];
  outputAmounts: (bigint | number)[];
  localInputs: TxInInfoRequest[];
  localChange: TxOutRequest;
  remoteInputs: TxInInfoRequest[];
  remoteChange: TxOutRequest;
  feeRate: (bigint | number);
  lockTime?: (bigint | number);
  localSerialId?: (bigint | number);
  remoteSerialId?: (bigint | number);
  outputSerialIds: (bigint | number)[];
}

export interface CreateBatchFundTransactionResponse {
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

const parseBigInt = function (_: any, value: any) {
  return typeof value == "bigint" ? value.toString() : value;
};

async function handleCall<T1, T2>(
  func: (arg: string) => Promise<string>,
  request: T1
): Promise<T2> {
  return JSON.parse(await func(JSON.stringify(request, parseBigInt)));
}

export function CreateFundTransaction(
  request: CreateFundTransactionRequest
): Promise<CreateFundTransactionResponse> {
  return handleCall<
    CreateFundTransactionRequest,
    CreateFundTransactionResponse
  >(Cfddlc.CreateFundTransaction, request);
}

export function CreateBatchFundTransaction(
  request: CreateBatchFundTransactionRequest
): Promise<CreateBatchFundTransactionResponse> {
  return handleCall<
    CreateBatchFundTransactionRequest,
    CreateBatchFundTransactionResponse
  >(Cfddlc.CreateBatchFundTransaction, request);
}

export function SignFundTransaction(
  request: SignFundTransactionRequest
): Promise<SignFundTransactionResponse> {
  return handleCall<SignFundTransactionRequest, SignFundTransactionResponse>(
    Cfddlc.SignFundTransaction,
    request
  );
}

export function GetRawFundTxSignature(
  request: GetRawFundTxSignatureRequest
): Promise<GetRawFundTxSignatureResponse> {
  return handleCall<
    GetRawFundTxSignatureRequest,
    GetRawFundTxSignatureResponse
  >(Cfddlc.GetRawFundTxSignature, request);
}

export function AddSignatureToFundTransaction(
  request: AddSignatureToFundTransactionRequest
): Promise<AddSignatureToFundTransactionResponse> {
  return handleCall<
    AddSignatureToFundTransactionRequest,
    AddSignatureToFundTransactionResponse
  >(Cfddlc.AddSignatureToFundTransaction, request);
}

export function VerifyFundTxSignature(
  request: VerifyFundTxSignatureRequest
): Promise<VerifyFundTxSignatureResponse> {
  return handleCall<
    VerifyFundTxSignatureRequest,
    VerifyFundTxSignatureResponse
  >(Cfddlc.VerifyFundTxSignature, request);
}

export function CreateCet(
  request: CreateCetRequest
): Promise<CreateCetResponse> {
  return handleCall<CreateCetRequest, CreateCetResponse>(
    Cfddlc.CreateCet,
    request
  );
}

export function CreateRefundTransaction(
  request: CreateRefundTransactionRequest
): Promise<CreateRefundTransactionResponse> {
  return handleCall<
    CreateRefundTransactionRequest,
    CreateRefundTransactionResponse
  >(Cfddlc.CreateRefundTransaction, request);
}

export function CreateDlcTransactions(
  request: CreateDlcTransactionsRequest
): Promise<CreateDlcTransactionsResponse> {
  return handleCall<
    CreateDlcTransactionsRequest,
    CreateDlcTransactionsResponse
  >(Cfddlc.CreateDlcTransactions, request);
}

export function CreateBatchDlcTransactions(
  request: CreateBatchDlcTransactionsRequest
): Promise<CreateBatchDlcTransactionsResponse> {
  return handleCall<
    CreateBatchDlcTransactionsRequest,
    CreateBatchDlcTransactionsResponse
  >(Cfddlc.CreateBatchDlcTransactions, request);
}

export function CreateCetAdaptorSignature(
  request: CreateCetAdaptorSignatureRequest
): Promise<CreateCetAdaptorSignatureResponse> {
  return handleCall<
    CreateCetAdaptorSignatureRequest,
    CreateCetAdaptorSignatureResponse
  >(Cfddlc.CreateCetAdaptorSignature, request);
}

export function CreateCetAdaptorSignatures(
  request: CreateCetAdaptorSignaturesRequest
): Promise<CreateCetAdaptorSignaturesResponse> {
  return handleCall<
    CreateCetAdaptorSignaturesRequest,
    CreateCetAdaptorSignaturesResponse
  >(Cfddlc.CreateCetAdaptorSignatures, request);
}

export function SignCet(request: SignCetRequest): Promise<SignCetResponse> {
  return handleCall<SignCetRequest, SignCetResponse>(Cfddlc.SignCet, request);
}

export function VerifyCetAdaptorSignature(
  request: VerifyCetAdaptorSignatureRequest
): Promise<VerifyCetAdaptorSignatureResponse> {
  return handleCall<
    VerifyCetAdaptorSignatureRequest,
    VerifyCetAdaptorSignatureResponse
  >(Cfddlc.VerifyCetAdaptorSignature, request);
}

export function VerifyCetAdaptorSignatures(
  request: VerifyCetAdaptorSignaturesRequest
): Promise<VerifyCetAdaptorSignaturesResponse> {
  return handleCall<
    VerifyCetAdaptorSignaturesRequest,
    VerifyCetAdaptorSignaturesResponse
  >(Cfddlc.VerifyCetAdaptorSignatures, request);
}
export function GetRawRefundTxSignature(
  request: GetRawRefundTxSignatureRequest
): Promise<GetRawRefundTxSignatureResponse> {
  return handleCall<
    GetRawRefundTxSignatureRequest,
    GetRawRefundTxSignatureResponse
  >(Cfddlc.GetRawRefundTxSignature, request);
}
export function AddSignaturesToRefundTx(
  request: AddSignaturesToRefundTxRequest
): Promise<AddSignaturesToRefundTxResponse> {
  return handleCall<
    AddSignaturesToRefundTxRequest,
    AddSignaturesToRefundTxResponse
  >(Cfddlc.AddSignaturesToRefundTx, request);
}
export function VerifyRefundTxSignature(
  request: VerifyRefundTxSignatureRequest
): Promise<VerifyRefundTxSignatureResponse> {
  return handleCall<
    VerifyRefundTxSignatureRequest,
    VerifyRefundTxSignatureResponse
  >(Cfddlc.VerifyRefundTxSignature, request);
}
