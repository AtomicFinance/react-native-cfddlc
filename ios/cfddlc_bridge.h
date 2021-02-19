#import <Foundation/Foundation.h>
@interface CfddlcBridge : NSObject
- (NSString *) Initialize;
- (NSString *) CreateFundTransaction:(NSString *)request;
- (NSString *) SignFundTransaction:(NSString *)request;
- (NSString *) GetRawFundTxSignature:(NSString *)request;
- (NSString *) AddSignatureToFundTransaction:(NSString *)request;
- (NSString *) VerifyFundTxSignature:(NSString *)request;
- (NSString *) CreateCet:(NSString *)request;
- (NSString *) CreateRefundTransaction:(NSString *)request;
- (NSString *) CreateDlcTransactions:(NSString *)request;
- (NSString *) CreateCetAdaptorSignature:(NSString *)request;
- (NSString *) CreateCetAdaptorSignatures:(NSString *)request;
- (NSString *) SignCet:(NSString *)request;
- (NSString *) VerifyCetAdaptorSignature:(NSString *)request;
- (NSString *) VerifyCetAdaptorSignatures:(NSString *)request;
- (NSString *) GetRawRefundTxSignature:(NSString *)request;
- (NSString *) AddSignaturesToRefundTx:(NSString *)request;
- (NSString *) VerifyRefundTxSignature:(NSString *)request;
@end
