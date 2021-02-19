#ifndef cfddlc_api_jsonerror_hpp
#define cfddlc_api_jsonerror_hpp

#include "cfdcore/cfdcore_exception.h"
#include "cfd_dlc_js_api_json_autogen.h"  // NOLINT
#include "cfddlc_transactions.hpp"

namespace cfd {
namespace dlc {
namespace api {
namespace json {

using cfd::core::CfdException;
using cfd::core::JsonClassBase;
using cfd::core::JsonObjectVector;
using cfd::core::JsonValueVector;
using cfd::core::JsonVector;
// @formatter:off

// ------------------------------------------------------------------------
// ErrorResponse
// ------------------------------------------------------------------------
/**
 * @brief ErrorResponse
 */
class ErrorResponse : public ErrorResponseBase {
 public:
  /**
   * @brief CfdExceptionをErrorResponseに変換する.
   * @param cfde CfdException object
   * @return ErrorResponse object
   */
  static const ErrorResponse ConvertFromCfdException(const CfdException& cfde);

  /**
   * @brief InnerErrorResponseStructをErrorResponseに変換する.
   * @param[in] data  InnerErrorResponse struct
   * @return ErrorResponse object
   */
  static const ErrorResponse ConvertFromStruct(
      const InnerErrorResponseStruct& data);
};

// @formatter:on

}  // namespace json
}  // namespace api
}  // namespace dlc
}  // namespace cfd

#endif
