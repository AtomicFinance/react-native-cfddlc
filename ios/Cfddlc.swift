import Foundation
import WebKit

let queue = DispatchQueue(label: "cfddlc-queue", qos: .userInitiated)

func handleCfddlcCall(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock,  operation: @escaping () -> String) {
    queue.async {
        let response = operation()
        resolve(response)
    }
}

@objc(Cfddlc)
class Cfddlc: NSObject {
    @objc static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    override init() {
        super.init()
        CfddlcBridge().initialize()
        
        // ??: prevents some crashes from occurring
        CfddlcBridge().createCetAdaptorSignatures("{}")
    }
    
    @objc
    func CreateFundTransaction(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().createFundTransaction(args as String)
        }
    }
    
    @objc
    func SignFundTransaction(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().signFundTransaction(args as String)
        }
    }
    
    @objc
    func GetRawFundTxSignature(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().getRawFundTxSignature(args as String)
        }
    }
    
    @objc
    func AddSignatureToFundTransaction(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().addSignature(toFundTransaction: args as String)
        }
    }
    
    @objc
    func VerifyFundTxSignature(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().verifyFundTxSignature(args as String)
        }
    }
    
    @objc
    func CreateCet(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().createCet(args as String)
        }
    }
    
    @objc
    func CreateRefundTransaction(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().createRefundTransaction(args as String)
        }
    }
    
    @objc
    func CreateDlcTransactions(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().createDlcTransactions(args as String)
        }
    }
    
    @objc
    func CreateCetAdaptorSignature(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().createCetAdaptorSignature(args as String)
        }
    }
    
    @objc
    func SignCet(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().signCet(args as String)
        }
    }
    
    @objc
    func VerifyCetAdaptorSignature(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().verifyCetAdaptorSignature(args as String)
        }
    }
    
    @objc
    func VerifyCetAdaptorSignatures(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().verifyCetAdaptorSignatures(args as String)
        }
    }
    
    @objc
    func GetRawRefundTxSignature(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().getRawRefundTxSignature(args as String)
        }
    }
    
    @objc
    func AddSignaturesToRefundTx(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().addSignatures(toRefundTx: args as String)
        }
    }
    
    @objc
    func VerifyRefundTxSignature(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().verifyRefundTxSignature(args as String)
        }
    }
    
    @objc
    func CreateCetAdaptorSignatures(_ args: NSString, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        handleCfddlcCall(resolve: resolve, reject: reject) {
            CfddlcBridge().createCetAdaptorSignatures(args as String)
        }
    }
}
