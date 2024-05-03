#import <Foundation/Foundation.h>
#import "cfddlc_bridge.h"
#import "cfddlcjs/cfddlcjs_api_json.h"

@implementation CfddlcBridge
- (NSString *) Initialize {
    std::string initMessage = "Initialized!";
    return [NSString
            stringWithCString:initMessage.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) CreateFundTransaction:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::CreateFundTransaction(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) CreateBatchFundTransaction:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::CreateBatchFundTransaction(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) SignFundTransaction:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::SignFundTransaction(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) GetRawFundTxSignature:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::GetRawFundTxSignature(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) AddSignatureToFundTransaction:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::AddSignatureToFundTransaction(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) VerifyFundTxSignature:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::VerifyFundTxSignature(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) CreateCet:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::CreateCet(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) CreateRefundTransaction:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::CreateRefundTransaction(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) CreateDlcTransactions:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::CreateDlcTransactions(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) CreateBatchDlcTransactions:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::CreateBatchDlcTransactions(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) CreateCetAdaptorSignature:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::CreateCetAdaptorSignature(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) CreateCetAdaptorSignatures:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::CreateCetAdaptorSignatures(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) SignCet:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::SignCet(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) VerifyCetAdaptorSignature:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::VerifyCetAdaptorSignature(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) VerifyCetAdaptorSignatures:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::VerifyCetAdaptorSignatures(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) GetRawRefundTxSignature:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::GetRawRefundTxSignature(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) AddSignaturesToRefundTx:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::AddSignaturesToRefundTx(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
- (NSString *) VerifyRefundTxSignature:(NSString *)request {
    std::string request_string = std::string([request UTF8String]);
    std::string response = cfd::dlc::js::api::json::JsonMappingApi::VerifyRefundTxSignature(request_string);
    return [NSString
            stringWithCString:response.c_str()
            encoding:NSUTF8StringEncoding];
}
@end
