var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
/**
 * A pipe to convert milliseconds to a string representation
 *
 * @export
 * @class AudioTimePipe
 * @implements {PipeTransform}
 */
var AudioTimePipe = /** @class */ (function () {
    function AudioTimePipe() {
    }
    /**
     * Transforms milliseconds to hh:mm:ss
     *
     * @method transform
     * @param {number} [value] The milliseconds
     * @return {string} hh:mm:ss
     */
    AudioTimePipe.prototype.transform = function (value) {
        if (value === undefined || Number.isNaN(value))
            return '';
        var s = Math.trunc(value % 60);
        var m = Math.trunc((value / 60) % 60);
        var h = Math.trunc(((value / 60) / 60) % 60);
        return h > 0 ? (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s) : (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
    };
    AudioTimePipe = __decorate([
        Pipe({ name: 'audioTime' })
    ], AudioTimePipe);
    return AudioTimePipe;
}());
export { AudioTimePipe };
//# sourceMappingURL=ionic-audio-time-pipe.js.map