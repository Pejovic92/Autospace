'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.AppService = void 0
const common_1 = require('@nestjs/common')
const sample_lib_1 = require('@autospace/sample-lib')
@((0, common_1.Injectable)())
class AppService {
  getHello() {
    return 'Hello World!' + (0, sample_lib_1.add)(23, 33)
  }
}
exports.AppService = AppService
