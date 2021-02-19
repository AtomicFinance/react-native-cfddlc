#ifndef cfddlc_api_json_h
#define cfddlc_api_json_h


#include <string>
#include <map>

/**
 * @brief cfdapi名前空間
 */
namespace cfd {
namespace dlc {
namespace api {
namespace json {

/// request and response function type.
using RequestFunction = std::function<std::string(const std::string &)>;
/// request and response function map.
using RequestFunctionMap = std::map<std::string, RequestFunction>;
/// response only function type.
using ResponseOnlyFunction = std::function<std::string()>;
/// response only function map.
using ResponseOnlyFunctionMap = std::map<std::string, ResponseOnlyFunction>;

/**
 * @brief 共通系の関数群クラス
 */
class JsonMappingApi {
 public:
  /**
   * @brief load functions.
   * @param[out] request_map        request-response function map.
   * @param[out] response_only_map  response-only function map.
   */
  static void LoadFunctions(
      RequestFunctionMap *request_map,
      ResponseOnlyFunctionMap *response_only_map);
    
    static std::string Init();

  /**
   * @brief GetSupportedFunctionのJSON API関数(request, response).
   * @return 戻り値(JSON文字列)
   */

  static std::string CreateFundTransaction(const std::string &request_message);

  static std::string SignFundTransaction(const std::string &request_message);

  static std::string GetRawFundTxSignature(const std::string &request_message);

  static std::string AddSignatureToFundTransaction(
      const std::string &request_message);

  static std::string VerifyFundTxSignature(const std::string &request_message);

  static std::string CreateCet(const std::string &request_message);

  static std::string CreateRefundTransaction(
      const std::string &request_message);

  static std::string CreateDlcTransactions(const std::string &request_message);
  static std::string CreateCetAdaptorSignature(
      const std::string &request_message);
  static std::string CreateCetAdaptorSignatures(
      const std::string &request_message);
  static std::string SignCet(const std::string &request_message);
  static std::string VerifyCetAdaptorSignature(
      const std::string &request_message);
  static std::string VerifyCetAdaptorSignatures(
      const std::string &request_message);
  static std::string GetRawRefundTxSignature(
      const std::string &request_message);
  static std::string AddSignaturesToRefundTx(
      const std::string &request_message);
  static std::string VerifyRefundTxSignature(
      const std::string &request_message);

 private:
  JsonMappingApi();
};

}  // namespace json
}  // namespace api
}  // namespace dlc
}  // namespace cfd

#endif /* cfddlc_api_json_h */
