#ifndef cfddlc_transactions_hpp
#define cfddlc_transactions_hpp

#include <stdio.h>
#include <string>
#include <sstream>
#include <vector>
#include <set>
#include <functional>

#include "cfd/cfd_common.h"
#include "cfddlc_struct.hpp"
#include "cfdcore/cfdcore_hdwallet.h"
#include "cfdcore/cfdcore_key.h"
#include "cfdcore/cfdcore_schnorrsig.h"
#include "cfdcore/cfdcore_exception.h"

namespace cfd {
namespace dlc {
namespace api {

using cfd::core::ByteData256;
using cfd::core::ExtPrivkey;
using cfd::core::ExtPubkey;
using cfd::core::Privkey;
using cfd::core::Pubkey;
using cfd::core::SchnorrPubkey;
using cfd::core::SchnorrSignature;

using cfd::core::CfdException;


InnerErrorResponseStruct ConvertCfdExceptionToStruct(const CfdException& cfde);

template <typename RequestStructType, typename ResponseStructType>
ResponseStructType ExecuteStructApi(
                                    const RequestStructType& request,
                                    std::function<ResponseStructType(const RequestStructType&)> call_function,
                                    std::string fuction_name) {
    ResponseStructType response;
    try {
        cfd::Initialize();
        
        response = call_function(request);
    } catch (const CfdException& cfde) {
        response.error = cfd::dlc::api::ConvertCfdExceptionToStruct(cfde);
    } catch (const std::exception& except) {
        response.error =
        cfd::dlc::api::ConvertCfdExceptionToStruct(CfdException());
    } catch (...) {
        response.error =
        cfd::dlc::api::ConvertCfdExceptionToStruct(CfdException());
    }
    return response;
}


class DlcTransactionsApi {
public:
    static CreateFundTransactionResponseStruct CreateFundTransaction(
          const CreateFundTransactionRequestStruct& request);
      static SignFundTransactionResponseStruct SignFundTransaction(
          const SignFundTransactionRequestStruct& request);
      static GetRawFundTxSignatureResponseStruct GetRawFundTxSignature(
          const GetRawFundTxSignatureRequestStruct& request);
      static AddSignatureToFundTransactionResponseStruct
      AddSignatureToFundTransaction(
          const AddSignatureToFundTransactionRequestStruct& request);
      static VerifyFundTxSignatureResponseStruct VerifyFundTxSignature(
          const VerifyFundTxSignatureRequestStruct& request);
      static CreateCetResponseStruct CreateCet(
          const CreateCetRequestStruct& request);
      static CreateRefundTransactionResponseStruct CreateRefundTransaction(
          const CreateRefundTransactionRequestStruct& request);
      static CreateDlcTransactionsResponseStruct CreateDlcTransactions(
          const CreateDlcTransactionsRequestStruct& request);
      static CreateCetAdaptorSignatureResponseStruct CreateCetAdaptorSignature(
          const CreateCetAdaptorSignatureRequestStruct& request);
      static CreateCetAdaptorSignaturesResponseStruct CreateCetAdaptorSignatures(
          const CreateCetAdaptorSignaturesRequestStruct& request);
      static GetRawRefundTxSignatureResponseStruct GetRawRefundTxSignature(
          const GetRawRefundTxSignatureRequestStruct& request);
      static SignCetResponseStruct SignCet(const SignCetRequestStruct& request);
      static VerifyCetAdaptorSignatureResponseStruct VerifyCetAdaptorSignature(
          const VerifyCetAdaptorSignatureRequestStruct& request);
      static VerifyCetAdaptorSignaturesResponseStruct VerifyCetAdaptorSignatures(
          const VerifyCetAdaptorSignaturesRequestStruct& request);
      static AddSignaturesToRefundTxResponseStruct AddSignaturesToRefundTx(
          const AddSignaturesToRefundTxRequestStruct& request);
      static VerifyRefundTxSignatureResponseStruct VerifyRefundTxSignature(
          const VerifyRefundTxSignatureRequestStruct& request);
private:
    static std::vector<Pubkey> ParsePubkeys(std::vector<std::string> input);
    static std::vector<SchnorrPubkey> ParseSchnorrPubkeys(
                                                          std::vector<std::string> input);
    static std::vector<SchnorrSignature> ParseSchnorrSignatures(
                                                                std::vector<std::string> input);
    static std::vector<ByteData256> HashMessages(std::vector<std::string> input);
    static std::vector<std::vector<ByteData256>> HashMessages(
                                                              std::vector<MessagesStruct> input);
};

}
}
}






#endif /* HelloWorld_hpp */
