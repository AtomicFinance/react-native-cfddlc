#include <string>

#include "cfdcore/cfdcore_exception.h"
#include "cfddlc_api_jsonerror.hpp"  // NOLINT

namespace cfd {
namespace dlc {
namespace api {
namespace json {

using cfd::core::CfdException;
// @formatter:off

// ------------------------------------------------------------------------
// ErrorResponse
// ------------------------------------------------------------------------
const ErrorResponse ErrorResponse::ConvertFromCfdException(
    const CfdException& cfde) {
  ErrorResponse res;
  InnerErrorResponse inner_err;

  inner_err.SetCode(cfde.GetErrorCode());
  inner_err.SetType(cfde.GetErrorType());
  inner_err.SetMessage(cfde.what());

  res.SetError(inner_err);
  return res;
}

const ErrorResponse ErrorResponse::ConvertFromStruct(
    const InnerErrorResponseStruct& data) {
  ErrorResponse res;
  InnerErrorResponse inner_err;

  inner_err.ConvertFromStruct(data);

  res.SetError(inner_err);
  return res;
}

// @formatter:on

}  // namespace json
}  // namespace api
}  // namespace dlc
}  // namespace cfd
