// Google Apps Script methods available to scripts
declare namespace google {
  namespace script {
    namespace run {
      function withFailureHandler(callback: (error: Error, object?: any) => void): any;
      function withSuccessHandler(callback: (value: any, object?: any) => void): any;
    }
  }
}